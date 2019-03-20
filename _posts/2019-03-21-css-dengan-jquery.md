---
title: "Mengolah CSS dengan jQuery"
layout: post
bahasa: Javascript
---

Mengapa kita harus mengolah CSS dengan jQuery? Bukankah lebih mudah untuk menuliskannya di CSS langsung? Misalnya kita ingin mendesain suatu elemen dengan warna hijau, border biru, terus nggak runcing, kan kita tinggal menuliskannya seperti ini:

```css
.kotak {
	background: green;
	border: 1px solid blue;
	border-radius: 5px;
}
```

Tapi memang sih terkadang kita ingin memberikan style suatu elemen hanya dalam kondisi tertentu. Misalnya pas diklik aja, atau misalnya ketika mencapai sekian pixel dari atas. Maka, kita gunakan jQuery.

Berikut ini adalah contoh kita memberikan CSS dengan media jQuery:

# Memberikan Isi CSS Secara Langsung

## Untuk Satu Style Aja

```javascript
$('.kotak').css('background', 'aqua')
```

## Untuk Banyak Style

```javascript
$('.kotak').css({
	background: 'aqua',
	color: 'blue',
	transform: 'rotate(45deg)'
})
````

# Menambahkan Class

```javascript
$('.kotak').addClass('hilang')
```

# Menghapus Class

```javascript
$('.kotak').removeClass('hilang')
```

# Menambahkan CSS Secara Tersirat

## Menampilkan

```javascript
$('.kotak').show()

$('.kotak').slideDown()
```

## Melenyapkan

```javascript
$('.kotak').hide()

$('.kotak').slideUp()
```

## Mendapatkan Lebar atau Tinggi

```javascript
$('.kotak').height()

$('.kotak').width()
```