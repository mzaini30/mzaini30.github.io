---
title: Membuat Single HTML Application dengan Jekyll dan jQuery
category: pemrograman
---

Membuat aplikasi dan menggunakan aplikasi di zaman sekarang ini adalah kebutuhan. Terkadang memang ada kebutuhan tertentu yang membuat kita harus membuat aplikasi dikarenakan tak tersedianya aplikasi sesuai dengan kebutuhan kita tersebut. Nah, kalau kita membuat aplikasi semacam yang berekstensi `*.exe`, maka diperlukan penguasaan atas bahasa pemrograman tertentu seperti Java dan C#. Tentu rumit kan?

Namun untungnya di Windows ada kemudahan yaitu kita bisa membuat aplikasi berbasis HTML. Wow kok bisa? Jadi, intinya itu kamu membuat single HTML lalu mengubah ekstensinya yang semula `*.html` menjadi `*.hta`. Sesimpel itu.

Tapi kan, kalau membuat aplikasi berbasis HTML, kita memerlukan Javascript untuk behaviornya. Maka, kita memerlukan jQuery untuk mempermudah. Nah, karena Single HTML Application, maka semuanya harus ada di dalam satu file. Maka, kode-kode dari jQuery harus kita salin ke dalam file aplikasi yang berekstensi `*.hta`. Maka, kita perlu Jekyll untuk mempermudah menyalin kode-kode jQuery.

# Struktur Project

```
/
│   index.html
│
├───_includes
│       jquery.min.js
```

# Isi file `index.html`

```html
{% raw %}
---
---

<!DOCTYPE html>
<html>
<head>
	<title>Latihan HTA</title>
	<meta charset="utf-8">
</head>
<body>
	<input type="text" class="angka-pertama" autofocus="">
	+
	<input type="text" class="angka-kedua">
	=
	<span class="hasil"></span>
	<script type="text/javascript">
		{% include jquery.min.js %}
		$('input').on('keyup', function(){
			hasil = Number($('.angka-pertama').val()) + Number($('.angka-kedua').val())
			$('.hasil').html(hasil)
		})
	</script>
</body>
</html>
{% endraw %}
```

Lalu, kalau kita jalankan `jekyll s`, maka akan membuat file `index.html` di dalam folder `_site/`. Nah, `index.html` inilah yang kita salin lalu kita ubah ekstensinya menjadi `.hta`. Maka, berikut ini adalah hasil akhir foldernya:

```
D:.
│   index.html
│
├───_includes
│       jquery.min.js
│
└───_site
        aplikasi.hta
        index.html
```
