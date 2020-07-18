--- 
layout: post
title: Cara deploy Hugo di Github
tag: script
gambar: https://image.freepik.com/free-photo/portrait-pretty-casual-woman-showing-blank-screen-laptop-computer-while-sitting-floor-isolated-white-wall_231208-2743.jpg
--- 

Buat Github Action lalu masukkan kode berikut:

```yaml
name: deploy hugo

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
        with:
          submodules: true

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.62.2'
          # extended: true

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```
