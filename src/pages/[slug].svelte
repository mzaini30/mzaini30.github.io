<script>
	export let slug
	import marked from "marked"
	import {highlight} from "highlight.js"
	import {sql, blog} from "@/api"
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
		data = isinya[0]
	}
	init()
</script>
{#if data.isi}
	<h1>{data.judul}</h1>
	<p><em>{data.tanggal}</em></p>
	{@html marked(data.isi)}
{/if}
<svelte:head>
	<title>{data.judul}</title>
</svelte:head>
