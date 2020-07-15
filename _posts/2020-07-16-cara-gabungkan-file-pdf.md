---
layout: post
title: Berbagai cara untuk menggabungkan file PDF
gambar: https://image.freepik.com/free-photo/yellow-blue-compositions-stationery_23-2147864609.jpg
---

**Cara pertama**

```bash
pdftk file-pertama.pdf file-kedua.pdf cat output file-hasil-gabungan.pdf
```

Tapi kadang akhir-akhir ini, aku nggak bisa pakai cara pertama. Jadi, aku pakai cara kedua aja:

**Cara kedua**

```bash
qpdf --empty --pages file-pertama.pdf 1-z file-kedua.pdf 1-z -- file-hasil-gabungan.pdf
```
