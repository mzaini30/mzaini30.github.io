--- 
layout: post
title: Vue Router history pada Github Pages
category: vue
--- 

Github pages berbeda dengan halaman website yang berbasis pada server seperti Apache dan Nginx. Kalau di server kan ada yang namanya URL rewriting. Jadinya, `situs.com/postingan` sama artinya dengan `situs.com/index.php/postingan`. Lalu, bagaimana dengan yang nggak memiliki fitur URL rewriting yaitu pada Github Pages yang menggunakan Jekyll?

Pertama, kita buat logika kayak gini. Saat kita membuka `situs.com/postingan`, kan nggak ada tuh. Berarti kan 404 not found. Maka, kita buat deh halaman `404.html` dengan logika bahwa `situs.com/postingan` yang not found akan dialihkan ke `situs.com/#/postingan`:

```html
<script>
 link = location.href.replace("situs.com", "situs.com/#")
 location.href = link
</script>
```

Lalu, kita atur routernya dengan logika bahwa setiap yang `situs.com/#/postingan` akan dialihkan ke `situs.com/postingan`.

```javascript
router = new VueRouter({
 mode: "history",
 routes: [...]
})
router.beforeEach((to, from, next) => {
    // Redirect if fullPath begins with a hash (ignore hashes later in path)
    if (to.fullPath.substr(0,2) === "/#") {
        const path = to.fullPath.substr(2);
        next(path);
        return;
    }
    next();
});
new Vue({
 el: ".vue",
 router
})
```

## Cara lainnya

Salah satu caranya adalah tetap menggunakan mode `history` lalu isi dari `index.html` dan `404.html` disamakan. Misalnya:

`_includes/index.html`

Berisi halaman front end yang akan kita tampilkan.

`index.html` dan `404.html`

```liquid
--- 
--- 

{% raw %}{% include index.html %}{% endraw %}
```
