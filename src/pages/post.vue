<script setup="">
	import Kembali from '/src/icon/kembali.vue'
</script>

<template>
	<div class="p-5 prose mx-auto">
		<router-link to="/" class='text-sm no-underline mb-3 block font-bold uppercase'><Kembali class='inline-block w-5 h-auto'></Kembali> Kembali ke beranda</router-link>
		<router-view></router-view>
	</div>
</template>