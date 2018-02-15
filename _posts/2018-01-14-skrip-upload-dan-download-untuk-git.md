---
layout: post
categories: pemrograman
title: "Skrip Download dan Upload Ketika Menggunakan Git"
tags: [git, skrip, bash, batch]
date: 2018-01-14 08:54:00
gambar: https://alsw.files.wordpress.com/2013/06/video_tutorial_git_anime.jpg
---

# Persiapan

```bash
git config --global user.name username
git config --global user.email email
```

# Linux

## Download

```bash
git clone --depth=1 https://user:pass@gitlab.com/user/$1.git
mv $1 "$1 (git)"
```

## Upload

```bash
while true
	do
		git status
		git add -A .
		git commit -m "oke"
		git push
		sleep 3m
	done
```

# Windows

## Download

```shell
@echo off
title Download dari Gitlab

set /p repo="Sebutkan nama repositori Gitlab: "

git clone --depth=1 https://user:pass@gitlab.com/user/%repo%.git
rename %repo% "%repo% (git)"
pause
```

## Upload

```shell
@echo off
title Upload

:app
git status
git add -A .
git commit -m "oke"
git push

timeout /t 180 /nobreak
goto app
```