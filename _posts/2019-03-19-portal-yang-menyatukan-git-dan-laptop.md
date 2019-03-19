---
title: "Ini Loh Portal yang Menyatukan Antara Git dan Laptop!!!"
layout: post
bahasa: Git
---

Udah tau Git? Jadi Git itu istilahnya macam kita backup data di internet. Tapi biasanya sih dipakai oleh programmer karena kerumitannya dalam download dan upload data.

Misalnya aja untuk download data:

```bash
git clone --depth=1 https://username:password@github.com/username/repo.git
```

Terus kalau untuk upload data:

```bash
git status
git add -A .
git commit -m "message"
git push
```

Sebelum download dan upload data, kita setting dulu Git-nya:

```bash
git config --global user.name username
git config --global user.email email@gmail.com
```

Ribet? Ya begitulah. Tapi aku suka dan sudah lama menggunakannya untuk backup data-data kampus.

# Gimana Kisahnya Kalau Ganti Nama Folder?

Ya, ganti aja. Loh, kok gitu?

Ya, soalnya mah, kamu mau ganti nama folder juga nggak ngefek.

Terus gimana kisahnya kalau kita mau ubah lokasi Git-nya?

Oke, misalnya aja kita punya folder seperti ini:

```
kampus (ini koneksi ke Git)
_psikologi
_kimia
_matematika

film
_dr strange
_minion
```

Terus mau kamu ubah Git-nya supaya koneksi dengan `_psikologi` aja. Nah, gimana tuh?

Oh iya, pada struktur folder di atas, ada yang lupa satu; yaitu ada satu folder yang menghubungkan antara data-data di laptop dengan data-data di Git, yaitu folder `.git`. Tapi folder itu ter-hidden ya, jadi harus kita sibakkan dulu tirainya. Hehehehe.

```
kampus
_.git
_psikologi
_kimia
_matematika

film
_dr strange
_minion
```

Nah, sekarang tinggal pindahkan aja folder `.git` ke dalam folder `_psikologi`:

```
kampus
_psikologi
__.git
_kimia
_matematika

film
_dr strange
_minion
```

Terus masuk ke folder `_psikologi` lalu upload deh:

```bash
cd psikologi
git add -A .
git commit -m "ubah lokasi"
git push
```