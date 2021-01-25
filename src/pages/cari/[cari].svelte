<svelte:head>
	<title>Cari {decodeURIComponent(cari)}</title>
</svelte:head>

<script type="text/javascript">
	export let cari
	let [data, yangDicari] = [[], '']
	let iklannya = ""
	import {sql, blog} from "@/api"
	import {goto} from '@roxi/routify'
	import {clean, acak} from '@/tools'
	import {iklan} from "@/iklan"
	import btoaPro from 'btoa-pro'
	const mulaiCari = () => $goto(`/cari/${encodeURIComponent(yangDicari)}`)
	const hasilCari = async () => {
		let teksCari = clean(decodeURIComponent(cari))
		yangDicari = teksCari
		const body = new FormData
		body.append('sql', btoaPro(`
			select slug, judul
			from database_${blog}
			where
				judul like '%${teksCari}%' or
				label like '%${teksCari}%' or
				isi like '%${teksCari}%'
			order by judul
		`))
		let prosesCari = await fetch(sql, {
			method: 'post', 
			body
		}).then(x => x.json())
		prosesCari = await prosesCari
		if (prosesCari) {
			data = prosesCari
		} else {
			data = []
			data[0] = {
				'slug': '',
				'judul': `${teksCari} nggak ada`
			}
		}
	}
	const tampilIklan = () => iklannya = acak(iklan)[0]
	$: if (cari) {
		hasilCari()
	}
	$: if (cari){
		tampilIklan()
	}
</script>

<form on:submit|preventDefault={mulaiCari}>
 <div class="form-group">
  <input class="form-control" placeholder="Cari apa?" type="search" bind:value={yangDicari} required>
 </div>
</form>
<div class="list-group mt-3 mb-3">
	{#if data}
		{#each data as x}
			<a href="/{x.slug}" class="list-group-item list-group-item-dark list-group-item-action">{x.judul}</a>
		{/each}
	{/if}
</div>
<div class="mb-3">
	<center>
		{@html iklannya}
	</center>
</div>
