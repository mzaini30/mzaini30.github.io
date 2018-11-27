---
layout: post
date: 2018-11-16 20:38:00
title: Membuat Komentar Whatsapp di Blogspot
category: pemrograman
---

Ada berbagai jenis komentar yang bertebaran di dunia persilatan perblogan. Mulai dari yang default yaitu kotak komentar blogspot yang default, terus ada juga yang pengen-pengen nyoba Disqus, terus kalau mau yang lebih geek (geekly; bahasa Jaksel. Hehehe) bisa pakai Utterances. Ya, gitu deh.

Nah, kita buat yang lebih keren nih: Komentar blog berbasis Whatsapp.

Wowww....

Keren...

Oke, ayo kita mulai..

# Mulai Koding

Buka Notepad.

Isikan kode berikut ini di _Notepad_:

```xml
<!-- komentar whatsapp di blogspot - start -->

<b:if cond='data:blog.pageType == "item"'>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
	<div class='form-group'>
		<label for='komentar-wa'>Komentar Whatsapp:</label>
		<textarea id='komentar-wa' class='form-control wa-teks' rows='5' placeholder='Masukkan komentarmu di sini'></textarea>
	</div>
	<button class='btn btn-success wa-kirim'>Kirimkan Komentar</button>
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script type="text/javascript">
		$('.wa-kirim').click(function(){
			judul0 = '<data:blog.pageName/>' 
			link0 = '<data:post.url/>'
	// <![CDATA[
			nomor_whatsapp = '6281545143654'
			judul = judul0.replace(/ /g, '%20').replace(/:/g, '%3A').replace(/\n/g, '%0A')
			link = link0.replace(/ /g, '%20').replace(/:/g, '%3A').replace(/\n/g, '%0A')
			isi = $('.wa-teks').val().replace(/ /g, '%20').replace(/:/g, '%3A').replace(/\n/g, '%0A')
			hasil = 'https://api.whatsapp.com/send?phone=' + nomor_whatsapp + '&text=*Judul*%3A%20' + judul + '%0A*Link*%3A%20' + link + '%0A%0A*Komentar*%3A%0A%0A' + isi
			location.href = hasil
			// https://api.whatsapp.com/send?phone=1&text=*Judul*%3A%20lorem%0A*Link*%3A%20lorem%0A%0A*Komentar*%3A%0A%0Alorem
			// alert(hasil)
		})
	// ]]>
	</script>
</b:if>

<!-- komentar whatsapp di blogspot - end -->
```

Pusing kah lihat kodenya? Hehehe...

Nah, sekarang fokus pada `nomor_whatsapp = '6281545143654'` dan diganti dengan nomor HPmu. Kalau misalnya nomor HPmu 0824 1234 1432, maka bagian itu diubah menjadi `nomor_whatsapp = '6282412341432'`. Gampang kan? Nah, 62 di depan itu berarti kode HP Indonesia (+62). Nah, disesuaikan aja ya sama kode negaramu. Mungkin aja kamu lagi plesir di Papua Nugini. Kode negaranya beda loh ya.

Ingat ya... **Nomor HP di kode itu harus diganti.** Soalnya itu nomor HPku. Hehheheehe..

Nah sekarang download template blogmu (yang sudah kamu download tadi).

Buka template blogmu lalu cari `<data:post.body/>`.

Masukkan kode yang di Notepad tadi ke bawahnya `<data:post.body/>`. Ingat ya, `<data:post.body/>` nggak cuma satu aja. Minimal ada 2 biasanya. Maka, skripnya akan menjadi:

```xml
<data:post.body/>

<!-- komentar whatsapp di blogspot - start -->

<b:if cond='data:blog.pageType == "item"'>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
	<div class='form-group'>
		<label for='komentar-wa'>Komentar Whatsapp:</label>
		<textarea id='komentar-wa' class='form-control wa-teks' rows='5' placeholder='Masukkan komentarmu di sini'></textarea>
	</div>
	<button class='btn btn-success wa-kirim'>Kirimkan Komentar</button>
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script type="text/javascript">
		$('.wa-kirim').click(function(){
			judul0 = '<data:blog.pageName/>' 
			link0 = '<data:post.url/>'
	// <![CDATA[
			nomor_whatsapp = '6281545143654'
			judul = judul0.replace(/ /g, '%20').replace(/:/g, '%3A').replace(/\n/g, '%0A')
			link = link0.replace(/ /g, '%20').replace(/:/g, '%3A').replace(/\n/g, '%0A')
			isi = $('.wa-teks').val().replace(/ /g, '%20').replace(/:/g, '%3A').replace(/\n/g, '%0A')
			hasil = 'https://api.whatsapp.com/send?phone=' + nomor_whatsapp + '&text=*Judul*%3A%20' + judul + '%0A*Link*%3A%20' + link + '%0A%0A*Komentar*%3A%0A%0A' + isi
			location.href = hasil
			// https://api.whatsapp.com/send?phone=1&text=*Judul*%3A%20lorem%0A*Link*%3A%20lorem%0A%0A*Komentar*%3A%0A%0Alorem
			// alert(hasil)
		})
	// ]]>
	</script>
</b:if>

<!-- komentar whatsapp di blogspot - end -->
```

Oke sudah. Save. Terus upload template barumu. Kalau nggak tau cara uploadnya, baca artikel berikut: <https://www.pelangiblog.com/2014/10/cara-upload-template-baru-pada-blog.html>