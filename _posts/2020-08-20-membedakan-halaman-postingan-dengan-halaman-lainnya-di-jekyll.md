--- 
layout: post
title: Membedakan halaman postingan dengan halaman lainnya di Jekyll
category: jekyll 
--- 

Untuk halaman postingan, dia ada tanggalnya. Sedangkan untuk halaman selain halaman postingan, nggak pakai tanggal. Maka, bisa kita cari dengan kode seperti berikut ini:

```liquid
{% raw %}{% if page.date %}{% endraw %}
 Jika halaman postingan
{% raw %}{% else %}{% endraw %}
 Jika bukan halaman postingan
{% raw %}{% endif %}{% endraw %}
```