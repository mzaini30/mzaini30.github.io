<form>
 <div class="form-group">
  <input class="form-control" placeholder="Cari apa?" type="search" required>
 </div>
</form>
<div class="list-group mt-3 mb-3">
 {#each Array(50) as _}
 <a href="/tes" class="list-group-item list-group-item-action">Tes</a>
 {/each}
</div>
<svelte:head>
 <title>Zen</title>
</svelte:head>
