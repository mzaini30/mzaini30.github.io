<script setup>
	import aplikasiAndroid from "/src/data/aplikasiAndroid.yml"
</script>

<template>
	<div class="w-full min-h-screen bg-slate-800 text-slate-200 p-5">
		<h1 class="text-xl mb-3">Hai, Aku <strong class="font-bold">Zen</strong></h1>
		<p class="italic text-sm mb-7">Aku suka membuat Aplikasi Android, Chrome Extension, dan Website</p>

		<h2 class="judul-item">Aplikasi Android</h2>
		<div class="isi-item">
			<a v-for="x in aplikasiAndroid.sort((a, b) => a.judul > b.judul ? 1 : -1)" :href="x.link">{{ x.judul }}</a>
		</div>
	</div>
</template>

<style scoped>
	.judul-item {
		@apply mb-3
	}
	.isi-item {
		@apply mb-7 last:mb-0
	}
	.judul-item {
		@apply text-sm uppercase font-bold
	}
	.isi-item a {
		@apply text-sm mr-3 mb-3 inline-block text-slate-800 px-3 py-2 rounded bg-slate-200
	}
</style>
