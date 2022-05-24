<script setup>
	import aplikasiAndroid from "/src/data/aplikasiAndroid.yml"
	import website from "/src/data/website.yml"

	import IconWa from '/src/icon/wa.vue'

	const list = [
		{
			judul: 'Aplikasi Android',
			data: aplikasiAndroid
		},
		{
			judul: 'Website',
			data: website
		},
	]
</script>

<template>
	<div class="w-full min-h-screen bg-slate-800 text-slate-200 p-5">
		<h1 class="text-xl mb-3">Hai, Aku <strong class="font-bold">Zen</strong></h1>
		<p class="italic text-sm mb-7">Aku suka membuat Aplikasi Android, Chrome Extension, dan Website</p>

		<div class="mb-7 last:mb-0" v-for='z in list'>
			<h2 class="judul-item">{{ z.judul }}</h2>
			<div class="isi-item">
				<a v-for="x in z.data.sort((a, b) => a.judul > b.judul ? 1 : -1)" :href="x.link">{{ x.judul }}</a>
			</div>
		</div>

	</div>

	<a class="fixed bottom-3 right-3" href="https://wa.me/6281545143654">
		<IconWa></IconWa>
	</a>
</template>

<style scoped>
	.judul-item {
		@apply mb-3
	}
	.judul-item {
		@apply text-sm uppercase font-bold
	}
	.isi-item a {
		@apply text-sm mr-3 mb-3 inline-block text-slate-800 px-3 py-2 rounded bg-slate-200
	}
</style>
