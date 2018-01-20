---
layout: post
title: "Membuat Baris Pada Verbatim"
date: 2017-07-16 19:46:32
gambar: "http://animeyume.com/ay_enter_banner09.jpg"
categories: posts
tags: [python, verbatim, psikologi, wawancara]
---

1. Buat sebuah file bernama `baris.py` lalu isikan skrip berikut ini di dalamnya

    ```python
    import os

    os.system("subl input.txt")

    raw_input("Tekan Enter: ")

    data = open("input.txt").read().splitlines()
    hasil = open("hasil.txt", "w")

    list_hasil = []
    for x in range(1, len(data) + 1):
        if x == 1:
            list_hasil.append(x)
        else:
            if x % 5 != 0:
                list_hasil.append(" ")
            else:
                list_hasil.append(x)

    for x in list_hasil:
        hasil.write(str(x))
        hasil.write("\n")

    os.system("subl hasil.txt")
    ```

2. Buka Terminal lalu ketik

    ```bash
    python baris.py
    ```

3. Maka akan terbuka sebuah file di Sublime Text. Kamu isikan dengan angka 1 sebanyak baris yang kamu inginkan, misalnya 10 kali, lalu simpan (`Ctrl + S`)

    ```
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    ```

4. Kembali ke Terminal lalu tekan `Enter` maka akan muncul teks berikut ini

    ```
    1
     
     
     
    5
     
     
     
     
    10
    ```
