---
category: membaca
image: /gambar2/reading--notetaking.jpg
---

{% assign kategori_urut = site.category | sort %}
{% for x in kategori_urut %}
  <p class='kategori-urut'><strong>{{ x[0] }}</strong></p>
  <ol>
    {% assign tulisan_urut = site.posts | sort %}
    {% for y in tulisan_urut %}
      {% if y.category == x.category %}
        <li><a href='{{ y.url }}'>{{ y.title }}</a></li>
      {% endif %}
    {% endfor %}
  </ol>
{% endfor %}
