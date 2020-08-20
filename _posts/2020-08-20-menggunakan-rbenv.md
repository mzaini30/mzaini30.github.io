---
layout: post
title: Menggunakan rbenv
---

## Persiapan

Tulis di `~/.bashrc` di bagian akhir:

```bash
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"
```

## Install versi tertentu

```bash
rbenv install 1.7.1
```

## Membuat version yang telah dipilih menjadi global

```bash
rbenv global 1.9.2-p290
```
