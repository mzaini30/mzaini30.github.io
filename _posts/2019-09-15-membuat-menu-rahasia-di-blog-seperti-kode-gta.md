---
title: Membuat Menu Rahasia di Blog Seperti Kode GTA
category: pemrograman
layout: post
---

Mengapa kode GTA? Ya, aku bingung sih mau buat judul apa.

Intinya tuh kan misalnya nih ya kode untuk menampilkan helikopter di GTA itu: bulat, kotak, L1, L2, atas, kanan (ini aku ngarang aja). Nah, sekarang kita buat nih di blog kita kode macam itu.

Jadi kita buat misalnya mengetikkan _jarvis_, maka akan muncul _Jarvis: Hai, Zen!_. Keren kan? Nah, ini kodenya:

```html
<script type="text/javascript" src="https://craig.global.ssl.fastly.net/js/mousetrap/mousetrap.min.js?a4098"></script>
<script type="text/javascript">
	Mousetrap.bind('j a r v i s', function(){
		alert('Jarvis: Hai, Zen!')
	})
</script>
```

Letakkan di atas `</head>` ya.

Aku sudah pasang ini di blogku. Coba aja ketikkan _zen_. Ntar muncul tuh menunya.

Untuk dokumentasi pemakaiannya ada di <https://craig.is/killing/mice>.
