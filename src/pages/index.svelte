<form>
 <div class="form-group">
  <input class="form-control" placeholder="Cari apa?" type="search" required>
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
<svelte:head>
 <title>Zen</title>
</svelte:head>
<script>
 import {isLogin} from "@/store"
 import {sql, blog} from "@/api"
 let data = []
 const keluar = () => {
 	const tanya = confirm("Keluar kah?")
 	if (tanya){
 		localStorage.removeItem("password")
 		$isLogin = false
 	}
 }
 const init = async () => {
 	const body = new FormData
 	body.append("sql", btoa(btoa(`
		select slug, judul
		from database_${blog}
		order by id desc
 	`)))
 	let datanya = await fetch(sql, {
 		method: "post",
 		body
 	}).then(x => x.json())
 	datanya = await datanya
 	data = datanya
 }
 init()
</script>
