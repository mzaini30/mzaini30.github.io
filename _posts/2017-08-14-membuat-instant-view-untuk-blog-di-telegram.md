---
layout: post
title: "Membuat Instant View untuk Blog di Telegram"
date: 2017-08-14 19:24:06
gambar: "http://i.kinja-img.com/gawker-media/image/upload/s--QOzt6S3P--/c_scale,fl_progressive,q_80,w_800/1483549890244134466.jpg"
categories: artikel
tags: [instant view, telegram, blogging, skrip, yaml]
---

1. Buka <http://instantview.telegram.org>
2. Masuk dengan nomor ponsel yang terdaftar di Telegram
3. Pilih `Template Saya`
4. Buat template yang sesuai dengan struktur postingan blogmu. Kalau di blogku:

    ```yaml
    # terapkan instant view untuk

    ?exists: //div[has-class("isi")]

    body: //div[has-class("isi")]
    title: //div[has-class("panel-body")]//center//h1

    # gambar pertama jadi cover

    cover: //div[has-class("panel-default")]//img[1]

    # Set cover image di Telegram

    image_url: $cover/self::img/@src

    # Remove Elemen yang tidak penting

    @remove: $body//p[has-class("not-telegram")]
    @remove: $body//br[has-class("not-telegram")]

    # Replace tabel karena belum disupport

    @replace_tag(<pre>): $body//table
    ```

5. Kalau sudah oke dan nggak diubah-ubah lagi templatenya, pilih `Track Changes` di kanan atas sehingga berubah menjadi `Mark as Checked`. Kalau sudah begini, template nggak bisa diubah lagi
6. Lakukan juga pada 10 postingan lainnya (minimal). Ini supaya template yang kamu buat disetujui oleh pihak Telegram (katanya sih gitu). Tapi satu postingan aja kayaknya juga nggak masalah
7. Pilih `View in Telegram` di kanan atas, kamu akan mendapatkan link sebagai berikut: `https://t.me/iv?url=alamat-posingan-di-blogmu.com&rhash=angka-acak-sebagai-id-templatemu`, misalnya aja `https://t.me/iv?url=http://kucinggarong.com/hai.html&rhash=61946862`. Nah, simpan tautan tersebut, dan setiap kali kamu membagi postinganmu di Telegram, gunakan bentuk tautan tersebut, ubahlah hanya di bagian __alamat tautan postingannya__ aja

Tambahan:

Masukkan `<meta name="telegram:channel" content="@link-channel-telegram">` di bagian `<head/>` supaya alamat channel blogmu tampil di instant view.