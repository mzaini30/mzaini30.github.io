---
layout: post
title: Membuat Related Posts dan Related Posts Berdasarkan Kategori di Jekyll
date: 2018-02-21 21:36:49
category: pemrograman
tags: [liquid, jekyll]
gambar: 
---

Assign awal:

```
{% raw %}{% assign random = site.time | date: "%s" %}
{% assign acak_judul = page.title.size %}
{% assign angka_postingan = page.date | date: "%s" | plus: random | plus: acak_judul %}{% endraw %}
```

Related posts berdasarkan kategori:

```html
{% if page.category %}
<h1 style="color: rgb(255, 82, 82);">Tulisan Menarik Lainnya dalam Kategori {{ page.category | capitalize }}</h1>
{% assign page_kategori = site.categories[page.category] %}
{% assign kategori_selanjutnya_1 = angka_postingan | modulo: page_kategori.size %}
{% assign kategori_selanjutnya_2 = angka_postingan | plus: 1 | modulo: page_kategori.size %}
{% assign kategori_selanjutnya_3 = angka_postingan | plus: 2 | modulo: page_kategori.size %}
{% assign kategori_selanjutnya_4 = angka_postingan | plus: 3 | modulo: page_kategori.size %}
{% assign kategori_selanjutnya_5 = angka_postingan | plus: 4 | modulo: page_kategori.size %}
{% assign kategori_selanjutnya_6 = angka_postingan | plus: 5 | modulo: page_kategori.size %}
<div>
	<div class="row">
		<div class="col-sm-6">
			<div class="row">
				<a href="{{ page_kategori[kategori_selanjutnya_1].url }}">
					<div class="col-xs-4" style="padding-right: 5px;">
						<div class="kotak" style="background-image: url({{ page_kategori[kategori_selanjutnya_1].gambar }});" style="width: 100%;"></div>
					</div>
					<div class="col-xs-8" style='padding-left: 5px;'>{{ page_kategori[kategori_selanjutnya_1].title }}</div>
				</a>
			</div>
			<br>
			<div class="row">
				<a href="{{ page_kategori[kategori_selanjutnya_2].url }}">
					<div class="col-xs-4" style="padding-right: 5px;">
						<div class="kotak" style="background-image: url({{ page_kategori[kategori_selanjutnya_2].gambar }});" style="width: 100%;"></div>
					</div>
					<div class="col-xs-8" style="padding-left: 5px;">{{ page_kategori[kategori_selanjutnya_2].title }}</div>
				</a>
			</div>
			<br>
			<div class="row">
				<a href="{{ page_kategori[kategori_selanjutnya_3].url }}">
					<div class="col-xs-4" style="padding-right: 5px;">
						<div class="kotak" style="background-image: url({{ page_kategori[kategori_selanjutnya_3].gambar }});" style="width: 100%;"></div>
					</div>
					<div class="col-xs-8" style='padding-left: 5px;'>{{ page_kategori[kategori_selanjutnya_3].title }}</div>
				</a>
			</div>
			<br>
		</div>
		<div class="col-sm-6">
			<div class="row">
				<a href="{{ page_kategori[kategori_selanjutnya_4].url }}">
					<div class="col-xs-4" style="padding-right: 5px;">
						<div class="kotak" style="background-image: url({{ page_kategori[kategori_selanjutnya_4].gambar }});" style="width: 100%;"></div>
					</div>
					<div class="col-xs-8" style='padding-left: 5px;'>{{ page_kategori[kategori_selanjutnya_4].title }}</div>
				</a>
			</div>
			<br>
			<div class="row">
				<a href="{{ page_kategori[kategori_selanjutnya_5].url }}">
					<div class="col-xs-4" style="padding-right: 5px;">
						<div class="kotak" style="background-image: url({{ page_kategori[kategori_selanjutnya_5].gambar }});" style="width: 100%;"></div>
					</div>
					<div class="col-xs-8" style='padding-left: 5px;'>{{ page_kategori[kategori_selanjutnya_5].title }}</div>
				</a>
			</div>
			<br>
			<div class="row">
				<a href="{{ page_kategori[kategori_selanjutnya_6].url }}">
					<div class="col-xs-4" style="padding-right: 5px;">
						<div class="kotak" style="background-image: url({{ page_kategori[kategori_selanjutnya_6].gambar }});" style="width: 100%;"></div>
					</div>
					<div class="col-xs-8" style='padding-left: 5px;'>{{ page_kategori[kategori_selanjutnya_6].title }}</div>
				</a>
			</div>
			<br>
		</div>
	</div>
</div>
{% endif %}
```

