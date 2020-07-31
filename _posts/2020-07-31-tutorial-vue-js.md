--- 
layout: post
title: Tutorial Vue JS
--- 

## Apa sih Vue JS itu?

Vue JS adalah salah satu dari tiga framework/library populer untuk mengolah UI (Vue/React/Angular). Sebenarnya sih ada juga Svelte yang mulai populer untuk mengolah UI karena paradigmanya yang berbeda. Kalau di framework JS populer kan, dia menginclude dulu framework/library JSnya baru kemudian menjalankan API framework/librarynya. Kalau Svelte, dia mengolah APInya menjadi kode Javascript murni. Kadi, istilahnya itu mentranspile menjadi kode Javascript murni. Kayak Typescript jadi Javascript gitu metodenya.

## Vue CLI apa versi browser?

Untuk yang versi CLI, tentu saja kamu harus menginstall Node JS terlebih dahulu. Kalau versi browser, cukup `script src` aja file `vue.js` atau `vue.min.js`.

## Apa aja plugin yang sering dipakai di Vue?

Plugin yang biasa dipakai di Vue itu adalah Vue Router dan Vuex. Vue Router digunakan untuk mengatur router semua halaman website. Sedangkan Vuex digunakan untuk manajemen state (memori sementara).

## Instalasi Vue JS 

Untuk instalasi Vue JS, sesederhana ini:

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

Lalu, kalau ingin menggunakan Vue Router dan Vuex:

```html
<script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.js"></script>
<script src="https://unpkg.com/vuex@2.0.0"></script>
```

## Menggunakan Vue Router 

Berikut ini adalah contoh implementasi Vue Router:

```html
<div class="vue">
 <router-view></router-view>
</div>

<template id="beranda">
 <div>
  <p>Ini adalah halaman beranda.</p>
 </div>
</template>
<script>
 beranda = {
  template: "#beranda"
 }
</script>

<template id="halo">
 <div>
  <p>Halo {% raw %}{{ $route.params.nama }}{% endraw %}</p>
 </div>
</template>
<script>
 halo = {
  template: "#halo"
 }
</script>

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
     path: "/halo/:nama",
     component: halo
    }
   ]
  })
 })
</script>
```