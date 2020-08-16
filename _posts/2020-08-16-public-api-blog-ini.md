--- 
layout: post
title: Public API blog ini
--- 

Aku menggunakan teknik JAMStack dalam mengembangkan blog ini. JAMStack adalah kepanjangan dari Javascript + API + Markup Stack. Itu artinya, aku memerlukan sebuah API untuk mengolah (CRUD) blog ini. Nah, karena aku menggunakan Jekyll, maka API ini hanya berfungsi untuk menampilkan data. Kamu bisa mendapatkannya di `https://mzaini30.js.org/semua.json` yang struktur datanya seperti ini:

```yaml
- slug: /hello-world
  title: Hello world 
  content: <p>Hello</p><p>Kamu</p>
  diisi: true
  lengkap: false
  lainnya:
  - slug: /kamu 
    title: Kamu
    diisi: false
  - slug: /makan-nasi
    title: Makan nasi 
    diisi: true
  - slug: /rumah
    title: Rumah 
    diisi: true
```

## Keterangan

`slug` adalah potongan URL sebagai identitas setiap array. Misalnya aja, slugnya adalah `/hello`, maka kamu bisa menggunakannya seperti `situs.com/hello`.

`content` sudah berbentuk HTML. Plus, kalau ada snippet kode, juga sudah diberi class setiap pecahan kodenya. Maka, kamu cukup menggunakan Pygment CSS untuk stylingnya.

`diisi` bernilai `true` jika ada kontennya.

`lengkap` bernilai `true` jika konten berisi 400 kata atau lebih.

`lainnya` hanya menampilkan tiga postingan yang dipilih secara acak.

## Javascript dan Markup

Untuk Javascript dan Markup, aku menggunakan Vue yang bisa kamu pelajari dengan artikel di blogku ini yang berjudul [Tutorial Vue JS](/tutorial-vue-js). Lalu, untuk menghubungkan antara Vue dengan API, aku menggunakan [Fetch API](/fetch).