Related posts semua postingan:

```html
<h1 style="color: rgb(0, 121, 107);">Baca Juga Ya</h1>
{% raw %}{% assign postingan_selanjutnya_1 = angka_postingan | modulo: site.posts.size %}
{% assign postingan_selanjutnya_2 = angka_postingan | plus: 1 | modulo: site.posts.size %}
{% assign postingan_selanjutnya_3 = angka_postingan | plus: 2 | modulo: site.posts.size %}
{% assign postingan_selanjutnya_4 = angka_postingan | plus: 3 | modulo: site.posts.size %}
{% assign postingan_selanjutnya_5 = angka_postingan | plus: 4 | modulo: site.posts.size %}
{% assign postingan_selanjutnya_6 = angka_postingan | plus: 5 | modulo: site.posts.size %}
<div>
	<div class="row">
		<div class="col-sm-6">
			<div class="row">
				<a href="{{ site.posts[postingan_selanjutnya_1].url }}">
					<div class="col-xs-4" style="padding-right: 5px;">
						<div class="kotak" style="background-image: url({{ site.posts[postingan_selanjutnya_1].gambar }});" style="width: 100%;"></div>
					</div>
					<div class="col-xs-8" style='padding-left: 5px;'>{{ site.posts[postingan_selanjutnya_1].title }}</div>
				</a>
			</div>
			<br>
			<div class="row">
				<a href="{{ site.posts[postingan_selanjutnya_2].url }}">
					<div class="col-xs-4" style="padding-right: 5px;">
						<div class="kotak" style="background-image: url({{ site.posts[postingan_selanjutnya_2].gambar }});" style="width: 100%;"></div>
					</div>
					<div class="col-xs-8" style="padding-left: 5px;">{{ site.posts[postingan_selanjutnya_2].title }}</div>
				</a>
			</div>
			<br>
			<div class="row">
				<a href="{{ site.posts[postingan_selanjutnya_3].url }}">
					<div class="col-xs-4" style="padding-right: 5px;">
						<div class="kotak" style="background-image: url({{ site.posts[postingan_selanjutnya_3].gambar }});" style="width: 100%;"></div>
					</div>
					<div class="col-xs-8" style='padding-left: 5px;'>{{ site.posts[postingan_selanjutnya_3].title }}</div>
				</a>
			</div>
			<br>
		</div>
		<div class="col-sm-6">
			<div class="row">
				<a href="{{ site.posts[postingan_selanjutnya_4].url }}">
					<div class="col-xs-4" style="padding-right: 5px;">
						<div class="kotak" style="background-image: url({{ site.posts[postingan_selanjutnya_4].gambar }});" style="width: 100%;"></div>
					</div>
					<div class="col-xs-8" style='padding-left: 5px;'>{{ site.posts[postingan_selanjutnya_4].title }}</div>
				</a>
			</div>
			<br>
			<div class="row">
				<a href="{{ site.posts[postingan_selanjutnya_5].url }}">
					<div class="col-xs-4" style="padding-right: 5px;">
						<div class="kotak" style="background-image: url({{ site.posts[postingan_selanjutnya_5].gambar }});" style="width: 100%;"></div>
					</div>
					<div class="col-xs-8" style='padding-left: 5px;'>{{ site.posts[postingan_selanjutnya_5].title }}</div>
				</a>
			</div>
			<br>
			<div class="row">
				<a href="{{ site.posts[postingan_selanjutnya_6].url }}">
					<div class="col-xs-4" style="padding-right: 5px;">
						<div class="kotak" style="background-image: url({{ site.posts[postingan_selanjutnya_6].gambar }});" style="width: 100%;"></div>
					</div>
					<div class="col-xs-8" style='padding-left: 5px;'>{{ site.posts[postingan_selanjutnya_6].title }}</div>
				</a>
			</div>
			<br>
		</div>
	</div>
</div>
```