---
bahasa: bash
tag: pemrograman
layout: post
image: https://instagram.fupg2-1.fna.fbcdn.net/vp/8b6bc72b73d4d5c493b494f87f6d7756/5CFD09BA/t51.2885-15/e35/51349645_2123581420995903_4182805338711215218_n.jpg?_nc_ht=instagram.fupg2-1.fna.fbcdn.net&_nc_cat=103
---

Apa itu Linux? Gampangannya sih temennya Windows. Jadi kayak semacam Windows tapi bukan Windows. Heheheeh. Kalau Windows kan bisa terkena virus, kalau Linux nggak.

Kalau secara resminya, Linux itu Kernel, OS-nya namanya GNU, terus distro yang lagi kupakai namanya Linux Lite. Distro itu bahasa Linuxnya untuk distribution. Ada banyak distro di jagat GNU/Linux (untuk seterusnya kusebut Linux aja). Beberapa yang sudah kupakai adalah Kali Linux yang biasa untuk hacking, Linux Mint yang tampilannya mirip-mirip Windows, dan Elementary OS yang tampilannya mirip Mac OS X.

Nah, setelah mengenal Linux sebagai Kernel, GNU sebagai OS, dan Linux Lite sebagai distro, ada istilah lagi nih yaitu Desktop Environment. Ya macam tampilannya gitu. Kalau nggak ada Desktop Environment, Linux jadinya cuma macam papan hitam bertuliskan warna putih macam papan tulis gitu. Kalau Linux Lite ini Desktop Environmentnya namanya XFCE yang terkenal paling ringan.

Oh iya, Linux Lite ini berbasiskan pada distro Ubuntu sedangkan Ubuntu berbasiskan pada distro Debian, berbeda dengan Manjaro yang berbasiskan pada distro Arch Linux.

Jadi, apa alasanku menggunakan Linux Lite? Lebih tepatnya sih dual boot sama Windows:

1. **Cepat**

	Dibandingkan distro-distro lainnya, Linux Lite ini bisa dibilang masuk kategori cepat. Bootingnya lumayan cepat. Terus juga ketika membuka aplikasi nyaris tanpa loading, kecuali Firefox yang agak loading sedikit tapi lebih cepat dibandingkan distro lainnya, apalagi jika dibandingkan dengan Windows. Terus kalau mau membuka aplikasi, cukup pencet tombol Windows (Super) lalu ketikkan nama aplikasi yang ingin dibuka. Cukup ketik sebagian aja. Apalagi didukung oleh kemampuan mengetik 10 jari. Wah, macam hacker aja.

	Termasuk perbedaan kecepatan yang kurasakan adalah ketika akan menjalankan Jekyll. Dengan perintah `jekyll s`, maka halaman-halaman Jekyll akan dicompile menjadi HTML. Terasa banget ya kecepatannya. Kalau di Windows misalnya lama compile itu 10 detik, di Linux Lite cuma 2 detik. Kurasa sih nggak di Linux Lite aja tetapi juga di distro-distro Linux lainnya.

2. **Nggak Ada Virus**

	Kalau ini sih semua Linux. Linux apa sih yang menggunakan anti virus? Nggak ada. Karena memang nggak ada virus untuk Linux. Selain orang-orang yang buat virus juga males buatnya soalnya yang make Linux orangnya cuma sedikit, juga didukung oleh arsitektur perangkat lunak di Linux itu sendiri sehingga nggak memberikan kesempatan bagi virus dalam berkembang biak.

	Makanya, kalau mau scan flashdisk, biasa aku pakai Linux karena virusnya kelihatan semua. Tinggal delete aja.

3. **Baterai Lumayan Lebih Tahan Lama**

	Karena menggunakan XFCE yang terkenal memakan lebih sedikit resource, sehingga pemakaian RAM pun lebih sedikit sehingga bisa membuat baterai lebih tahan lama ketika menggunakannya. Bahkan, ketika aku menggunakan Firefox, RAM-nya nggak makan terlalu banyak.

	Kalau Desktop Environment lain mah makan lebih banyak. Kalau Desktop Environment GNOME yang ada di Kali Linux, Elementary OS, dan Linux Mint terasa lebih berat. Apalagi kalau Desktop Environment KDE, lebih berat lagi sih katanya.

4. **Berbasis Debian**

	Linux Lite ini kan berbasis Debian, jadi aku lebih paham cara menggunakannya dalam pengelolaan package, atau yang di Windows biasa disebut dengan aplikasi. Kalau install package di distro Linux berbasis Debian, biasa kugunakan perintah `dpkg -i nama-panckage.deb` kalau install secara offline. Kalau secara online, mengambil dari repositori resminya, aku menggunakan perintah `sudo apt install nama-package`.

	Kerasa banget ya perbedaannya ketika menggunakan distro Linux berbasis Arch Linux seperti Manjaro. Tampilannya sih elegan. Terus untuk file managernya dia menggunakan Dolphin sehingga aku bisa langsung koding di dalamnya karena sudah built in dengan Terminal yang terletak di bagian bawah file manager. Cuma ya itu, agak bingung ketika pengelolaan package, termasuk dalam mengetikkan perintah-perintah di Terminal karena ada sedikit perbedaan.