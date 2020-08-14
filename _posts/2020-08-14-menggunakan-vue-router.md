--- 
layout: post
title: Menggunakan Vue Router
--- 

Vue Router adalah plugin Vue yang memungkinkan kita untuk mengatur router dari frontend yang kita buat. Misalnya aja link seperti di bawah ini:

- situs.com/#/
- situs.com/#/tanya
- situs.com/#/artikel
- situs.com/#/detail/hello-world

Atau, jika tidak menggunakan hash (#):

- situs.com/
- situs.com/tanya
- situs.com/artikel
- situs.com/detail/hello-world

Tau nggak, kalau itu semua hanyalah satu halaman `index.html`? Nah, itu semua kita atur routernya di Vue Router.

Pertama, kita buat dulu dasar dari Vue:

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

Kemudian, kita tambahkan CDN dari Vue Router:

```html
<script src='https://unpkg.com/vue-router/dist/vue-router.js'></script>
```

Lalu, kita tentukan lokasi untuk menampilkan halaman hasil routernya dengan `<router-view></router-view>`.

Maka, script HTMLnya menjadi:

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
  <router-view></router-view>
 </div>
 <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
 <script src='https://unpkg.com/vue-router/dist/vue-router.js'></script>
 <script type="text/javascript">
  new Vue({
   el: '.vue'
  })
 </script>
</body>
</html>
```

Nah, sekarang kita buat router untuk beranda. Yaitu yang letaknya di `/`:

```html
<template id="beranda">
 <div>
  <p>Ini beranda</p>
 </div>
</template>
<script type="text/javascript">
 beranda = {
  template: '#beranda'
 }
</script>
```

Lalu, kita register `/` untuk memanggil `beranda`:

```javascript
{
 path: '/',
 component: beranda
}
```

Maka, script HTMLnya menjadi seperti ini:

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
  <router-view></router-view>
 </div>
 <template id="beranda">
  <div>
   <p>Ini beranda</p>
  </div>
 </template>
 <script type="text/javascript">
  beranda = {
   template: '#beranda'
  }
 </script>
 <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
 <script src='https://unpkg.com/vue-router/dist/vue-router.js'></script>
 <script type="text/javascript">
  new Vue({
   el: '.vue',
   router: new VueRouter({
    routes: [
     {
      path: '/',
      component: beranda
     }
    ]
   })
  })
 </script>
</body>
</html>
```

Maka, ketika kita membuka `situs.com/#/`, akan menampilkan `Ini beranda`.

Lalu, kita buat juga nih `situs.com/#/halo/nama` yang akan menampilkan pesan `Halo nama`:

```html
<template id="halo">
 <div>
  <p>Halo {% raw %}{{ $route.params.nama }}{% endraw %}</p>
 </div>
</template>
<script type="text/javascript">
 halo = {
  template: '#halo'
 }
</script>
```

Lalu, kita atur routernya:

```javascript
{
 path: '/halo/:nama',
 component: halo
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
  <router-view></router-view>
 </div>
 <template id="beranda">
  <div>
   <p>Ini beranda</p>
  </div>
 </template>
 <script type="text/javascript">
  beranda = {
   template: '#beranda'
  }
 </script>
 <template id="halo">
  <div>
   <p>Halo {% raw %}{{ $route.params.nama }}{% endraw %}</p>
  </div>
 </template>
 <script type="text/javascript">
  halo = {
   template: '#halo'
  }
 </script>
 <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
 <script src='https://unpkg.com/vue-router/dist/vue-router.js'></script>
 <script type="text/javascript">
  new Vue({
   el: '.vue',
   router: new VueRouter({
    routes: [
     {
      path: '/',
      component: beranda
     },
     {
      path: '/halo/:nama',
      component: halo
     }
    ]
   })
  })
 </script>
</body>
</html>
```

Oh iya, di situ kan kita pakai mustache `{% raw %}{{ }}{% endraw %}` untuk bind data di Vue. Tapi kan, kadang bentrok sama tools frontend lainnya. Misalnya aja dengan Jekyll. Maka, kita akan ubah menjadi `<< >>`:

```javascript
delimiters: ['<<', '>>']
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
  <router-view></router-view>
 </div>
 <template id="beranda">
  <div>
   <p>Ini beranda</p>
  </div>
 </template>
 <script type="text/javascript">
  beranda = {
   template: '#beranda'
  }
 </script>
 <template id="halo">
  <div>
   <p>Halo << $route.params.nama >></p>
  </div>
 </template>
 <script type="text/javascript">
  halo = {
   template: '#halo'
  }
 </script>
 <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
 <script src='https://unpkg.com/vue-router/dist/vue-router.js'></script>
 <script type="text/javascript">
  new Vue({
   el: '.vue',
   delimiters: ['<<', '>>'],
   router: new VueRouter({
    routes: [
     {
      path: '/',
      component: beranda
     },
     {
      path: '/halo/:nama',
      component: halo
     }
    ]
   })
  })
 </script>
</body>
</html>
```

Oh iya, delimiters ini untuk di dalam component aja. Jadi, kalau diakses di luar component itu, harus dipanggil lagi delimitersnya.

Nah, sekarang kita punya dua router:

- situs.com/#/
- situs.com/#/halo/Zen

Sekarang, kita coba menghilangkan hashnya. Maka, kita buat mode history. Jadinya:

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
  <router-view></router-view>
 </div>
 <template id="beranda">
  <div>
   <p>Ini beranda</p>
  </div>
 </template>
 <script type="text/javascript">
  beranda = {
   template: '#beranda'
  }
 </script>
 <template id="halo">
  <div>
   <p>Halo << $route.params.nama >></p>
  </div>
 </template>
 <script type="text/javascript">
  halo = {
   template: '#halo'
  }
 </script>
 <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
 <script src='https://unpkg.com/vue-router/dist/vue-router.js'></script>
 <script type="text/javascript">
  new Vue({
   el: '.vue',
   delimiters: ['<<', '>>'],
   router: new VueRouter({
    mode: 'history',
    routes: [
     {
      path: '/',
      component: beranda
     },
     {
      path: '/halo/:nama',
      component: halo
     }
    ]
   })
  })
 </script>
</body>
</html>
```

Sekarang, routernya jadi:

- situs.com/
- situs.com/halo/Zen

Kalau untuk mode history ini, harus disetting dulu supaya kalau pas direfresh, dia nggak hilang (404) halamannya.

## Apache

```html
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Nginx

```javascript
location / {
  try_files $uri $uri/ /index.html;
}
```

## Node JS

```javascript
const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {
  fs.readFile('index.html', 'utf-8', (err, content) => {
    if (err) {
      console.log('We cannot open "index.html" file.')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
}).listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort)
})
```

## Jekyll

`_includes/index.html` isinya adalah file index frontendmu.

`index.html` dan `404.html`:

```html
---
---

{% raw %}{% include index.html %}{% endraw %}
```