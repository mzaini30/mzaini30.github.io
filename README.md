# Vue Starter 

## Usibg Vue Editor

Add in `~/.bashrc`:

```bash
export VUE_EDITOR=subl
```

## Place Vue Files and Markdown

In `src/pages/`.

## Place Static Files

In `public/`.

## Modify Base URL (for sitemap)

In `vite.config.js`, in section:

```javascript
const hostname = 'http://localhost:3000/'
```

## Markdown File Example with Head

```markdown
---
title: About
---

# This is about page

Good
```

## Link to Other Page

```html
<router-link to="/about">About page</router-link>
```

## Using Head in Vue Page

```html
<script setup="">
 import {Head} from '@vueuse/head'
</script>

<template>
 <Head>
  <title>Hi...</title>
 </Head>

 <p>This is home</p>
</template>
```
