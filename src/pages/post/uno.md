# Cara Menggunakan Uno CSS

Kenapa Uno CSS? Karena dia cepat. Bisa dilihat dari hasil benchmark berikut:

```
3/26/2022, 11:41:26 PM
1656 utilities | x50 runs (min build time)

none                             12.42 ms / delta.      0.00 ms
unocss       v0.30.6             20.98 ms / delta.      8.57 ms (x1.00)
tailwindcss  v3.0.23           1621.38 ms / delta.   1608.96 ms (x187.79)
windicss     v3.5.1            1855.86 ms / delta.   1843.45 ms (x215.16)
```

Jadi, dia itu 200 kali lebih cepat daripada Tailwind dan Windi.

Yuk kita coba.

Pertama, kita install dulu create-vite:

```bash
npm i -g create-vite
```

Kalau sudah, kita buat project dengan mengetikkan perintah:

```bash
create-vite
```

Kemudian ada pertanyaan `project name`. Di sini, aku isi dengan `latihan-uno`.

Lalu, ada pertanyaan `select a framework`. Di sini, aku pilih `vue`.

Kemudian, `select a variant`, aku pilih `vue`.

Kemudian, jalankan:

```bash
cd latihan-uno
npm i
```

Terus, buka folder tersebut di Sublime atau VS Code.

Lalu, kita install Uno CSS dengan perintah:

```bash
npm i unocss @unocss/reset @unocss/transformer-directives
```

Pada `vite.config.js` diisi seperti ini:

```diff
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
+ import unocss from 'unocss/vite'
+ import transformerDirective from '@unocss/transformer-directives'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
+    unocss({
+      transformers: [
+        transformerDirective()
+      ]
+    })
  ]
})
```

Lalu, pada `src/main.js`:

```diff
import { createApp } from 'vue'
import App from './App.vue'
+ import '@unocss/reset/tailwind.css'
+ import 'uno.css'

createApp(App).mount('#app')
```

Lalu kita jalankan mode dev:

```bash
npm run dev
```

Sekarang kita coba fiturnya Uno CSS. Sintaksnya sih sama seperti Tailwind. Contohnya aja pada `src/App.vue` kita buat seperti ini:

```html
<template>
  <div class="p-5">
    <h1 class="text-3xl mb-2">Ini Judul</h1>
    <p>Ini adalah isinya</p>
  </div>
</template>

<style scoped="">
  p {
    @apply text-green-500
  }
</style>
```