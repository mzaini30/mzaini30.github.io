---
layout: compress
---

data = '';
{% assign tulisan = site.posts | sort: 'title' %}
{% for x in tulisan %}
	data += '<a href="{% if x.link %}{{ x.link }}{% else %}{{ x.url }}{% endif %}" class="list-group-item">';
	data += {{ x.title | markdownify | strip_html | jsonify }};
	data += '<span class="sembunyi">';
	data += {{ x.tag | markdownify | strip_html | jsonify }} ;
	data += {{ x.content | markdownify | strip_html | jsonify }};
	data += '</span></a>';
{% endfor %}

$('.output_cari').html(data);