---
title: "Kontur: Skoring Otomatis Data Dari Google Form (Per Skala/Variabel)"
date: 2018-09-29 22:52:46
category: pemrograman
layout: post
---

Yang namanya tugas itu ngerjainnya pakai cara cepat ya. Nah, ini adalah sekelumit dari cara cepat buat mata kuliah konstruksi alat ukur. So, buat kamu yang dapat tutorial ini, share juga lah ke teman yang lainnya.

Oke, ceritanya nih aku udah ngeshare form dari Google Form terus langkah pertama adalah kita download dulu formnya.

# Download Laporan dari Google Form

![ambil laporan dari Google Form](/gambar/kontur/ambil-form-1.png)

![ambil laporan dari Google Form, download excelnya](/gambar/kontur/ambil-form-2.png)

Terus pilih `buat spreadsheet baru` dan klik `buat`.

Pas ada tulisannya `spreadsheet telah dibuat`, klik `buka`.

Tunggu sampai spreadsheet selesai loading. Ngopi sek lur.

![jadikan excel](/gambar/kontur/jadikan-excel.png)

![jadikan excel](/gambar/kontur/penampakan-excel.png)

# Mulai Olah Data Otomatis

Buka http://muhammadzaini.com.

Pilih `aplikasi web` di daftar menu yang di atas, habisnya judul `Zen`.

Cari bagian `penelitian` dan klik `kontur`.

Terus diisi deh.

![isi favorable dan unfavorable](/gambar/kontur/fav.png)

![sangat setuju, setuju, tidak setuju, sangat tidak setuju](/gambar/kontur/ss-s-ts-sts.png)

Terus copy paste datanya dari excel ke kolom `data`.

![copy paste data dari excel](/gambar/kontur/copas.png)

![copy paste data dari excel](/gambar/kontur/copas-target.png)

Jangan lupa untuk menghapus baris terakhir yang kosong. **Perhatikan baik-baik** ya penjelasan di bawah:

```html
Sangat Setuju	Tidak Setuju	Sangat Tidak Setuju	Sangat Setuju	Tidak Setuju	Sangat Setuju	Tidak Setuju	Sangat Tidak Setuju
Tidak Setuju	Sangat Setuju	Sangat Tidak Setuju	Tidak Setuju	Tidak Setuju	Sangat Setuju	Setuju	Tidak Setuju
~~~ (ada baris kosong di sini)
```

Nah, di situ kan ada baris kosong, dihapus. Jadinya:

```html
Sangat Setuju	Tidak Setuju	Sangat Tidak Setuju	Sangat Setuju	Tidak Setuju	Sangat Setuju	Tidak Setuju	Sangat Tidak Setuju
Tidak Setuju	Sangat Setuju	Sangat Tidak Setuju	Tidak Setuju	Tidak Setuju	Sangat Setuju	Setuju	Tidak Setuju ~~~ (ini akhir teks. Nggak ada baris kosong atau enter lagi)
```

Soalnya kalau nggak dihapus, skripnya nggak jalan karena yang harusnya satu baris itu ada delapan item (sampai I), malah satu item aja (atau kosong). Kan skripnya bingung tuh.

Klik `convert` dan copas ke excel.

![copas hasil](/gambar/kontur/copas-hasil.png)

![copas hasil](/gambar/kontur/copas-hasil-excel.png)