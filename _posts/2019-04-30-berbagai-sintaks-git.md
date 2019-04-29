---
layout: post
title: Berbagai Sintaks Git
---

# Cek Perubahan Terbaru pada Repositori

```bash
git pull
```

# Upload

```bash
git status
git add -A .
git commit -m "Menambahkan titik koma"
git push
```

## Penjelasan Sintaks

- `git status` digunakan untuk mengecek file-file dan folder-folder apa aja yang mengalami perubahan
- `git add -A .` berarti menambahkan semua file dan folder _yang telah mengalami perubahan_ ke dalam `cache`
- `git commit -m "Menambahkan titik koma"` berarti membuat `commit` dengan komentar _Menambahkan titik koma_
- `git push` upload ke Github maupun Gitlab, sesuai dengan letak repositorimu di internet