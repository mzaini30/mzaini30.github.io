---
layout: post
rss: ada
title: Yuk Pasang MDC Daily di Blog
date: 2018-02-12 01:38:49
category: pemrograman
tags: [gadget, blogging, blog, koding, javascript, html]
gambar: http://88.99.240.100/aleman/others/recommendation-image/3763.gif
---

Sudah tau dengan yang namanya MDC kan? Yap, Muslim Designer Community. Komunitas ini adalah perkumpulan para desainer muslim yang mendedikasikan karyanya untuk menyebarkan dakwah Islam dengan kemasan yang lebih mudah dicerna. Nah, kali ini saya akan membagikan gadget blog untuk menampilkan desain-desain dari MDC setiap hari.

Berikut ini adalah langkah-langkahnya:

1. Pada `Tata Letak`, pilih `Tambahkan Gadget` lalu pilih `HTML/JavaScript` (untuk blogspot). Sedangkan kalau untuk Wordpress, pilih `Tampilan`, `Widget`, pilih `Teks`

2. Masukkan skrip berikut:

	```html
	<p>
		<img src="" class="mdc-daily" style="width: 100%;">
	</p>
	<center>
		<p>
			<small>
				<a href="http://muhammadzaini.com/2018/02/12/yuk-pasang-gadget-mdc-daily-di-blog.html">get widget</a>
			</small>
		</p>
	</center>
	<script type="text/javascript">
		document.writeln('<scr'+'ipt type=\"text/javascript\" src=\'http://muhammadzaini.com/mdc-daily/data.js?'+Math.random()+'\'></scr'+'ipt>');
		document.writeln('<scr'+'ipt type=\"text/javascript\" src=\'http://muhammadzaini.com/mdc-daily/app.js?'+Math.random()+'\'></scr'+'ipt>');
	</script>
	```

Kalau sudah jadi, tampilannya akan seperti ini:

![](https://s25.postimg.org/h7d8b7p7z/Screenshot_from_2018-02-12_01_36_58.png)