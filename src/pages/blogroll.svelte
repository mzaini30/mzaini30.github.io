<p>Ingin masuk list blogroll ini juga? Caranya adalah dengan memberikan komentar di salah satu postingan blog ini.</p>
<div class="list-group mb-3">
	{#if data}
		{#each data as x}
			<a href="{x.blog}" class="list-group-item list-group-item-dark list-group-item-action">{x.nama} ~ <em>{x.blog}</em></a>
		{/each}
	{/if}
</div>
<div class="mb-3">
	<center>
		{@html elIklan}
	</center>
</div>

<svelte:head>
	<title>Blogroll</title>
</svelte:head>

<script type="text/javascript">
	import {acak} from '@/tools'
	import {iklan} from '@/iklan'
	import {sql, komentar} from '@/api' // id, nama, blog, komentar, slug, tanggal
	import btoaPro from 'btoa-pro'
	let data = []
	let elIklan = ''
	const ambilLink = async () => {
		const body = new FormData
		body.append('sql', btoaPro(`
			select distinct nama, blog
			from database_${komentar}
			where blog <> ''
			order by nama
		`))
		let ambilData = await fetch(sql, {
			method: 'post',
			body
		}).then(x => x.json())
		ambilData = await ambilData
		data = ambilData
	}
	const initIklan = () => elIklan = acak(iklan)[0]
	initIklan()
	ambilLink()
</script>
