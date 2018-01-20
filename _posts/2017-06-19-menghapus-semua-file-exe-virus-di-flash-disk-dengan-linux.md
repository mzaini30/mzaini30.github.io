---
layout: post
title: "Cara Menghapus Semua File EXE di Flash Disk Menggunakan Linux"
date: 2017-06-19 11:08:23
gambar: "http://farm4.staticflickr.com/3895/14477825641_5a88c33c5d_b.jpg"
categories: posts
tags: [koding, pemrograman, bash, linux]
---

1. Buka Terminal

2. Masuk ke perangkat. Kali ini, lokasi perangkat adalah `/dev/sdb1/` maka ketik perintah berikut

    ```bash
    cd "/dev/sdb1"
    ```

3. Ketik perintah berikut untuk menampilkan semua file `exe`

    ```bash
    find -iname "*.exe"
    ```

4. Ketik perintah berikut untuk menghapus permanen semua file `exe` di perangkat tersebut

    ```bash
    find -iname "*.exe" -exec rm {} \;
    ```