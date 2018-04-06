---
layout: post
title: SOP Admin Web Psikologi Universitas Mulawarman
category: pemrograman
date: 2018-04-06 21:13:00
gambar: https://img00.deviantart.net/0f0e/i/2015/131/f/e/game_over_by_panchusfenix-d8t17go.jpg
# rss: ada
---

# Membuat Postingan Baru

1. Gunakan kategori `kabar berita` di setiap postingan baru
2. Boleh menggunakan kategori lainnya tapi tetap harus disandingkan dengan kategori `kabar berita`. Contohnya kategori `news` dan `kabar berita`; kategori `tutorial` dan `kabar berita`

# Menambahkan atau Mengedit Gambar Pada Slideshow

1. Ukuran gambar < 600 kb
2. Lebar gambar <= 1000 px
3. Kode untuk mengedit slideshow bisa ditemukan di <http://psikologi.fisip-unmul.ac.id/main/wp-admin/options-general.php?page=header-and-footer-scripts%2Fshfs.php>

	Berikut ini adalah skripnya:

	```html
	<div class="gambar-sampul" style="display: none;">

		<!-- ini adalah bagian untuk diedit -->

		<img src="https://s25.postimg.org/90apts04f/image.png">
		<img src="https://s25.postimg.org/qdl08ol5r/image.png">
		<img src="https://s25.postimg.org/rfv6r8yu7/image.png">
		<img src="https://s25.postimg.org/x41hi5awf/image.png">
		<img src="https://s25.postimg.org/4r5zro9qn/image.png">
		<img src="https://s25.postimg.org/njhuv9ta7/image.png">
		<img src="https://s25.postimg.org/5tg6a7d4f/image.png">
		<img src="https://s25.postimg.org/w1razl4xr/image.png">
		<img src="https://s25.postimg.org/8arxhfmq7/image.png">
		<img src="https://s25.postimg.org/7l9551rbj/image.png">
		<img src="https://s25.postimg.org/t7o5m406n/image.png">
		<img src="https://s25.postimg.org/si5d9rf2n/image.png">
		<img src="https://s25.postimg.org/41n7f9br3/image.png">
		<img src="https://s25.postimg.org/q0tm2h80v/image.png">
		<img src="https://s25.postimg.org/ixlqmuffz/image.png">
		<img src="https://s9.postimg.org/kfjuhkhyn/IMG_1750.jpg">
		<img src="https://s9.postimg.org/8qfutm6fj/IMG_1769.jpg">
		<img src="https://s25.postimg.org/rz7o9q8sv/image2993.png">
		<img src="https://s25.postimg.org/488armo1b/image3004.png">
		<img src="https://s25.postimg.org/zf6xvjjnj/image3015.png">
		<img src="https://s25.postimg.org/6pk1ywv33/image3026.png">
		<img src="https://s25.postimg.org/jtpmbluun/image3037.png">
		<img src="https://s25.postimg.org/osd4q5lsv/image3048.png">

		<!-- stop edit -->

	</div>
	<img src="" class="sampul" style="display: none;">

	<script type="text/javascript">
		document.writeln(`<scri`+`pt type="text/javascript" src="http://muhammadzaini.com/bin-bin/jquery/jquery.min.js?${Math.random()}"></scri`+`pt>`);
	</script>
	<script type="text/javascript">

		gambar_sampul = $('.gambar-sampul').find('img').map(function(){
			return $(this).attr('src');
		}).get();

		function shuffle(array) {
		  var currentIndex = array.length, temporaryValue, randomIndex;

		  // While there remain elements to shuffle...
		  while (0 !== currentIndex) {

		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		  }

		  return array;
		}
		gambar_sampul = shuffle(gambar_sampul);
		
		$(function(){
			let angka = 0;
			ubah_gambar = function(){
				$('.layer1').css({
					'background-image': 'url(\''+gambar_sampul[angka]+'\')'
				});
				angka++;
				angka = angka % gambar_sampul.length;
				$('img.sampul').attr('src', gambar_sampul[angka]).on('load', function(){
					$('.layer1').css({
						'background-image': 'url(\''+gambar_sampul[angka]+'\')'
					});
				});
			}
			setInterval(ubah_gambar, 6000);
		});

	</script>
	```

	Editlah hanya di bagian `ini adalah bagian untuk diedit`