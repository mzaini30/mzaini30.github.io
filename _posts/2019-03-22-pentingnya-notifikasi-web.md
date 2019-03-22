---
title: "Di Blogmu Sudah Ada Web Push Notification?"
layout: post
bahasa: Javascript
date: 2019-03-22 18:22:00 +0800
---

Sekarang sudah zamannya HTTPS.

Lah, terus apa kelebihannya?

Dengan HTTPS, kamu bisa mengaktifkan PWA (progressive web apps). Alias, kamu bisa memberikan fitur-fitur seperti aplikasi mobile untuk websitemu. Contohnya macam halaman offline, tambahkan ke beranda, dan fitur notifikasi.

Untuk notifikasi, kamu bisa gunakan jasa dari <http://izooto.com>. Aku masih coba versi gratis dan alhamdulillah masih bisa jalan. Di instruksinya, kamu cukup lampirkan file Service Worker sama Manifest di root websitemu, lalu tambahkan skrip Javascript sederhana untuk memanggil notifikasi dari iZooto. Oh iya, untuk notifikasi ini, iZooto kerja sama dengan Zapier. Jadi, kamu harus punya akun Zapier juga.