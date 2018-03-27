---
layout: post
title: "Pure CSS: Menyesuaikan Tinggi Elemen Berdasarkan Lebarnya"
date: 2017-07-30 09:51:22
gambar: https://images-na.ssl-images-amazon.com/images/I/71ZDYsb%2BOCL.png
category: pemrograman
tags: [koding, html, css]
---

Inti dari elemen-elemen yang dibangun dengan css adalah kotak. Semua berawal dari kotak walaupun hasil akhirnya bisa berupa oval, lingkaran, atau berisi gambar. Berikut ini adalah contoh dari css untuk membuat kotak:

```css
.kotak {
    display: block;
    width: 300px;
    height: 400px;
    background: aqua;
}
```

```html
<div class="kotak"></div>
```

Namun, terkadang kita ingin membuat tinggi sebuah elemen yang fleksibel, artinya menyesuaikan dengan lebar elemen. Misalnya saja lebar elemen adalah 25% dari lebar layar, lalu kita ingin membuat tinggi elemen yang sama besar dengan lebar elemen yaitu 25% dari lebar layar juga. Mungkin kita bisa menggunakan `vw` atau bisa juga menggunakan jquery. Namun, `vw` hanya support di browser terbaru dan jquery nggak efektif untuk sebuah tampilan yang sederhana karena menghabiskan memori untuk meload jquerynya. Maka, kita akan buat yang pure css. Berikut ini adalah skripnya:

```css
/* menyesuaikan tinggi berdasarkan lebar */

.box {
    width: 25%;
    overflow: hidden;
    position: relative;
}

.box:before {
    content: "";
    display: block;
    padding-top: 100%; /* persenan tinggi berdasarkan lebar */
}

.content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
```

```html
<div class="box">
    <div class="content"></div>
</div>
```

Di skrip di atas, yang kita inginkan adalah lebar elemen sebesar 25% dari lebar halaman dan tinggi 100% dari lebar elemen.