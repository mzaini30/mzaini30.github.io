--- 
layout: post
title: Berbagai Trik Termux
category: termux
--- 

## Custom Termux

```bash
cd 
cd ../usr/etc 
nano bash.bashrc
```

Lalu, tambahkan ini di akhir baris:

```bash 
PS1="\w: "
```

Maka, hasilnya seperti ini:

![Tampilan terminal Termux](https://i.ibb.co/RbVsJqL/IMG-20200717-154624.jpg)

## Membuat program baru di Termux

Misalnya kita ingin membuat program `tulis`. Ketikkan perintah di bawah ini satu per satu:

```bash 
cd 
cd ../usr/bin 
touch tulis
chmod +x tulis
nano tulis
```

## Install Jekyll

```bash 
pkg install ruby clang make libffi 
gem install jekyll
```