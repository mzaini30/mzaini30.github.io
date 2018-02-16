---
layout: post
title: Trik Resize Ukuran Gambar dengan Blogspot
date: 2018-02-16 16:40:49
categories: pemrograman
tags: [gambar, trik, image, blogspot]
gambar: https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/b/b8/99fcabbb16e931f2d839a311174f9468--anime-manga-girl-moe-anime.jpg/revision/latest?cb=20171231131551
---

Mau _resize_ gambar tapi nggak punya aplikasi canggih macam Photoshop, Corel Draw, Inkscape, GIMP? Oke, jangan khawatir. Kamu bisa kok menggunakan akun Blogspotmu untuk _meresize_ gambar. Ikuti tutorialnya ya...

1. Upload gambar yang kamu punya ke postingan blog seperti biasa.

	![](https://s25.postimg.org/roqf4s1vj/Screenshot_from_2018-02-16_16_47_16.png)

2. Klik kanan gambar tersebut lalu pilih `Salin Lokasi Gambar`.

3. Maka, kamu akan mendapatkan link berikut: _https://lh3.googleusercontent.com/-LzUKOslCX9A/WoaaTNzMaOI/AAAAAAAACzU/V6Wbetktx0kg-bFgiX_QTfe_G3rsUFUvACLcBGAs/`h120`/2c2c8d8c9824.original.jpeg_

4. Nah, sekarang perhatikan di bagian `h120`. Bagian tersebut adalah kode untuk menentukan lebar maupun tinggi dari gambar. Di bawah ini adalah tabel untuk memahami bagian tersebut:

	| Dimensi | Kode | Contoh |
	|-|-|-|
	| lebar | w | w1200 |
	| tinggi | h | h360 |
	| _crop_ berdasarkan lebar | w dan c | w1200-c |
	| _crop_ berdasarkan tinggi | h dan c | h360-c |