---
layout: post
image: https://cdn-images-1.medium.com/max/2000/0*ZHWZExSWGFDZyElN
---

> Kalau bisa dengan browser, mengapa pakai Notepad?

Browser adalah aplikasi yang kita gunakan untuk menjelajah dunia internet, mengintip "apa sih yang lagi rame sekarang?", bahkan browser juga bisa digunakan untuk menjelajah situs-situs nggak jelas yang malah menambah dosa aja. _Astaghfirullah..._

Ada yang tau nggak, kalau ternyata browser itu juga bisa loh digunakan untuk mengetik seperti di Notepad. Masak iya sih? Iya dong, makanya nih aku mau menjelaskan berbagai kode yang bisa digunakan untuk mengetik melalui browser.

Cara menggunakan kode berikut ini adalah dengan mengetikkannya di _address bar_ browser lalu tekan Enter. Lalu, kita pun bisa mengetik pada jendela browser.

1. **Style Sederhana**

	```html
	data:text/html, <html contenteditable>
	```

2. **Mengetik Arab**

	```html
	data:text/html, <html contenteditable style='direction: rtl;'>
	```

3. **Rata Tengah**

	```html
	data:text/html, <html contenteditable style='text-align: center;'>
	```

4. **Rata Kanan**

	```html
	data:text/html, <html contenteditable style='text-align: right;'>
	```

5. **Latar Belakang Hitam dan Tulisan Putih**

	```html
	data:text/html, <html contenteditable style='background: rgb(0, 0, 0); color: rgb(255, 255, 255);'>
	```

6. **Menggunakan Font Calibri**

	```html
	data:text/html, <html contenteditable style='font-family: Calibri;'>
	```

7. **Menggunakan Font Calibri dan Tulisan Miring**

	```html
	data:text/html, <html contenteditable style='font-family: Calibri; font-style: italic;'>
	```

8. **Menggunakan Font Calibri, Tulisan Miring, dan Rata Tengah**

	```html
	data:text/html, <html contenteditable style='font-family: Calibri; font-style: italic; text-align: center;'>
	```

9. **Menggunakan Font Calibri, Tulisan Miring, dan Rata Kanan**

	```html
	data:text/html, <html contenteditable style='font-family: Calibri; font-style: italic; text-align: right;'>
	```