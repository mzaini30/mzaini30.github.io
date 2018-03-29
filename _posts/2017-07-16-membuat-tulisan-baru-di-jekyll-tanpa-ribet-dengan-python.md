---
layout: post
rss: ada
title: "Membuat Tulisan Baru di Jekyll Tanpa Ribet dengan Python"
date: 2017-07-16 20:23:12
gambar: "http://s-media-cache-ak0.pinimg.com/originals/da/ed/fb/daedfb39127c800eddecbe906b884d45.jpg"
category: pemrograman
tags: [jekyll, python, menulis, blogging]
---

Untuk membuat tulisan baru di Jekyll, ada aturan yang harus dipenuhi. Contohnya adalah berikut ini:

1. Nama file: `2017-07-16-membuat-tulisan-baru-di-jekyll-tanpa-ribet-dengan-python.md`

2. Baris-baris pertama file:

    ```yaml
    layout: post
rss: ada
    title: "Membuat Tulisan Baru di Jekyll Tanpa Ribet dengan Python"
    date: 2017-07-16 20:23:12
    gambar: "http://img08.deviantart.net/1190/i/2012/030/e/4/if_you_feel_like_letting_go____by_nostalgicchills-d4o6rmv.jpg"
    file: 2017-07-16-membuat-tulisan-baru-di-jekyll-tanpa-ribet-dengan-python.md
    ```

Nah, ribet kan? Kali ini aku akan memberikan sebuah skrip untuk membuat nama file dan baris-baris pertama file postingan baru di Jekyll secara otomatis.

1. Buka folder Jekyll di laptopmu misalnya `blog (git)`
2. Buat file baru dengan nama `baru.py` lalu isikan dengan skrip berikut

    ```python
    import datetime, re, os, random

    judul = raw_input("Judul tulisan: ")


    judulstrip = judul[:]
    judulstrip = judulstrip.lower()
    judulstrip = re.sub(r"\(", r"", judulstrip)
    judulstrip = re.sub(r"\)", r"", judulstrip)
    judulstrip = re.sub(r"\"", r"", judulstrip)
    judulstrip = re.sub(r"\?", r"", judulstrip)
    judulstrip = re.sub(r"!", r"", judulstrip)
    judulstrip = re.sub(r"\.", r"", judulstrip)
    judulstrip = re.sub(r",", r"", judulstrip)
    judulstrip = re.sub(r":", r"", judulstrip)
    judulstrip = re.sub(r" ", r"-", judulstrip)

    judul = re.sub(r"\"", r"\"", judul)

    sekarang = datetime.datetime.now()

    tahun = sekarang.year
    bulan = sekarang.month
    tanggal = sekarang.day
    jam = sekarang.hour
    menit = sekarang.minute
    detik = sekarang.second

    if bulan < 10:
        bulan = "0" + str(bulan)
    if tanggal < 10:
        tanggal = "0" + str(tanggal)
    if jam < 10:
        jam = "0" + str(jam)
    if menit < 10:
        menit = "0" + str(menit)
    if detik < 10:
        detik = "0" + str(detik)

    gambar = """
    http://img04.deviantart.net/d79d/i/2011/121/9/d/cats_life_by_apofiss-d3fb1qw.jpg
    http://img09.deviantart.net/1b98/i/2010/240/4/5/bad_cat_by_wolf_minori-d2xg0ji.jpg
    http://img07.deviantart.net/26e0/i/2013/109/f/e/just_smile_by_leejun35-d629j5x.jpg
    http://img01.deviantart.net/384a/i/2010/037/8/2/converse_smile_by_choifreako.jpg
    http://img09.deviantart.net/9f4c/i/2013/021/7/c/don__t_feel_blue____by_janneo-d38by92.jpg
    http://img08.deviantart.net/1190/i/2012/030/e/4/if_you_feel_like_letting_go____by_nostalgicchills-d4o6rmv.jpg
    """

    gambar = gambar.splitlines()
    gambar = filter(None, gambar)
    random.shuffle(gambar)
    random.shuffle(gambar)
    random.shuffle(gambar)
    gambar = random.choice(gambar)

    namafile = "{tahun}-{bulan}-{tanggal}-{judulstrip}.md"
    isifile = """---
    layout: post
rss: ada
    title: "{judul}"
    date: {tahun}-{bulan}-{tanggal} {jam}:{menit}:{detik}
    gambar: "{gambar}"
    file: {tahun}-{bulan}-{tanggal}-{judulstrip}.md
    ---

    """

    namafile = namafile.format(
        tahun = tahun,
        bulan = bulan,
        tanggal = tanggal,
        judulstrip = judulstrip
    )
    isifile = isifile.format(
        judul = judul,
        tahun = tahun,
        bulan = bulan,
        tanggal = tanggal,
        jam = jam,
        menit = menit,
        detik = detik,
        judulstrip = judulstrip,
        gambar = gambar
    )

    buatfile = open("_posts/"+namafile, "w")
    buatfile.write(isifile)

    os.system("subl _posts/"+namafile)
    ```

3. Buka Terminal lalu ketik

    ```bash
    python baru.py
    ```

4. Masukkan judul postingan yang akan kamu buat lalu tekan `Enter`

5. File postingan akan otomatis terbentuk di folder `_posts` dan terbuka di Sublime Text