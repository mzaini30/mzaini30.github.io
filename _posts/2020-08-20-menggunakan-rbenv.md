---
layout: post
title: Menggunakan rbenv
category: ruby
---

rbenv adalah environment untuk menginstall Ruby. Gampangannya sih, misalnya aja kita pakai sistem 32 bit yang hanya bisa untuk menginstall Ruby versi lama, nah dengan rbenv ini kita bisa menginstall Ruby versi terbaru.

Kenapa sih sistem 32 bit itu aplikasi-aplikasinya sudah sangat langka zaman sekarang ini? Tentu saja karena para developer saat ini lebih banyak yang membuat aplikasinya untuk arsitektur 64 bit. Memang sih yang namanya developer itu ya kalau membuat sesuatu, biasanya yang mendukung versi terbaru aja. Seperti kita tau kan, bahwa arsitektur sistem 64 bit itu adalah lanjutan dari 32 bit.

## Persiapan

Tulis di `~/.bashrc` di bagian akhir:

```bash
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"
```

## Install versi tertentu

```bash
rbenv install 1.7.1
```

## Membuat version yang telah dipilih menjadi global

```bash
rbenv global 1.9.2-p290
```
