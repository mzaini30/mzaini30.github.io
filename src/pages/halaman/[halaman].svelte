<form on:submit|preventDefault={mulaiCari}>
 <div class="mb-3">
  <input class="form-control" placeholder="Cari apa?" type="search" bind:value={yangDicari} required>
 </div>
</form>
{#if $isLogin}
	<div class="mb-3 d-flex justify-content-between">
		<a href="/admin/tulis" class="btn btn-info">Tulis</a>
		<a href="/" on:click|preventDefault={keluar} class="btn btn-warning">Keluar</a>
	</div>
{/if}
<!--
<div class="mb-3">
	<center>
		{@html elIklan[0]}
	</center>
</div>
-->
<div class="list-group mb-3">
	{#if data}
		{#each data as x}
			<a href="/{x.slug}" class="list-group-item list-group-item-action">{x.judul}</a>
		{/each}
	{/if}
</div>
<div class="mb-3">
	<center>
		{@html elIklan[1]}
	</center>
</div>
{#if +dataSaatIni + 1 <= semuaData}
	<div class="mb-3">
		<a href="/halaman/{+halaman + 1}" class="btn btn-primary">Halaman Berikutnya</a>
	</div>
{/if}

<svelte:head>
 <title>Zen</title>
</svelte:head>

<script>
 import {isLogin, perHalaman} from "@/store"
 import {sql, blog} from "@/api"
 import {goto} from '@roxi/routify'
 import btoaPro from 'btoa-pro'
 import {iklan} from '@/iklan'
 import {acak} from '@/tools'
 let elIklan = ['', '']
 let [semuaData, dataSaatIni] = ['', '']
 export let halaman
 let [data, yangDicari] = [[], '']
 const keluar = () => {
 	const tanya = confirm("Keluar kah?")
 	if (tanya){
 		localStorage.removeItem("password")
 		$isLogin = false
 	}
 }
 const mulaiCari = () => $goto(`/cari/${encodeURIComponent(yangDicari)}`)
 const init = async () => {
 	dataSaatIni = halaman * $perHalaman

 	const body = new FormData
 	body.append("sql", btoaPro(`
		select slug, judul
		from database_${blog}
		order by id desc
		limit ${(halaman - 1) * $perHalaman}, ${$perHalaman}
 	`))
 	let datanya = await fetch(sql, {
 		method: "post",
 		body
 	}).then(x => x.json())
 	datanya = await datanya
 	data = datanya

 	const body2 = new FormData
 	body2.append('sql', btoaPro(`
 		select count(*) as banyak
 		from database_${blog}
 	`))
 	let banyak = await fetch(sql, {
 		method: 'post',
 		body: body2
 	}).then(x => x.json())
 	banyak = await banyak[0].banyak
 	semuaData = banyak
 }
 // init()
 $: if (halaman) {
 	init()
 }
 const pilihIklan = () => {
 	elIklan = acak(iklan)
 }
 $: if (halaman) {
 	pilihIklan()
 }
</script>
