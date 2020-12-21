{#if data}
	<h1>{data.judul}</h1>
	<p><em>{data.tanggal}</em></p>
	{#if data.isi}
		{@html marked(data.isi)}
	{/if}
	<hr>
	<p>Kamu bisa memasukkan iklan di blog ini dengan cara kirim pesan di <a href="https://saweria.co/mzaini30">saweria.co/mzaini30</a></p>
{/if}
{#if $isLogin}
	<div class="d-flex mb-3 justify-content-between">
		<a href="/admin/edit/{slug}" class="btn btn-info">Edit</a>
		<a href="/" class="btn btn-danger" on:click|preventDefault={hapus}>Hapus</a>
	</div>
{/if}
{#if lainnya}
	<h2>Tulisan Lainnya</h2>
	<ul>
		{#each lainnya as x}
			<li><a href="/{x.slug}">{x.judul}</a></li>
		{/each}
	</ul>
{/if}
<div class="mb-3">
 <div class="card">
  <div class="card-body">Punya pertanyaan? WA aja ke <a href="https://wa.me/6281545143654">0815-4514-3654</a></div>
 </div>
</div>
<svelte:head>
	<title>{data.judul}</title>
</svelte:head>
<script>
	export let slug
	let lainnya = []
	import marked from "marked"
	import {highlight} from "highlight.js"
	import {sql, blog, label} from "@/api"
	import {isLogin} from "@/store"
	import {goto} from '@roxi/routify'
	const dapatkanLainnya = async () => {
		const body = new FormData
		body.append('sql', btoa(btoa(`
			select label
			from database_${blog}
			where slug = '${slug}'
		`)))
		let labelnya = await fetch(sql, {
			method: 'post',
			body
		}).then(x => x.json())
		labelnya = await labelnya[0].label
		const body2 = new FormData
		body2.append('sql', btoa(btoa(`
			select slug, judul
			from database_${blog}
			where 
				label = '${labelnya}' and
				slug <> '${slug}'
			order by rand()
			limit 5
		`)))
		let olahLainnya = await fetch(sql, {
			method: 'post',
			body: body2
		}).then(x => x.json())
		olahLainnya = await olahLainnya
		lainnya = olahLainnya
	}
	$: if (slug) {
		dapatkanLainnya()
	}
	marked.setOptions({
		breaks: true,
		highlight: function(code, lang){
			if (lang == ""){
				lang = "javascript"
			}
			return highlight(lang, code).value
		}
	})
	let data = {}
	const init = async () => {
		const body = new FormData
		body.append("sql", btoa(btoa(`
			select judul, tanggal, isi
			from database_${blog}
			where slug = "${slug}"
		`)))
		let isinya = await fetch(sql, {
			method: "post",
			body
		}).then(x => x.json())
		isinya = await isinya
		if (isinya) {
			data = isinya[0]
		} else {
			data = {
				'judul': 'Nggak Ketemu',
				'tanggal': ''
			}
		}
	}
	$: if (slug){
		init()
	}
	const hapus = async () => {
		const tanya = confirm('Hapus kah?')
		if (tanya) {
			const body = new FormData
			body.append('sql', btoa(btoa(`
				delete from database_${blog}
				where slug = '${slug}'
			`)))
			let mulaiHapus = await fetch(sql, {
				method: 'post',
				body
			})
			mulaiHapus = await mulaiHapus
			if (mulaiHapus) {
				$goto('/')
			}
		}
	}
</script>
