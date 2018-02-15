---
layout: post
title: "Cara Format Flash Disk di Linux"
date: 2017-06-06 08:59:54
gambar: "http://4.bp.blogspot.com/-72kCa7NnyJc/TstZMMG5mPI/AAAAAAAAANE/9Xk4TRPfACE/s1200/wiqzr5.jpg"
categories: pemrograman
tags: [linux, koding]
---

1. Buka Terminal

2. Ketik perintah berikut untuk menampilkan daftar perangkat yang terhubung

    ```bash
    fdisk -l
    ```

3. Karena perangkat yang akan diformat adalah `/dev/sdb1/`, maka ketikkan perintah berikut untuk mengeluarkan perangkat

    ```bash
    umount /dev/sdb1
    ```

4. Ketik perintah berikut untuk mulai memformat

    ```bash
    mkfs.vfat /dev/sdb1
    ```