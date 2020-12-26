<form on:submit|preventDefault={tambahkan}>
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
		<input type="submit" value="Publish" class="btn btn-success">
	</div>
</form>
<svelte:head>
	<title>Tulis</title>
</svelte:head>
<script>
	let elIsi
	let [judul, label, isi, listLabel] = ["", "", "", []]
	import {onMount} from "svelte"
	import {sql, blog} from "@/api"
	import {tanggal, slug, clean} from "@/tools"
	import {goto} from "@roxi/routify"
	const aturTinggi = () => {
		const tingginya = () => elIsi.style.height = `${window.innerHeight - 250}px`
		tingginya()
		window.addEventListener("resize", tingginya)
	}
	onMount(() => aturTinggi())
	const ambilLabel = async () => {
		const body = new FormData
		body.append("sql", btoa(btoa(`
			select distinct label
			from database_${blog}
			order by label
		`)))
		let semuaLabel = await fetch(sql, {
			method: "post",
			body
		}).then(x => x.json())
		semuaLabel = await semuaLabel
		listLabel = semuaLabel
	}
	ambilLabel()
	const tambahkan = async () => {
		const body = new FormData
		body.append("sql", btoa(btoa(`
			insert into database_${blog} (slug, judul, tanggal, isi, label)
			values ("${slug(judul)}", "${clean(judul)}", "${tanggal()}", "${clean(isi)}", "${clean(label).toLowerCase().replace(/ /g, '-')}")
		`)))
		let kirim = await fetch(sql, {
			method: "post",
			body
		})
		kirim = await kirim
		if (kirim){
			$goto(`/admin/edit/${slug(judul)}`)
		}
	}
</script>
