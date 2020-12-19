const fetch = require('node-fetch')
const btoa = require('btoa')
const FormData = require('form-data')
const fs = require('fs').promises
const data = require('./data')
const listPostingan = async () => {
	const body = new FormData
	body.append('sql', btoa(btoa(`
		select slug
		from database_${data.blog}
	`)))
	let ambilList = await fetch(data.sql, {
		method: 'post',
		body
	}).then(x => x.json())
	ambilList = await ambilList
	let xml = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>`
	xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
	for (x of ambilList){
		xml += `
			<url>
				<loc>https://mzaini30.js.org/${x.slug}</loc>
			</url>
		`
	}
	xml += '</urlset>'
	fs.writeFile('public/sitemap.xml', xml, 'utf8')
}
listPostingan()