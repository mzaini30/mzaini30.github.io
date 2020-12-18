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
 {#each Array(50) as _}
 <a href="/tes" class="list-group-item list-group-item-action">Tes</a>
 {/each}
</div>
<svelte:head>
 <title>Zen</title>
</svelte:head>
<script>
 import {isLogin} from "@/store"
 const keluar = () => {
 	const tanya = confirm("Keluar kah?")
 	if (tanya){
 		localStorage.removeItem("password")
 		$isLogin = false
 	}
 }
</script>
