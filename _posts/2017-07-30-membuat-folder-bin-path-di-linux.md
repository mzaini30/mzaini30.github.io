---
layout: post
title: "Membuat Folder BIN (Path) di Linux"
date: 2017-07-30 10:38:40
gambar: "http://images6.alphacoders.com/632/632065.jpg"
categories: posts
tags: [path, linux, koding, skrip, bash]
---

Membuat path di sistem komputer sangatlah penting karena di folder tersebut akan kita isi dengan berbagai perintah singkat yang dapat menjalankan banyak perintah. Misalnya saja kalau saya ketik di Terminal:

```bash
zen
```

Maka akan menjalankan dua hal berikut:

1. Mematikan keyboard bawaan laptop
2. Menjalankan apache2

Nah, penting banget kan path ini?

Sekarang kita akan membuat path di Linux.

1. Siapkan sebuah folder yang akan dijadikan sebagai path. Misalnya saja

    ```
    /home/bin (git)
    ```

2. Ketik di Terminal:

    ```bash
    subl /etc/profile
    ```

3. Perhatikan pada bagian

    ```bash
    if [ "`id -u`" -eq 0 ]; then
      PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
    else
      PATH="/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games"
    fi
    export PATH
    ```

4. Di bagian akhir dari PATH, tambahkan letak folder path sehingga skripnya menjadi

    ```bash
    if [ "`id -u`" -eq 0 ]; then
      PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/home/bin (git)"
    else
      PATH="/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games:/home/bin (git)"
    fi
    export PATH
    ```

# Apa Isi dari PATH?

Berikut ini adalah beberapa isi dari folder path yang saya punya

```
baris
bitbucket
enter
fluxion
gitlab
hacker
```

Misalnya saja isi dari `baris`

```bash
cd "/home/verbatim generator (git)/baris"
python baris.py
```

Untuk memanggilnya di Terminal, kamu cukup mengetikkan

```bash
baris
```

# Membuat File Baru di Folder PATH

1. Buat file seperti biasa, misalnya namanya adalah

    ```
    kucing
    ```

    Lalu kamu isi dengan perintah-perintah yang akan dijalankan

2. Buka Terminal lalu ketikkan

    ```bash
    chmod +x kucing
    ```

3. Sudah itu aja
