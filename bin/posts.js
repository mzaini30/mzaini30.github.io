---
layout: compress
---

posts = [
{% for post in site.posts %}
{
    judul: "{{ post.title | replace: '"', '' }}",
    link: "{{ post.url }}",
    gambar: "{{ post.gambar }}",
    kategori: "{{ post.category }}"
},
{% endfor %}
 ]