---
category: pemrograman
---

```html
{% raw %}
{% assign random = site.time | date: "%s" %}
{% assign acak_judul = page.title.size %}
{% assign angka_postingan = page.date | date: "%s" | plus: random | plus: acak_judul %}

{% if page.category %}
	{% assign kategori_postingan = site.categories[page.category] %}

	{% assign tulisan_1 = angka_postingan | modulo: kategori_postingan.size %}
	{% assign tulisan_2 = angka_postingan | plus: 1 | modulo: kategori_postingan.size %}
	{% assign tulisan_3 = angka_postingan | plus: 2 | modulo: kategori_postingan.size %}
	{% assign tulisan_4 = angka_postingan | plus: 3 | modulo: kategori_postingan.size %}
	{% assign tulisan_5 = angka_postingan | plus: 4 | modulo: kategori_postingan.size %}
	{% assign tulisan_6 = angka_postingan | plus: 5 | modulo: kategori_postingan.size %}
	{% assign tulisan_7 = angka_postingan | plus: 6 | modulo: kategori_postingan.size %}
	{% assign tulisan_8 = angka_postingan | plus: 7 | modulo: kategori_postingan.size %}
	{% assign tulisan_9 = angka_postingan | plus: 8 | modulo: kategori_postingan.size %}
	{% assign tulisan_10 = angka_postingan | plus: 9 | modulo: kategori_postingan.size %}

	<nav class="panel">
		{% if kategori_postingan.size > 0 %}
			<a class="panel-block" href="{{ kategori_postingan[tulisan_1].url }}">
				<span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span>
				{{ kategori_postingan[tulisan_1].title }}
			</a>
		{% endif %}
		{% if kategori_postingan.size > 1 %}
			<a class="panel-block" href="{{ kategori_postingan[tulisan_2].url }}">
				<span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span>
				{{ kategori_postingan[tulisan_2].title }}
			</a>
		{% endif %}
		{% if kategori_postingan.size > 2 %}
			<a class="panel-block" href="{{ kategori_postingan[tulisan_3].url }}">
				<span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span>
				{{ kategori_postingan[tulisan_3].title }}
			</a>
		{% endif %}
		{% if kategori_postingan.size > 3 %}
			<a class="panel-block" href="{{ kategori_postingan[tulisan_4].url }}">
				<span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span>
				{{ kategori_postingan[tulisan_4].title }}
			</a>
		{% endif %}
		{% if kategori_postingan.size > 4 %}
			<a class="panel-block" href="{{ kategori_postingan[tulisan_5].url }}">
				<span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span>
				{{ kategori_postingan[tulisan_5].title }}
			</a>
		{% endif %}
		{% if kategori_postingan.size > 5 %}
			<a class="panel-block" href="{{ kategori_postingan[tulisan_6].url }}">
				<span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span>
				{{ kategori_postingan[tulisan_6].title }}
			</a>
		{% endif %}
		{% if kategori_postingan.size > 6 %}
			<a class="panel-block" href="{{ kategori_postingan[tulisan_7].url }}">
				<span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span>
				{{ kategori_postingan[tulisan_7].title }}
			</a>
		{% endif %}
		{% if kategori_postingan.size > 7 %}
			<a class="panel-block" href="{{ kategori_postingan[tulisan_8].url }}">
				<span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span>
				{{ kategori_postingan[tulisan_8].title }}
			</a>
		{% endif %}
		{% if kategori_postingan.size > 8 %}
			<a class="panel-block" href="{{ kategori_postingan[tulisan_9].url }}">
				<span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span>
				{{ kategori_postingan[tulisan_9].title }}
			</a>
		{% endif %}
		{% if kategori_postingan.size > 9 %}
			<a class="panel-block" href="{{ kategori_postingan[tulisan_10].url }}">
				<span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span>
				{{ kategori_postingan[tulisan_10].title }}
			</a>
		{% endif %}
	</nav>
{% endif %}
{% endraw %}
```
