---
layout: post
---

Apa itu Termux Alias?

Jadi, Termux Alias itu pengennya sih untuk menghadirkan fitur `alias` di Terminal Linux ke dalam Termux, semacam Terminal tapi untuk Android.

Nah, kalau misalnya kita buat `alias` di Linux dengan argumen "jika mengetik `tulis` maka akan tampil `aku menulis`", maka jika kita mengetikkan `tulis` di Terminal, maka akan tampil tulisan `aku menulis`. Ya, tentu saja dengan menyetting alias-nya terlebih dahulu sih.

{% include more.html link='/2019/02/15/membuka-current-directory-di-terminal-guake.html' %}

# Contoh Alias dengan APK Termux Alias

1. Klik garis tiga di pojok kanan atas
2. Klik `Example`. Maka akan tampil:

	```bash
	github:
	git clone --depth=1 https://username:password@github.com/username/$1
	upload:
	git status; git add -A .; git commit -m "okay"; git push
	my-folder:
	cd ~/storage/dcim/my-folder; ls
	```

3. Nah, coba perhatikan pada bagian:

	```bash
	github:
	git clone --depth=1 https://username:password@github.com/username/$1
	```

	Nanti, ketika kita mengetikkan `github data` di Termux, maka akan dicompile menjadi:

	```bash
	git clone --depth=1 https://username:password@github.com/username/data
	```

# Cara Menggunakan Termux Alias

1. Pada kotak kosong, isi dengan skrip yang kamu inginkan, sesuai dengan template seperti contoh
2. Kalau sudah, klik garis tiga di kanan atas, terus pilih `Compile`. Maka akan tampil kotak dialog yang berisi dengan skrip hasil compile yang siap disalin ke Termux
3. Salin skrip tersebut ke Termux

{% include more.html link='/2019/02/13/pengalaman-menggunakan-linux-lite.html' %}