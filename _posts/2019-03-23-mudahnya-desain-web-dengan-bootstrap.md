---
title: "Desain Web? Percayakan Pada Bootstrap!!!"
layout: post
bahasa: HTML
date: 2019-03-23 16:56:00 +0800
---

Desain web? Susah kah? Kalau zaman sekarang sih nggak lagi, karena sudah tersedia berbagai macam tools yang memudahkan kita untuk mendesain website dengan cepat. Salah satunya adalah Bootstrap.

Yang kubahas di sini yang versi 3 ya. Soalnya yang versi 4 belum ada kusentuh.

Jadi, Bootstrap ini memakai teknik 12 grid. Jadi, width halaman itu, dibagi sama 12. Contohnya aja kalau kita mau membagi halaman jadi 3 bagian:

```html
<div class="row">
	<div class="col-sm-4"></div>
	<div class="col-sm-4"></div>
	<div class="col-sm-4"></div>
</div>
```

Loh kok `.col-sm-4`? Tentu saja! Karena 12 dibagi 3 adalah 4.

Oke, kita lanjut lagi.

Misalnya kita mau membagi halaman itu menjadi 2. Bagian isi sama sidebar. Yang bagian isi lebarnya dua kalinya sidebar:

```html
<div class="row">
	<div class="col-sm-8">
		<!-- ini bagian isi -->
	</div>	
	<div class="col-sm-4">
		<!-- ini bagian sidebar -->
	</div>
</div>
```

Oke, mudah kan?

# Kasih Container

Apa itu Container? Jadi, Container itu macam elemen terluar yang membungkus elemen-elemen lain. Ada dua class: `.container` sama `.container-fluid`. Kalau `.container` itu dia ada jaraknya lebar di kanan dan kiri. Sedangkan kalau `.container-fluid`, jaraknya dikit. Kalau nggak salah sih 20 pixel.

Nah, berikut ini adalah penerapannya:

```html
<div class="container">
	<div class="row">
		<div class="col-sm-8">
			<!-- ini bagian isi -->
		</div>	
		<div class="col-sm-4">
			<!-- ini bagian sidebar -->
		</div>
	</div>
</div>
```

# Kenapa Selalu Pakai <div></div>?

Karena DIV itu adalah ruang kosong yang bisa kita isi dengan berbagai macam isi.