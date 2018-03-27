---
layout: post
title: "Buka Blokir Telegram di Linux dan Windows"
date: 2017-07-18 10:38:22
gambar: http://storeonanimeonline.com/wp-content/uploads/2014/10/Evernote-Camera-Roll-20140926-110123.png
category: pemrograman
tags: [koding, telegram, linux, skrip]
---

1. Pertama, buka file hosts. Kalau di Windows, letak file hosts ada di `c:\windows\system32\drivers\etc\hosts` sedangkan kalau di Linux, letaknya di `/etc/hosts` atau bisa juga dengan mengetikkan perintah ini di Terminal

    ```bash
    subl /etc/hosts
    ```

2. Tambahkan skrip berikut di dalam file

    ```
    149.154.167.99 telegram.org
    149.154.167.99 desktop.telegram.org
    149.154.167.99 core.telegram.org
    149.154.167.99 macos.telegram.org
    149.154.167.120 web.telegram.org
    149.154.167.57 venus.web.telegram.org
    149.154.175.16 pluto.web.telegram.org
    149.154.175.16 pluto-1.web.telegram.org
    149.154.167.24 venus.web.telegram.org
    149.154.167.24 venus-1.web.telegram.org
    149.154.175.115 aurora.web.telegram.org
    149.154.175.115 aurora-1.web.telegram.org
    149.154.167.124 vesta.web.telegram.org
    149.154.167.124 vesta-1.web.telegram.org
    149.154.171.22 flora.web.telegram.org
    149.154.171.22 flora-1.web.telegram.org
    149.154.167.118 web.telegram.me
    149.154.167.118 telegram.me
    ```

3. Telegram akhirnya bisa dibuka kembali

# Bonus

1. Reddit

    ```
    151.101.53.140 reddit.com www.reddit.com m.reddit.com np.reddit.com nm.reddit.com bt.reddit.com api.reddit.com
    ```

2. Kumpul Bagi

    ```
    119.81.2.142 kbagi.com www.kbagi.com
    119.81.2.139 i.kbagi.com
    119.81.2.141 s1.kbagi.com
    119.81.2.139 s2.kbagi.com
    119.81.2.140 s3.kbagi.com
    209.58.183.2 s200.kbagi.com
    209.58.183.3 s201.kbagi.com
    209.58.183.4 s202.kbagi.com
    209.58.183.5 s203.kbagi.com
    209.58.183.6 s204.kbagi.com
    209.58.183.7 s205.kbagi.com
    209.58.183.8 s206.kbagi.com
    209.58.183.9 s207.kbagi.com
    209.58.183.10 s208.kbagi.com
    209.58.183.1 s209.kbagi.com
    209.58.183.12 s210.kbagi.com
    209.58.183.13 s211.kbagi.com
    209.58.183.14 s212.kbagi.com
    209.58.183.15 s213.kbagi.com
    209.58.183.16 s214.kbagi.com
    209.58.183.17 s215.kbagi.com
    209.58.183.18 s216.kbagi.com
    209.58.183.19 s217.kbagi.com
    209.58.183.20 s218.kbagi.com
    209.58.183.21 s219.kbagi.com
    ```