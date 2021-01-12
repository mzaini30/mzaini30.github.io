<form on:submit|preventDefault={ubah}>
	<div class="mb-3">
		<input class="form-control" required placeholder="Judul" bind:value={judul}>
	</div>
	<div class="mb-3">
		<input class="form-control" required placeholder="Label" list="label" bind:value={label}>
	</div>
	<datalist id="label">
		{#each listLabel as x}
			<option value={x.label}>
		{/each}
	</datalist>
	<!--
	<div class="mb-1">
		{#if listLabel}
			{#each listLabel as x}
				<div class="btn btn-light me-2 mb-2" on:click={() => label = x.label}>{x.label}</div>
			{/each}
		{/if}
	</div>
	-->
	<div class="mb-3">
		<textarea bind:this={elIsi} class="form-control" placeholder="Isi" bind:value={isi}></textarea>
	</div>
	<div class="mb-3">
		<input type="submit" value="Ubah" class="btn btn-success">
	</div>
</form>
<svelte:head>
	<title>Edit {judul}</title>
</svelte:head>
<script>
	export let slug
	let elIsi
	let [judul, label, isi, listLabel] = ["", "", "", []]
	import {onMount} from "svelte"
	import {sql, blog} from "@/api"
	import {clean} from "@/tools"
	import {goto} from "@roxi/routify"
	import btoaPro from 'btoa-pro'
	const aturTinggi = () => {
		const tingginya = () => elIsi.style.height = `${window.innerHeight - 250}px`
		tingginya()
		window.addEventListener("resize", tingginya)
	}
	onMount(() => aturTinggi())
	const ubah = async () => {
		const body = new FormData
		body.append('sql', btoaPro(`
			update database_${blog}
			set
				judul = '${clean(judul)}',
				label = '${clean(label)}',
				isi = '${clean(isi)}'
			where slug = '${slug}'
		`))
		let lagiUpdate = await fetch(sql, {
			method: 'post',
			body
		})
		lagiUpdate = await lagiUpdate
		if (lagiUpdate) {
			alert('Sudah diupdate')
		}
	}
	const ambilLabel = async () => {
		const body = new FormData
		body.append("sql", btoaPro(`
			select distinct label
			from database_${blog}
			order by label
		`))
		let semuaLabel = await fetch(sql, {
			method: "post",
			body
		}).then(x => x.json())
		semuaLabel = await semuaLabel
		listLabel = semuaLabel
	}
	ambilLabel()
	const init = async () => {
		const body = new FormData
		body.append('sql', btoaPro(`
			select judul, label, isi
			from database_${blog}
			where slug = '${slug}'
		`))
		let datanya = await fetch(sql, {
			method: 'post',
			body
		}).then(x => x.json())
		datanya = await datanya
		judul = datanya[0].judul
		label = datanya[0].label
		isi = datanya[0].isi
	}
	init()
</script>
