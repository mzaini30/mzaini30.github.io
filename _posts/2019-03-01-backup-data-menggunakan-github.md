---
tag: pemrograman
layout: post
---

Siapa juga yang mau datanya hilang? Pasti nggak mau kan? Apalagi bagi mahasiswa akhir yang lagi skripsian. Beh, amit-amit deh sama bencana data hilang itu.

Nah, supaya nggak hilang, cara satu-satunya yang bisa kita lakukan adalah backup data. Nah, kalau untuk backup data ini ada banyak cara. Bisa dengan online maupun offline. Kalau offline kan kita bisa menggunakan media flashdisk, harddisk, CD, SD card, dan berbagai media lainnya. Kalau online, bisa menggunakan email maupun Google Drive.

Nah, kali ini aku akan memberi tau cara backup online dengan selain email dan Google Drive, yaitu menggunakan Git. 

Apa itu Git?

Nah, Git itu macam sistem penyimpanan kayak Google Drive cuma fiturnya lebih banyak. Ya, istilahnya fitur-fiturnya itu lebih terpakai oleh developer dalam mengembangkan aplikasi. Kalau kita mah, yang penting bisa untuk nyimpan aja. 

Berikut ini adalah kelebihan Git (terutama Github):

1. Gratis

	Siapa juga yang nggak mau sama gratisan. Hehehehe. Kalau berbayar mah, pasti udah kutinggalkan dari dulu.

2. Bisa buat repositori public maupun private

	Nah, sejak awal tahun ini kalau nggak salah atau sejak akhir tahun lalu ya, Github menggratiskan repositori private yang sebelumnya berbayar cuma untuk member. Coba deh ntar dicari di Google: sejak kapan Github menggratiskan repositori private-nya. Pokoknya ada hubungannya sama kerja sama dengan Microsoft. Kan, Github sudah diakuisisi sama Microsoft.

	Kalau repositori, apa itu?

	Gampangannya ya, repositori itu project, atau folder, atau apalah itu. Ibaratnya, satu repositori itu sama dengan satu postingan blog (nggak nyambung. Hehehehe).

3. Ukuran penyimpanan per repositori 1 GB
4. Bisa membuat repositori sebanyak apapun
5. Penggunaannya simpel

	Simpel. Kamu cuma perlu Terminal (kalau di Linux) atau Command Prompt (kalau di Windows). Macam hacker dah. Hehehehe.

6. Software yang digunakan berukuran kecil

	Ya kalau dibandingkan sama software-nya Google Drive.

# Daftar Github

Daftarnya itu seperti biasa. Pakai email gitu. Buka aja <http://github.com> terus register deh.

Nah, ntar kita dapat username tuh. Username ini yang kita perlukan pada langkah-langkah berikutnya.

# Membuat Repositori

Setelah login, klik tanda plus (+) di pojok kanan atas terus pilih `New Repository`.

Terus isi data-data yang diperlukan:

- Nama repositori

	Untuk satu kata: skripsi

	Untuk dua kata atau lebih: skripsi-semoga-cepat-lulus (gunakan strip untuk memisahkan antarkata).

- Deskripsi repositori

	Boleh diisi, boleh juga nggak.

- Public kan private

	Kalau macam repositori skripsi mah, private aja. Daripada dicopas ntar.

- Pakai README.md kah nggak

	Yang bagian ini, centang aja.

# Install Git

Oh iya, lupa lah, Git harus diinstall dulu. Googling aja: install git.

# Initial Akun Git

```bash
git config --global user.name username
git config --global user.email akun@email.com
```

Gunakan username dan akun@email.com yang terdaftar di Github.

# Clone Repositori

```bash
git clone --depth=1 https://username:password@github.com/username/repositori.git
```

Isi username dengan username-mu. Isi password dengan password Githubmu. Isi repositori dengan nama repositori yang kita buat di Github tadi, misalnya aja skripsi.

# Upload Repositori

- Untuk Windows

	```bash
	git add -A . && git commit -m "Komentar" && git push
	```

- Untuk Linux

	```bash
	git add -A .; git commit -m "Komentar"; git push
	```

	{% include more.html link='/2019/02/26/membuat-terminal-app-di-linux-lite.html' %}

Mudah aja kan menggunakannya?