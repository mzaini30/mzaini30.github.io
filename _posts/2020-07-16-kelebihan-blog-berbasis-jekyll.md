--- 
title: Ini loh kelebihan blog berbasis Jekyll (Github Pages)
tag: script
layout: post
gambar: https://image.freepik.com/free-photo/freelance-work-home-laptop-beautiful-woman-casual-sit-floor-work-with-portable-computer-with-crossed-legs_231208-2746.jpg
--- 

Setiap programmer pasti sudah nggak asing lagi sama yang namanya Github! Yaitu sebuah penyimpanan online yang **gratis!** Udah gitu, Github juga menyediakan hosting gratis bernama Github Pages yang menggunakan Jekyll sebagai servernya.

_Apa sih Jekyll itu_?

Jadi, Jekyll itu adalah sebuah static site generator (SSG) yang artinya adalah mengolah konten-konten berbentuk file sehingga dapat ditampilkan dalam bentuk blog!

Sederhana memang. Tapi, kalau zaman sekarang itu kayaknya penting banget sih yang namanya media online.

**Gratis**

Nah, kuncinya ya sebenarnya ini. Kalau nggak gratis, kurang semangatnya ya. Hehehehe...

Jadi kan kisahnya tu, aku sewa domain yang murah (.my.id) cuma 10 ribu per tahun, juga hosting yang murah (15 ribu per bulan), yang aku dapatkan dari IDCloudhost. Tapi ya, lagi males bayar sih. Makanya, cari yang gratisan aja. Aku pun kepikiran dengan Github Pages yang menggunakan Jekyll. Maka, aku pun mencoba menggunakannya _kembali_.

**Fleksibel dalam membuat template**

Membuat template di Jekyll ini bisa dikatakan, siapapun bisa membuatnya. Cara membuatnya tu simpel aja gitu, kayak kita buat file HTML biasanya aja. Jadi, file-file HTMLnya nggak cuma satu kayak di Blogspot (sampai sekarang masih mager aku membuat templatenya). Bisa kita buat satu file khusus buat layout beranda, lalu file satunya untuk layout postingan, ada juga untuk file JSONnya.

Contoh dari penggunaan template Jekyll ini (Liquid) adalah sebagai berikut:

_Mendapatkan judul dan isi postingan_

```html
<h1>{% raw %}{{ page.title }}{% endraw %}</h1>
<div>{% raw %}{{ content }}{% endraw %}</div>
```

_Mendapatkan judul dan link semua postingan_

```js
[
  {% raw %}{% for x in site.posts %}{% endraw %}
    {
      "judul": {% raw %}{{ x.title | jsonify }}{% endraw %},
      "link": {% raw %}{{ x.url | jsonify }}{% endraw %}
    }{% raw %}{% unless forloop.last %},{% endunless %}{% endraw %}
  {% raw %}{% endfor %}{% endraw %}
]
```

**Kapasitas hosting yang besar**

Per repositori (project) kalau nggak salah 1 giga.

**Bahasa markup yang mudah dipahami**

Dia pakai Liquid yang sintaksnya pakai bracket (`{% raw %}{{}}{% endraw %}`). Terus, sintaks-sintaksnya itu sederhana.
