---
tag: pemrograman
layout: post
---

Yang namanya SSG (site static generator) itu ya kita kudu harus sabar dalam proses compile-nya. Walaupun SSG yang diklaim sangat cepat seperti Hugo karena menggunakan bahasa Go yang dekat dengan bahasa C (bahasa asli laptop) tapi tetap saja ya yang namanya compile butuh waktu. Apalagi kalau postingan di blog berbasis Jekyll sudah sangat banyak. Ratusan misalnya. Kan, kita kalau mau compile jadi lebih dari 5 detik kan. Lamaaaa banget. Nah, ini adalah waktu compile blogku di netbook Dell, RAM 2 GB, OS Linux Lite:

```plaintext
Configuration file: /mnt/C48455A884559E2C/zen/_config.yml
            Source: /mnt/C48455A884559E2C/zen
       Destination: /mnt/C48455A884559E2C/zen/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 27.383 seconds.
 Auto-regeneration: enabled for '/mnt/C48455A884559E2C/zen'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```

Gila... 27 detik! Lama banget! Nah, terus gimana nih caranya supaya kita buka blog kita di local tapi nggak pakai nunggu selama itu?

Oke, gampang!

Kan, kalau Jekyll itu hasil compile-nya berada di folder `_site`. Nah, sekarang kamu menuju folder itu terus jalankan skrip berikut ini:

```bash
python -m SimpleHTTPServer 2019
```

{% include more.html link='/2019/03/06/kumpulan-skrip-python-untuk-android.html' %}

Perintah di atas berarti kita menjalankan server dasar dengan Python sehingga kita nggak usah lagi tuh nunggu compile Jekyll di awal.

Untuk membukanya di browser, ketikkan aja `localhost:2019`.