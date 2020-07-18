---
layout: post
title: Install aplikasi di Linux secara offline
tag: script
gambar: https://img.freepik.com/free-photo/coding-man_1098-18084.jpg?size=626&ext=jpg
---

Pertama, pastikan dulu kamu punya file installernya. Misalnya aja `aplikasi.deb`.

Lalu, jalankan script berikut di Terminal:

```bash
sudo apt install ./aplikasi.deb
```

Kenapa kok pakai `apt` bukan `dpkg`? Kalau `dpkg` kan, dia menginstall _hanya_ yang isi dari aplikasi itu aja. Kalau `apt`, dia kalau misalnya ada library yang kurang, akan mendownloadnya dari internet lalu menginstallnya.
