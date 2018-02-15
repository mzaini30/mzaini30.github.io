---
layout: post
title: "Menghapus Enter dari Dokumen PDF dengan Python"
date: 2017-07-21 23:28:34
gambar: "http://static.zerochan.net/SeeU.full.1349249.jpg"
categories: artikel
tags: [python, skrip]
---

Kalau menyalin tulisan dari PDF, kita suka jengkel sendiri ya. Kenapa? Soalnya tulisan-tulisan yang harusnya nggak ada enternya, karena masih satu paragraf, eh ada enternya deh pas kita salin ke Writer atau Word. Terus solusinya gimana dong? Apa hapus enternya itu satu-satu? Nggak dong. Capek. Nah, aku ada skripnya nih.

Jadi, cara kerjanya adalah, menggabungkan semua enter menjadi satu baris, alias menghapus semua enter. Terus gimana dong kalau ganti paragraf? Ya, tinggal kamu buat dua kali enter aja di file aslinya. Bingung kah? Langsung kita coba aja ya...

1. Buat file `enter.py` dan isikan skrip berikut

    ```python
    import os, re

    os.system("subl input.txt")

    raw_input("Tekan Enter: ")

    file_asal = open("input.txt")
    file_asal_baca = file_asal.read()

    hasil = re.sub(r"\n\n", r"ini adalah baris dua kali", file_asal_baca)
    hasil = re.sub(r"\n", r" ", hasil)
    hasil = re.sub(r"ini adalah baris dua kali", r"\n", hasil)

    file_hasil = open("output.txt", "w")
    file_hasil.write(hasil)

    os.system("subl output.txt")
    ```

2. Lalu kamu jalankan dengan mengetik perintah berikut di Terminal

    ```bash
    python enter.py
    ```

3. Lalu akan muncul file `input.txt`. Misalnya saja aku mengisi dengan teks berikut

    ```
    Pada
    hari
    Minggu
    kuturut
    ayah 
    ke kota

    Naik delman
    istimewa kududuk di
    muka

    Kududuk samping pak kusir yang sedang
    bekerja

    Mengendalikan kuda
    supaya baik jalannya
    ```

4. Save (`Ctrl` + `S`)

5. Balik ke Terminal dengan `Alt` + `Tab` lalu tekan `Enter`

6. Setelah itu akan muncul hasilnya...

    ```
    Pada hari Minggu kuturut ayah  ke kota
    Naik delman istimewa kududuk di muka
    Kududuk samping pak kusir yang sedang bekerja
    Mengendalikan kuda supaya baik jalannya
    ```

Belum punya Python? Kamu juga bisa memanfaatkan skrip serupa dengan mengunjungi <http://muhammadzaini.com/enter>
