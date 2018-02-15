---
layout: post
title: "Bisa Loh Ternyata, Menampilkan Cuplikan Video Tanpa Menggunakan Aplikasi Pemotong Video"
date: 2018-01-17 16:58:00
categories: artikel
tags: [skrip, vlc]
gambar: https://www.cheatsheet.com/wp-content/uploads/2014/12/spirited-away1-e1452013661309.jpg
---

Terkadang ada kan ya, tugas dari dosen untuk menampilkan cuplikan dari suatu film lalu kita mengkajinya berdasarkan aspek-aspek tertentu. Misalnya untuk variabel percaya diri, ada aspek tahan banting, semangat menghadapi masa depan, _self efficacy_, ekstroversi, optimis, dan aktualisasi diri. Nah, dari keenam aspek tersebut, kita diminta untuk membuat cuplikan dari film tertentu. Kan repot ya, satu film kita potong-potong menjadi cuplikan-cuplikan tertentu. Terutama di bagian _rendering video_ yang lama. Nah, berikut ini ada skripnya supaya kita lebih cepat mengerjakannya.

1. Siapkan film yang akan kita buat cuplikan-cuplikannya. Untuk di tutorial ini, saya mencoba untuk menggunakan film berjudul `Fate/Apocrypha.mkv`.

2. Lalu, kita buat misalnya cuplikan film untuk aspek pertama, yaitu tahan banting. Nah, berdasarkan film tersebut, ternyata kita menemukan bahwa untuk aspek tahan banting, adegannya muncul pada detik ke 100 hingga 112. Tulis dulu di kertas ya, 100 hingga 112.

3. Buat berkas bernama `tahan banting.m3u`.

4. Di dalam berkas tersebut, isi dengan skrip di bawah ini. Untuk mengisinya, bisa menggunakan Notepad atau Sublime Text.

	```
	#EXTVLCOPT:start-time=100
	#EXTVLCOPT:stop-time=112
	Fate/Apocrypha.mkv
	```

5. Untuk menjalankan skripnya, cukup buka berkas tersebut dengan VLC Player.

# Untuk Aspek Tertentu yang Menggunakan Lebih dari Satu Cuplikan

Misalnya, untuk aspek _self efficacy_, muncul pada detik ke 200 hingga 210 dan 250 hingga 300.

Cara membuatnya masih sama seperti di atas. Namun, ada sedikit perbedaan di bagian skrip. Contoh skripnya adalah seperti di bawah ini:

```
#EXTVLCOPT:start-time=200
#EXTVLCOPT:stop-time=210
Fate/Apocrypha.mkv

#EXTVLCOPT:start-time=250
#EXTVLCOPT:stop-time=300
Fate/Apocrypha.mkv
```