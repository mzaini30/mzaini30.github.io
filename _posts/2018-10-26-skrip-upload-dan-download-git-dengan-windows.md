---
layout: post
title:  "Skrip Upload dan Download Gitlab/Github (pokoknya git) dengan Windows"
date:   2018-10-26 16:25:38 +0800
category: pemrograman
---

Dalam kasus ini, kugunakan Gitlab. Monggo nanti disesuaikan aja.

# Download (gitlab.bat)

{% include iklan.html %}

```bash
@echo off

set /p repo=Masukkan nama repositori: 

git clone --depth=1 https://username:password@gitlab.com/username/%repo%.git

exit
```

# Upload (upload.bat)

{% include iklan.html %}

```bash
@echo off

set /p commit=Masukkan pesan commit: 

git status
git add -A .
git commit -m "%commit%"
git push
```