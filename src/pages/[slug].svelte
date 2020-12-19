{#if data}
	<h1>{data.judul}</h1>
	<p><em>{data.tanggal}</em></p>
	{#if data.isi}
		{@html marked(data.isi)}
	{/if}
{/if}
{#if $isLogin}
	<div class="d-flex mb-3 justify-content-between">
		<a href="/admin/edit/{slug}" class="btn btn-info">Edit</a>
		<a href="/" class="btn btn-danger" on:click|preventDefault={hapus}>Hapus</a>
	</div>
{/if}
<div class="mb-3">
	<script src="https://utteranc.es/client.js"
        repo="mzaini30/kolom-komentar"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
	</script>
</div>
<svelte:head>
	<title>{data.judul}</title>
</svelte:head>
<script>
	export let slug
	import marked from "marked"
	import {highlight} from "highlight.js"
	import {sql, blog} from "@/api"
	import {isLogin} from "@/store"
	import {goto} from '@roxi/routify'
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