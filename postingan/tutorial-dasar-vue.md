# Tutorial dasar Vue

Kita mulai dari template dasar Vue:

```html
<!DOCTYPE html>
<html>
<head>
 <title>Hello Vue</title>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
 <div class="vue"></div>
 <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
 <script type="text/javascript">
  new Vue({
   el: '.vue'
  })
 </script>
</body>
</html>
```

Di situ, kita menggunakan `.vue` sebagai rumah bagi Vue. Jadi, ketika kita ingin menggunakan fitur Vue, maka semua HTMLnya kita letakkan di dalam `.vue`.

Sekarang, kita akan bermain data:

```html 
<p>{{ angka }}</p>
```

Lalu, di bagian Javascriptnya:

```javascript
data: {
 angka: 0
}
```

Maka, di tag `<p>` tersebut, isinya adalah angka nol. Berikut ini adalah script lengkapnya:

```html
<!DOCTYPE html>
<html>
<head>
 <title>Hello Vue</title>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
 <div class="vue">
  <p>{{ angka }}</p>
 </div>
 <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
 <script type="text/javascript">
  new Vue({
   el: '.vue',
   data: {
    angka: 0
   }
  })
 </script>
</body>
</html>
```

Nah, kalau kita ingin mengubah angka 0 menjadi angka 2 misalnya, tinggal ubah aja di object angka:

```javascript
angka: 2 
```

Oh iya, supaya nggak bentrok sama Jekyll, kita ubah `{{ angka }}` menjadi `<< angka >>`. Caranya adalah dengan menambahkan kode `delimiters`:

```html
<!DOCTYPE html>
<html>
<head>
 <title>Hello Vue</title>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
 <div class="vue">
  <p><< angka >></p>
 </div>
 <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
 <script type="text/javascript">
  new Vue({
   el: '.vue',
   delimiters: ["<<", ">>"],
   data: {
    angka: 2
   }
  })
 </script>
</body>
</html>
```

Sekarang, kita akan menambahkan tombol `Tambah` yang akan membuat angkanya bertambah 1:

```html 
<button @click="angka++">Tambah</button>
```

Lalu, kita buat tombol `Kurang` yang akan membuat angkanya berkurang 1:

```html 
<button @click="kurang()">Kurang</button>
```

Lalu, di bagian Javascriptnya:

```javascript 
methods: {
 kurang(){
  angka--
 }
}
```

Hasilnya:

```html
<!DOCTYPE html>
<html>
<head>
 <title>Hello Vue</title>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
 <div class="vue">
  <p><< angka >></p>
  <p>
   <button @click="angka++">Tambah</button>
   <button @click="kurang()">Kurang</button>
  </p>
 </div>
 <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
 <script type="text/javascript">
  new Vue({
   el: '.vue',
   delimiters: ["<<", ">>"],
   data: {
    angka: 2
   },
   methods: {
    kurang(){
     angka--
    }
   }
  })
 </script>
</body>
</html>
```

Kemudian misalnya kita ingin ketika pertama kali halaman dimuat menjalankan script `console.log("Hello world!")`, maka kita mengetikkannya di `mounted`:

```html
<!DOCTYPE html>
<html>
<head>
 <title>Hello Vue</title>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
 <div class="vue">
  <p><< angka >></p>
  <p>
   <button @click="angka++">Tambah</button>
   <button @click="kurang()">Kurang</button>
  </p>
 </div>
 <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
 <script type="text/javascript">
  new Vue({
   el: '.vue',
   delimiters: ["<<", ">>"],
   data: {
    angka: 2
   },
   methods: {
    kurang(){
     angka--
    }
   },
   mounted(){
    console.log("Hello world!")
   }
  })
 </script>
</body>
</html>
```