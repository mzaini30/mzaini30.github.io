<script setup="">
	import Kembali from '/src/icon/kembali.vue'
	import {onMounted} from 'vue'
	import {Head} from '@vueuse/head'

	onMounted(() => {
		document.title = document.querySelector('h1').innerText
	})
</script>

<template>
	<Head>
		<link rel="stylesheet" href="/prism-monokai.css" />
	</Head>
	<div class="p-5 prose konten mx-auto">
		<router-link to="/" class='text-sm !no-underline mb-3 block !font-bold uppercase'><Kembali class='inline-block w-5 h-auto'></Kembali> Kembali ke beranda</router-link>
		<router-view></router-view>
	</div>
</template>

<style>
	.konten pre {
		@apply !bg-slate-800 text-white
	}
	.konten.prose :where(:not(pre) > code):not(.not-prose)::before, 
	.konten.prose :where(:not(pre) > code):not(.not-prose)::after {
    content: "";
	}
</style>