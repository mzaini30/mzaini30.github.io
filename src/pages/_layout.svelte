<div class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
 <div class="container container-navbar">
  <a class="navbar-brand" href="/">Zen</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" on:click={() => menu = !menu}>
   <span class="navbar-toggler-icon"></span>
  </button>
  {#if menu}
  <div class="collapsettt navbar-collapse" id="navbarSupportedContent">
   <ul class="navbar-nav me-auto mb-2ttt mb-lg-0">
   {#if labelnya}
    {#each labelnya as x}
    <li class="nav-item">
     <a class="nav-link" aria-current="page" href="/cari/{x.label}" on:click={ubahUkuran}>{x.label}</a>
    </li>
    {/each}
   {/if}
   </ul>
  </div>
  {/if}
 </div>
</div>
<div class="container isi">
  <div class="row">
    <div class="col-sm-2 d-none d-sm-block">
      <div class="melayang iklannya">
        {@html iklan[0]}
      </div>
    </div>
    <div class="col-sm">
      <slot/>
    </div>
    <div class="col-sm-2 d-none d-sm-block">
      <div class="melayang iklannya">
        {@html iklan[1]}
      </div>
    </div>
  </div>
</div>

<script>
 import {isLogin} from "@/store"
 import {sql, admin, blog} from "@/api"
 import {clean, acak} from "@/tools"
 import btoaPro from 'btoa-pro'
 import {iklanPanjang} from '@/iklan'
 // import VConsole from "vconsole"
 // new VConsole
 let menu = false
 let iklan = ['', '']
 const cekUkuran = () => {
  if (window.innerWidth >= 992) {
    menu = true
  } else {
    menu = false
  }
 }
 const ubahUkuran = () => {
  if (window.innerWidth < 992) {
    menu = !menu
  }
 }
 cekUkuran()
 window.addEventListener('resize', cekUkuran)
 let labelnya = []
 const cariLabel = async () => {
 	const body = new FormData
 	body.append("sql", btoaPro(`
		select distinct label
		from database_${blog}
		order by label
 	`))
 	let kumpulLabel = await fetch(sql, {
 		method: "post",
 		body
 	}).then(x => x.json())
 	kumpulLabel = await kumpulLabel
 	labelnya = kumpulLabel
 }
 cariLabel()
 const cekLogin = async () => {
 	if (localStorage.password){
 		let body = new FormData
 		body.append("sql", btoaPro(`
			select count(*) as banyak
			from database_${admin}
			where password = "${clean(localStorage.password)}"
 		`))
 		let loginKah = await fetch(sql, {
 			method: "post",
 			body
 		}).then(x => x.json())
 		loginKah = await loginKah
 		if (loginKah[0].banyak > 0){
 			$isLogin = true
 		}
 	}
 }
 cekLogin()
 const ambilIklan = () => {
  iklan = acak(iklanPanjang)
 }
 ambilIklan()
</script>

<style>
 .isi {
 	padding-top: 70px;
 }
 .navbar-nav {
 	max-height: 200px;
 	overflow: auto;
  overflow-x: hidden;
 }
 .nav-link {
  white-space: nowrap;
 }
 .container-navbar {
  overflow-x: hidden;
 }
 .navbar-toggler:focus {
  box-shadow: none;
 }
 .melayang {
  position: sticky;
  top: 70px;
 }
 :global(.iklannya img){
  width: 100%;
  margin-bottom: 20px;
 }
</style>
