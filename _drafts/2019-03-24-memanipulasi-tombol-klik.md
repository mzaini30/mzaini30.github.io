---
bahasa: Javascript
title: "Memanipulasi Tombol Klik? Bisa Kah?"
layout: post
---

Biasanya kan kalau misalnya ada tombol menuju Google, pas diklik ya yang kebuka Google. Contohnya aja tombol di bawah ini:

[Menuju Google &rarr;](http://google.com)

Nah, sekarang mau kita coba nih, link-nya ke Google, tapi pas diklik, malah kebuka Facebook. Wow, mantap.

# Langkah-Langkah

1. Pertama, buat dulu link ke Google:

	```html
	<a href="http://google.com">Menuju ke Google &rarr;</a>
	```

	Hasil:

	<p><a href="http://google.com">Menuju ke Google &rarr;</a></p>

2. Terus include-kan jQuery ya. Bisa download dulu di situsnya jQuery:

	```html
	<a href="http://google.com">Menuju ke Google &rarr;</a>

	<script src="jquery.min.js"></script>
	```

3. Terus kita kasih class di link-nya, sebagai identifier:

	```html
	<a href="http://google.com" class="link_ke_google_bohongan">Menuju ke Google &rarr;</a>

	<script src="jquery.min.js"></script>
	```

4. Nah, baru kita buat skrip klik dengan identifier yang sudah kita buat tadi:

	```html
	<a href="http://google.com" class="link_ke_google_bohongan">Menuju ke Google &rarr;</a>

	<script src="jquery.min.js"></script>
	<script>
		$('.link_ke_google_bohongan').click(function(){
			
		})
	</script>
	```

5. Kita arahkan link-nya ke Facebook:

	```html
	<a href="http://google.com" class="link_ke_google_bohongan">Menuju ke Google &rarr;</a>

	<script src="jquery.min.js"></script>
	<script>
		$('.link_ke_google_bohongan').click(function(){
			location.href = 'http://facebook.com'	
		})
	</script>
	```

6. Terakhir, kita matikan link-nya yang ke Google tadi:

	```html
	<a href="http://google.com" class="link_ke_google_bohongan">Menuju ke Google &rarr;</a>

	<script src="jquery.min.js"></script>
	<script>
		$('.link_ke_google_bohongan').click(function(event){
			event.preventDefault()
			location.href = 'http://facebook.com'	
		})
	</script>
	```

# Hasil

<p><a href="http://google.com" class="link_ke_google_bohongan">Menuju ke Google &rarr;</a></p>
<script>
	$('.link_ke_google_bohongan').click(function(event){
		event.preventDefault()
		location.href = 'http://facebook.com'	
	})
</script>