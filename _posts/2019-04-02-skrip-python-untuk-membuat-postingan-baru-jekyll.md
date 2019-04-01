---
layout: post
title: Skrip Python untuk Membuat Postingan Baru Jekyll
date: 2019-04-02 06:57:00 +0800
---

```python
import datetime, os

judul = input('Masukkan judul postingan: ')

sekarang = datetime.datetime.now()

karakter_terlarang = ['\\', '/', ':', '*', '?', '"', '\'', '<', '>', '|']

# INI BAGIAN JUDUL

judul_kecil = judul.lower().replace(' ', '-')
for x in karakter_terlarang:
  judul_kecil = judul_kecil.replace(x, '')
tanggal_untuk_judul = sekarang.strftime('%Y-%m-%d-')
judul_sekarang = tanggal_untuk_judul + judul_kecil + '.md'

# INI BAGIAN ISI

judul_baru = str(judul)

perintah = [
  'cd _drafts',
  'touch ' + judul_sekarang,
  'echo --- > ' + judul_sekarang,
  'echo layout: post >> ' + judul_sekarang,
  'echo "title: ' + judul_baru + '" >> ' + judul_sekarang,
  'echo --- >> ' + judul_sekarang
]

perintah_string = ''
for x in perintah:
  perintah_string += x + ';'
os.system(perintah_string)
```