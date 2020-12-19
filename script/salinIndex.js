const fetch = require('node-fetch')
const btoa = require('btoa')
const FormData = require('form-data')
const fs = require('fs').promises
const data = require('./data')
const listPostingan = async () => {
	const sumber = await fs.readFile('public/index.html', 'utf8')
	const body = new FormData
	body.append('sql', btoa(btoa(`
		select judul, isi, slug
		from database_${data.blog}
	`)))
	let ambilList = await fetch(data.sql, {
		method: 'post',
		body
	}).then(x => x.json())
	ambilList = await ambilList
	for (x of ambilList){
		let olah = sumber.replace(/<title>.*<\/title>/g, `<title>${x.judul}</title>`)
		olah = olah.replace(/<meta name="description" content=".*">/g, `<meta name="description" content="${x.isi.substring(0, 200).replace(/\"/g, '')}">`)
		fs.writeFile(`public/${x.slug}.html`, olah, 'utf8')
	}
}
listPostingan()