# Auto Deploy Node JS

Jadi, kita nggak perlu menjalankan perintah `npm run build` lagi. Dia akan dideploy otomatis oleh Github. Caranya, buatlah file `.github/workflows/deploy.yml` yang berisi:

```yaml
name: Deploy

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

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: "14.x"

      - name: Cache dependencies Node
        uses: actions/cache@v1
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: ${{ runner.os }}-node-

      - name: Install
        run: npm i

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

`dist` di sini adalah folder hasil build. Jadi, kita atur folder `dist` itu disalin ke branch `gh-pages`. Nah, nanti tinggal atur aja di setting pages, supaya branch `gh-pages` sebagai halaman Github Pages.