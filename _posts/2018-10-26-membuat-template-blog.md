---
layout: post
title:  "Membuat Template Blogspot"
date:   2018-10-26 19:52:38 +0800
category: pemrograman
---

# Latihan

{% include iklan.html %}

```html
<!DOCTYPE html>
<html>
<head>
	<title>Hai</title>

	<!-- style -->
	
	<b:skin><![CDATA[
		/****CSS CODE*****/
	]]></b:skin>
</head>
<body>
	<!-- sidebar -->

	<b:section id="hello" class="hello"></b:section>

	<p>Hello World</p>

	<!-- isi -->

	<b:section class='main' id='main' showaddelement='yes'>
		<b:widget id='Blog1' locked='false' title='Blog Posts' type='Blog' version='1'/>
	</b:section>
</body>
</html>
```

# Struktur

{% include iklan.html %}

```html
<div>
	<b:section>
		<b:widget></b:widget>
	</b:section>
</div>
```

# Referensi

{% include iklan.html %}

- <https://www.compromath.com/2017/07/create-blogger-template.html>