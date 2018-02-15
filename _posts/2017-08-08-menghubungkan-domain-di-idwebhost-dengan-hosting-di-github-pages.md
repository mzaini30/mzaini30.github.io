---
layout: post
title: "Menghubungkan Domain di Idwebhost dengan Hosting di Github Pages"
date: 2017-08-08 17:48:29
gambar: https://topvpnsoftware.com/wp-content/uploads/2017/11/hacking2.jpg
categories: artikel
tags: [hosting, idwebhost, github, domain, dotcom]
---

Ada yang tau nggak kalau situs ini, muhammadzaini.com menggunakan Github? Kok bisa ya? Nah, hostingnya memang di Github tapi domainnya menggunakan Idwebhost. Berikut ini caranya:

# Pengaturan di Github

1. Buat file CNAME di repositori
2. Di file CNAME tersebut, isi nama domain yang sudah dipesan di Idwebhost. Contohnya kalau di blog ini:

    ```
    muhammadzaini.com
    ```

# Pengaturan di Idwebhost

1. Di Idwebhost, buka Nameserver kemudian isikan nilai berikut:

    ```yaml
    Nameserver 1: ns1.idwebhost.id
    Nameserver 2: ns2.idwebhost.id
    ```

2. Buka DNS Management, isikan nilai berikut:

    ```yaml
    Nama host: @
    Jenis records: A (Address)
    Alamat: 192.30.252.153

    Nama host: @
    Jenis records: A (Address)
    Alamat: 192.30.252.154

    Nama host: www
    Jenis records: CNAME (Alias)
    Alamat: mzaini30.github.io
    ```

Koneksi akan aktif dalam waktu 24 jam.