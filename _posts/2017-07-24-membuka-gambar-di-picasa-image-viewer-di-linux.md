---
layout: post
rss: ada
title: "Membuka Gambar di Picasa Image Viewer di Linux"
date: 2017-07-24 08:50:48
gambar: "http://s-media-cache-ak0.pinimg.com/originals/15/2f/5c/152f5c60070513b1f233a74d30ae542c.png"
category: pemrograman
tags: [linux, picasa]
---

1. Install Picasa
2. Buka folder berisi gambar yang akan kamu tampilkan di Picasa Image Viewer
3. Buka folder tersebut di Terminal

    ```bash
    cd "/home/foto/Himapsi"
    ```

4. Ketik skrip berikut di Terminal

    ```bash
    mimeopen -d 14047386_1251965711503635_443892377111247792_o.jpg
    ```

5. Kemudian akan tampil opsi berikut

    ```
    Please choose a default application for files of type image/jpeg

        1) Wine Internet Explorer  (wine-extension-jfif)
        2) Wine Internet Explorer  (wine-extension-jpe)
        3) ImageMagick (display)  (display.im6)
        4) Iceweasel  (iceweasel)
        5) GNU Image Manipulation Program  (gimp)
        6) Image Viewer  (eog)
        7) Other...

    use application #
    ```

6. Ketik `7`
7. Lalu akan tampil

    ```
    use command:
    ```

8. Ketikkan skrip berikut

    ```bash
    wine "/root/.wine/drive_c/Program Files/Google/Picasa3/PicasaPhotoViewer.exe"
    ```

9. Selesai
