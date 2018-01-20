---
layout: post
title: "Menampilkan Cuplikan Film Tanpa Memotongnya (Maaf Baru Posting)"
category: code
---

Oke, sebelumnya saya minta maaf dulu ya sama psikologi 2015 karena nggak share trik ini sebelumnya. Ya, bukannya nggak mau sih. Tapi, tau lah, kalau share sesuatu itu tentunya butuh waktu sedangkan tugas-tugas datang silih berganti.

__TL; DR (too long don't read)__

Buat file bernama `cuplikan film frozen.m3u` yang berisi skrip berikut:

```
#EXTVLCOPT:start-time=500
#EXTVLCOPT:stop-time=550
film frozen.mkv
```

Buka dengan VLC.

__Penjelasan Singkat__

1. `#EXTVLCOPT:start-time=500` berarti cuplikan dimulai pada detik ke-500.
2. `#EXTVLCOPT:stop-time=550` berarti cuplikan diakhiri pada detik ke-550.
3. `film frozen.mkv` adalah nama film yang mau kita ambil cuplikannya.

__Membuat Lebih dari Satu Cuplikan__

Misalnya kita ingin membuat banyak cuplikan dengan satu variabel psikologi yang sama, contohnya percaya diri. Lalu, kita temukan ada 3 cuplikan di film frozen yang mau kita tampilkan. Berikut skripnya:

```
#EXTVLCOPT:start-time=400
#EXTVLCOPT:stop-time=450
film frozen.mkv

#EXTVLCOPT:start-time=500
#EXTVLCOPT:stop-time=550
film frozen.mkv

#EXTVLCOPT:start-time=600
#EXTVLCOPT:stop-time=650
film frozen.mkv
```

Penjelasannya sama seperti di atas.

__Cara Mengetahui Detik Ke Berapa yang Akan Dipotong__

Misalnya kita mau memulai cuplikan dari jam ke-1 menit ke-32 dan detik ke-8. Bagaimana cara menentukan detiknya?

Gunakan aja Excel lalu jalankan fungsi yang intinya:

- 1 jam = 3600 detik
- 1 menit = 60 detik

Sekian.