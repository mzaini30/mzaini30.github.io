<script>
	export let slug
	import marked from "marked"
	import {highlight} from "highlight.js"
	marked.setOptions({
		breaks: true,
		highlight: function(code, lang){
			if (lang == ""){
				lang = "javascript"
			}
			return highlight(lang, code).value
		}
	})
	let data = {
		judul: "Hello World",
		tanggal: "2020-12-12 12:12:12",
		isi: ` Hai... _halo_
hai

> Quote

\`\`\`
halo = async () => {
	await alert("hai")
}
\`\`\`

halo`
	}
</script>
{#if data}
	<h1>{data.judul}</h1>
	<p><em>{data.tanggal}</em></p>
	<div class="isi">{@html marked(data.isi)}</div>
{/if}
<svelte:head>
	<title>Hello World</title>
</svelte:head>
