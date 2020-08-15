--- 
layout: post
title: Menggabungkan SPA dan MPA pada Jekyll
--- 

SPA (single page application) akhir-akhir ini menjadi hype di kalangan front end developer. Mengapa bisa hype? Karena dengan SPA, membuat web kita menjadi kencang, perpindahan halamannya tanpa loading. Ya seperti blogku ini. Aku membuatnya dengan teknik SPA menggunakan Vue. Kerasa kan cepatnya?

Lalu, yang menjadi masalah adalah ketika kita menggunakan SPA ini dengan Github Pages. Seperti yang kita tau, bahwa Github Pages nggak menyediakan fitur URL rewriting seperti di Apache dan Nginx.

Kalau di server kan, kita bisa menggunakan fasilitas URL rewriting, yaitu ketika kita membuka `situs.com` yang merupakan SPA, lalu membuka `situs.com/hello-world`, lalu kita reload halaman itu, maka isinya akan tetap muncul. Sedangkan, kalau pakai Github Pages, dia akan menampilkan halaman 404 (page not found) setelah direload. Nah, gimana dah solusinya.

Seperti yang kita tau, Github Pages itu menggunakan Jekyll yang basisnya adalah MPA (multiple pages application). Jadi, misalnya isinya adalah:

- _posts/hello-world.md 
- _posts/about-me.md 
- _posts/profil.md 

Lalu, di `_config.yml` isinya:

```yaml
permalink: /:title
```

Maka, akan digenerate menjadi:

- hello-world.html
- about-me.html
- profil.html

Kalau di Jekyll, semua halaman itu bisa diakses tanpa menggunakan ekstensi `.html`. Maka, kita bisa juga mengaksesnya dengan:

- situs.com/hello-world
- situs.com/about-me
- situs.com/profil

Nah, sudah dapat kah logikanya?

Jadi, kalau di SPA, kita hanya memerlukan satu file `index.html` dengan fitur URL rewriting pada sisi server, maka kalau di Jekyll, kita hanya perlu memasukkan file `index.html` itu di folder `_includes`. Jadinya `_includes/index.html`. Lalu, untuk di `_layouts/post`, `index.html`, dan `404.html` isinya:

```liquid
--- 
--- 
{% raw %}{% include index.html %}{% endraw %}
```