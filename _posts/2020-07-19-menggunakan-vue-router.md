--- 
layout: post
title: Menggunakan Vue Router
tag: script
gambar: https://image.freepik.com/free-photo/hand-using-gadget-top-view_155003-6441.jpg
--- 

Pertama, kita buat dulu `index.html` dengan struktur dasar:

```html
<!DOCTYPE HTML>
<html>
 <head>
  <title>Contoh Vue Router</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
 </head>
 <body>
  
 </body>
</html>
```

Kemudian kita pasang Vue dan Vue Router:

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.min.js"></script>
```

Sehingga, kodenya jadi:

```html
<!DOCTYPE HTML>
<html>
 <head>
  <title>Contoh Vue Router</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
 </head>
 <body>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
  <script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.min.js"></script>
 </body>
</html>
```

Kemudian, kita buat div `.vue` yang berguna sebagai _rumah_ bagi Vue. Dan `<router-view>` di dalamnya untuk menampilkan hasil render dari Vue Router:

```html 
<div class="vue">
 <router-view></router-view>
</div>
```

Jadinya:

```html 
<!DOCTYPE HTML>
<html>
 <head>
  <title>Contoh Vue Router</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
 </head>
 <body>
  <div class="vue">
   <router-view></router-view>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
  <script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.min.js"></script>
 </body>
</html>
```

Lalu, kita panggil Vue di dalam Javascript:

```javascript 
new Vue({
 el: ".vue"
})
```

Jadinya:

```html 
<!DOCTYPE HTML>
<html>
 <head>
  <title>Contoh Vue Router</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
 </head>
 <body>
  <div class="vue">
   <router-view></router-view>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
  <script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.min.js"></script>
  <script>
   new Vue({
    el: ".vue"
   })
  </script>
 </body>
</html>
```

Lalu, kita mainkan routernya:

```javascript 
new Vue({
 el: ".vue",
 router: new VueRouter({
  routes: [
   {
    path: "/",
    component: beranda
   },
   {
    path: "/hello/:nama",
    component: hello
   }
  ]
 })
})
```

Jadinya:

```html 
<!DOCTYPE HTML>
<html>
 <head>
  <title>Contoh Vue Router</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
 </head>
 <body>
  <div class="vue">
   <router-view></router-view>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
  <script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.min.js"></script>
  <script>
   new Vue({
    el: ".vue",
    router: new VueRouter({
     routes: [
      {
       path: "/",
       component: beranda
      },
      {
       path: "/hello/:nama",
       component: hello
      }
     ]
    })
   })
  </script>
 </body>
</html>
```

Maksud dari kode di atas adalah ketika kita membuka link `/`, maka akan menampilkan component `beranda`. Dan jika kita membuka link `/hello/:nama` contohnya `/hello/Zen` maka akan menampilkan component `hello` dengan `Zen` sebagai parameter dari `nama`.

Lalu, di mana menampilkannya? Menampilkannya itu di `<router-view>` yang sudah kita buat tadi.

Nah, kita buat dulu deh component `beranda` sama `hello`.

Ini component `beranda`:

```html 
<template id="beranda">
 <div>
  <p>Ini beranda</p>
 </div>
</template>
<script>
 beranda = {
  template: "#beranda"
 }
</script>
```

Lalu, ini component `hello`:

```html 
<template id="hello">
 <div>
  <p>Hello {{ $route.params.nama }}</p>
 </div>
</template>
<script>
 hello = {
  template: "#hello"
 }
</script>
```

Maka, hasilnya menjadi seperti ini:

```html 
<!DOCTYPE HTML>
<html>
 <head>
  <title>Contoh Vue Router</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
 </head>
 <body>
  <div class="vue">
   <router-view></router-view>
  </div>
  <template id="beranda">
   <div>
    <p>Ini beranda</p>
   </div>
  </template>
  <script>
   beranda = {
    template: "#beranda"
   }
  </script>
  <template id="hello">
   <div>
    <p>Hello {{ $route.params.nama }}</p>
   </div>
  </template>
  <script>
   hello = {
    template: "#hello"
   }
  </script>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
  <script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.min.js"></script>
  <script>
   new Vue({
    el: ".vue",
    router: new VueRouter({
     routes: [
      {
       path: "/",
       component: beranda
      },
      {
       path: "/hello/:nama",
       component: hello
      }
     ]
    })
   })
  </script>
 </body>
</html>
```

Selesai!

Contoh jadinya seperti ini:

<https://mzaini30.js.org/vue-router/#/>

<iframe src="https://mzaini30.js.org/vue-router/#/"></iframe>

Kemudian, ketika menggunakan router `hello`:

<https://mzaini30.js.org/vue-router/#/hello/Zen>

<iframe src="https://mzaini30.js.org/vue-router/#/hello/Zen"></iframe>
