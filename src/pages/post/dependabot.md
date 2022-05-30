# Menjaga Dependencies Repositori Tetap Update

Dependencies adalah paket-paket eksternal yang kita gunakan saat membangun aplikasi. Nah, biasanya ada bug-bug pada dependencies yang kita gunakan. Supaya kita senantiasa dapat update release dependencies yang kita gunakan, kita pakai `dependabot`.

Caranya, buat file `.github/dependabot.yml` yang isinya:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"
```

Itu dia akan watch semua paket Node JS (npm) dan Github Actions yang kita gunakan. Tapi, jika kita hanya menggunakan npm pada repositori kita, yang bagian Github Actions dihapus aja.