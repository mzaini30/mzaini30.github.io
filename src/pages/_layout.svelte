<div class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
 <div class="container">
  <a class="navbar-brand" href="/">Zen</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" on:click={() => menu = !menu}>
   <span class="navbar-toggler-icon"></span>
  </button>
  {#if menu}
  <div class="collapsettt navbar-collapse" id="navbarSupportedContent">
   <ul class="navbar-nav me-auto mb-2ttt mb-lg-0">
    {#each Array(20) as _}
    <li class="nav-item">
     <a class="nav-link" aria-current="page" href="/" on:click={() => menu = !menu}>Tes</a>
    </li>
    {/each}
   </ul>
  </div>
  {/if}
 </div>
</div>
<div class="container isi">
 <slot/>
</div>
<script>
 let menu = false
</script>
<style>
 .isi {
 	padding-top: 70px;
 }
 .navbar-nav {
 	max-height: 200px;
 	overflow: auto;
 }
</style>
