---
layout: post
rss: ada
title: "Skrip untuk Sinkronisasi Git Secara Otomatis"
date: 2017-06-22 09:18:44
gambar: "http://data2.1freewallpapers.com/detail/girl-anime-automatic.jpg"
category: pemrograman
tags: [skrip, git, python]
---

1. Buka folder yang terhubung dengan git (Gitlab, Bitbucket, Github, dll). Contohnya saja folder yang terhubung adalah `manga (git)`

2. Buat file baru dengan nama `upload.py` lalu buka dengan aplikasi penyunting teks dan ketik skrip di bawah ini

    ```python
    import time, os

    git = """git status
    git add -A .
    git commit -m "oke"
    git push"""

    while True:
        os.system(git)
        print
        time.sleep(180)
    ```

3. Di folder tersebut, buka Terminal lalu ketikkan perintah berikut

    ```bash
    python upload.py
    ```

4. Maka, secara otomatis, setiap tiga menit, folder tersebut akan tersinkronisasi dengan git
