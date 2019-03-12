---
tag: pemrograman
layout: post
image: https://instagram.fupg2-1.fna.fbcdn.net/vp/e9257ffb7436dd64edeaea296d5d0adb/5CFE7AA1/t51.2885-15/e35/51376779_2241677909427603_758978404426962432_n.jpg?_nc_ht=instagram.fupg2-1.fna.fbcdn.net&_nc_cat=103
layout: post
---

Terkadang yang namanya developer nggak bisa ya merangkap segala keahlian developing. Ada yang jagonya cuma di Python, ada yang di Ruby, Javascript, Rust, Cassandra, PHP, ASP, C#, Julia, R sehingga terkadang kalau yang biasa membuat aplikasi di satu jenis, agak kesusahan membuat aplikasi dalam bentuk lain. Misalnya aja biasa buat aplikasi website, eh ternyata klien meminta dibuatkan aplikasi desktop. Duh, gimana cara buatnya ya?

Nah, untunya waktu itu pas aku eksperimen dengan PHP, aku dapat skripnya nih untuk membuat aplikasi desktop berbasis PHP dan tidak membutuhkan _third party_ lainnya yang malah akan membuat _size_ aplikasi kita membengkak. Yang kita butuhkan di sini cuma _standalone PHP_:

Sebelumnya, letakkan PHP _standalone_ di D:

```bash
@echo off

set port=8956

start chrome http://localhost:%port%

D:\php\php -S localhost:%port%
```