<script setup="">
	import Kembali from '/src/icon/kembali.vue'
	import {onMounted} from 'vue'
	import {Head} from '@vueuse/head'
	import {acak} from 'kumpulan-tools'
	import postingan from '/src/data/postingan.yml'
	import {useRoute, useRouter} from 'vue-router'

	const {push} = useRouter()

	function dapatkanJudul(){
		document.title = document.querySelector('h1').innerText
	}

	function menuju(x){
		push(x)
		setTimeout(dapatkanJudul, 500)
	}

	onMounted(() => dapatkanJudul())
</script>

<template>
	<Head>
		<link rel="stylesheet" href="/prism-monokai.css" />
	</Head>
	<div class="p-5 prose konten mx-auto">
		<router-link to="/" class='text-sm !no-underline mb-3 block !font-bold uppercase'><Kembali class='inline-block w-5 h-auto'></Kembali> Kembali ke beranda</router-link>
		<router-view></router-view>
		<h2>Tulisan Lainnya</h2>
		<ol>
			<li v-for='x in acak(postingan).filter(x => x.link != useRoute().path).filter((x, n) => n < 5)'>
				<a href='/' @click.prevent='menuju(x.link)'>{{ x.judul }}</a>
			</li>
		</ol>
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
	li:empty {display: none;}
</style>