---
title: 'Eh, Cara Jalanin Javascript Gimana Ya?'
layout: post
bahasa: Javascript
---

Oke, langsung aja ya. Misalnya kita mau membuat aplikasi menghitung luas segitiga. Tau rumusnya lok? Itu tuh _setengah kali alas, kali tinggi_.

1. Buka browser (boleh Chrome, Firefox, atau Safari)
2. Pencet `Ctrl` `Shift` `I`
	
	Kan muncul tuh developer tools di bagian bawah browser.

3. Klik yang bagian `Console`
4. Nah, terus ketik kodenya di situ:

	```javascript
	luas_segitiga = function(){
		alas = prompt('Berapa panjang alas? (dalam cm)')
		tinggi = prompt('Berapa panjang tinggi? (dalam cm)')
		hitung = alas * tinggi / 2
		alert('Luas segitiga tersebut adalah ' + hitung + ' cm^2')
	}
	```

	Lalu, apa yang terjadi? Nggak ada lok? Nah, itu kan baru deklarasi fungsi `luas_segitiga()`. Untuk menjalankannya, kita panggil dengan mengetikkan `luas_segitiga()`.