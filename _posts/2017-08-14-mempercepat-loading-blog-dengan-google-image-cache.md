---
layout: post
rss: ada
title: "Mempercepat Loading Blog dengan Google Image Cache"
date: 2017-08-14 19:09:53
gambar: https://media.giphy.com/media/3o6ozshshCI3mGFkdO/giphy.gif
category: pemrograman
tags: [blogging, google, google image]
---

Memuat gambar di blog atau website memang mempercantik blog sehingga orang akan senang berkunjung kembali. Namun, yang menjadi masalah adalah ketika gambar yang akan dimuat itu berukuran besar. Misalnya saja untuk _thumbnail_, kita hanya membutuhkan gambar dengan lebar 300 pixel namun gambar yang akan dimuat berukuran 1920 pixel. Kan besar banget tuh. Mungkin bisa saja diakali dengan skrip berikut:

```html
<img src="gambar.jpg" width="300">
```

Namun, skrip tersebut hanya akan membuat blog memuat gambar sebesar 1920 pixel dan _diresize_ menjadi 300 pixel padahal kan yang kita inginkan adalah gambar selebar 300 pixel sehingga bisa mempercepat _loading_ blog. Nah, berikut ini adalah skripnya:

```html
<img src="https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=300&url=gambar.jpg">
```

Skrip di atas terbagi menjadi tiga bagian:

1. `https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus`

    Bagian ini adalah alamat dari Google Image Cache yang ingin kita panggil

2. `&resize_w=300`

    Bagian ini berisi lebar gambar yang ingin kita muat

3. `&url=gambar.jpg`

    Bagian ini berisi lokasi gambar yang ingin kita _resize_

Oh iya, kamu tau nggak kalau blog ini secara keseluruhan menggunakan Google Image Cache? Mulai dari halaman beranda, lalu di awal halaman postingan, kemudian _thumbnail_ di bagian bawah setelah postingan.