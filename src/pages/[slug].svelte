{#if data}
	<h1>{data.judul}</h1>
	<p><em>{data.tanggal}</em></p>
	{#if data.isi}
		<div class="isiBlog">
			{@html yt(marked(data.isi))}
		</div>
	{/if}
	<hr>
	<p><em>Stay Connected: <a href="https://facebook.com/mzaini30">Facebook</a> ~ <a href="https://instagram.com/mzaini30">Instagram</a> ~ <a href="https://twitter.com/blogodop">Twitter</a></em></p>
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
<!--
<div class="mb-3">
 <div class="card">
  <div class="card-body">Punya pertanyaan? WA aja ke <a href="https://wa.me/6281545143654">0815-4514-3654</a></div>
 </div>
</div>
-->
{#if komentarnya}
	<h2>Semua Komentar</h2>
	<ol>
		{#each komentarnya as x}
			<li>
				<p><strong>
					{#if x.blog != ""}
						<a rel="nofollow" href={x.blog}>{x.nama}</a>
					{:else}
						{x.nama}
					{/if}
				</strong></p>
				<p><em>{x.tanggal}</em></p>
				{#if x.komentar}
					<p class="isiKomentar">{x.komentar.trim()}</p>
				{/if}
			</li>
		{/each}
	</ol>
{/if}
<form on:submit|preventDefault={kirimKomentar}>
	<h2>Tambahkan Komentar</h2>
	<div class="mb-3">
		<input class="form-control" placeholder="Nama" bind:value={nama} required>
	</div>
	<div class="mb-3">
		<input type="url" class="form-control" bind:value={urlBlog} placeholder="URL Blog (opsional)">
	</div>
	<div class="mb-3">
		<textarea class="form-control" rows="5" placeholder="Komentar" bind:value={isiKomentar} required></textarea>
	</div>
	<div class="mb-3">
		<input type="submit" value="Kirim Komentar" class="btn btn-success">
	</div>
</form>

<svelte:head>
	<title>{data.judul}</title>
</svelte:head>

<script>
	export let slug
	let lainnya = []
	let komentarnya = []
	let [nama, urlBlog, isiKomentar] = ["", "", ""]
	nama = localStorage.komentarNama ? localStorage.komentarNama : ''
	urlBlog = localStorage.komentarUrlBlog ? localStorage.komentarUrlBlog : ''
	import marked from "marked"
	import yt from "embed-youtube"
	// import VConsole from "vconsole"
	import {highlight} from "highlight.js"
	import {sql, blog, label, komentar} from "@/api"
	import {isLogin} from "@/store"
	import {goto} from '@roxi/routify'
	import {clean, tanggal} from "@/tools"
	// new VConsole
	const ambilKomentar = async () => {
		const body = new FormData
		body.append("sql", btoa(btoa(`
			select nama, blog, tanggal, komentar
			from database_${komentar}
			where slug = "${slug}"
		`)))
		let semuaKomentar = await fetch(sql, {
			method: "post",
			body
		}).then(x => x.json())
		semuaKomentar = await semuaKomentar
		komentarnya = semuaKomentar
	}
	$: if (slug){
		ambilKomentar()
	}
	const kirimKomentar = async () => {
		const body = new FormData
		body.append("sql", btoa(btoa(`
			insert into database_${komentar} (nama, blog, komentar, tanggal, slug)
			values ("${clean(nama)}", "${clean(urlBlog)}", "${clean(isiKomentar)}", "${tanggal()}", "${slug}")
		`)))
		let kirim = await fetch(sql, {
			method: "post",
			body
		})
		kirim = await kirim
		if (kirim){
			ambilKomentar()
			alert("Komentar sudah terkirim")
			// [nama, urlBlog, isiKomentar] = ["", "", ""]
			// nama = ""
			// urlBlog = ""
			localStorage.setItem('komentarNama', nama)
			localStorage.setItem('komentarUrlBlog', urlBlog)
			isiKomentar = ""
		}
	}
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
	let data = {
		judul: '',
		tanggal: '',
		isi: ''
	}
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

<style>
	.isiKomentar {
		white-space: pre-wrap;
	}
</style>
