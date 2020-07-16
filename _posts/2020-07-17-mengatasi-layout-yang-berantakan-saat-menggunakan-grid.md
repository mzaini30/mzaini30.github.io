---
layout: post
title: Mengatasi layout yang berantakan saat menggunakan grid
tag: script
gambar: https://image.freepik.com/free-photo/top-view-graphic-designer-working-with-graphic-tablet-laptop_23-2147652935.jpg
---

Pernah nggak kamu mengalami kejadian seperti ini:

![Grid yang berantakan](https://i.ibb.co/sHgFtMF/Screenshot-2020-07-17-02-12-03.png)

Asli eh. Berantakan banget kan ya? Pengennya dibuat rapi dengan adanya grid, eh malah jadi kacau kayak gitu gara-gara ada card yang tingginya berbeda dari yang lainnya. Terus solusinya gimana dong?

Oh iya, itu aku nggak pakai Bootstrap, tapi custom CSS aja. Kalau dari gridnya sih, kodenya seperti ini:

```css
.beranda_terbaru-index li {
  width: 25%;
  float: left;
  padding: 10px;
 }
 ```
 
Logikanya sih bener aja ya, setiap blok yang ada card, kasih lebarnya 25% atau seperempatnya layar. Terus, dikasih float left supaya bisa ngegrid (kalau di Word, istilahnya tu teks sama gambar di dalam satu baris). Lalu, dikasih padding 10 pixel.

Solusinya adalah, kita dapatkan _elemen setelahnya elemen keempat_ lalu dibreak. Jadi, kalau secara matematis tu (deret aritmatika), rumusnya adalah `4n+1`. Maka, begitu pula kita tuliskan di CSSnya:

```css
.beranda_terbaru-index li:nth-child(4n+1){
 clear: both;
}
```

Ini hasilnya:

![Grid yang sudah rapi](https://i.ibb.co/W0KLv7W/Screenshot-2020-07-17-02-19-02.png)
