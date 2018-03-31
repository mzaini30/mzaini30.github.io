---
layout: post
title: Standard Javascript Menurut Google
rss: ada
date: 2018-03-30 18:42:00
category: pemrograman
gambar: https://pre00.deviantart.net/728f/th/pre/i/2012/352/2/4/javascript_mug_by_camilomm-d5ogw2a.png
---

Berikut ini adalah standard Javascript menurut Google (_monggo_ dibaca. Seru loh): <https://medium.freecodecamp.org/google-publishes-a-javascript-style-guide-here-are-some-key-lessons-1810b8ad050b>

Nah, berdasarkan artikel tersebut, saya sudah membuat contoh sederhana:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Tes Javascript</title>
</head>
<body>
	<script type="text/javascript">
		let panggil_nama = `Zen` // gunakan let atau const sebagai pengganti var, juga menggunakan ` bukan '
		say_hello = (nama) => { // pakai => untuk fungsi
			return `halo ${nama}`; // pakai ` dan ${} bukan '
		}
		document.writeln(say_hello(panggil_nama));
	</script>
</body>
</html>
```

Hasilnya:

```
 halo Zen 
```