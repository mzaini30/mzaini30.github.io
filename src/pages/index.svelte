<form on:submit|preventDefault={mulaiCari}>
 <div class="form-group">
  <input class="form-control" placeholder="Cari apa?" type="search" bind:value={yangDicari} required>
 </div>
</form>
{#if $isLogin}
	<div class="mt-3 d-flex justify-content-between">
		<a href="/admin/tulis" class="btn btn-info">Tulis</a>
		<a href="/" on:click|preventDefault={keluar} class="btn btn-warning">Keluar</a>
	</div>
{/if}
<div class="list-group mt-3 mb-3">
	{#if data}
		{#each data as x}
			<a href="/{x.slug}" class="list-group-item list-group-item-action">{x.judul}</a>
		{/each}
	{/if}
</div>
<div class="mb-3">
	<a href="/halaman/2" class="btn btn-primary">Halaman Berikutnya</a>
</div>

<svelte:head>
 <title>Zen</title>
</svelte:head>

<script>
 import {isLogin, perHalaman} from "@/store"
 import {sql, blog} from "@/api"
 import {goto} from '@roxi/routify'
 import btoaPro from 'btoa-pro'
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
 	const body = new FormData
 	body.append("sql", btoaPro(`
		select slug, judul
		from database_${blog}
		order by id desc
		limit ${$perHalaman}
 	`))
 	let datanya = await fetch(sql, {
 		method: "post",
 		body
 	}).then(x => x.json())
 	datanya = await datanya
 	data = datanya
 }
 init()
</script>
