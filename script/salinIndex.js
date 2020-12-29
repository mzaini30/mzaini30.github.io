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

/*
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@nytimes">
<meta name="twitter:creator" content="@SarahMaslinNir">
<meta name="twitter:title" content="Parade of Fans for Houston’s Funeral">
<meta name="twitter:description" content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here.">
<meta name="twitter:image" content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg">
B
*/
