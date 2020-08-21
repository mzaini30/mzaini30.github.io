--- 
layout: post
title: Menggunakan Github untuk menyimpan file
category: github 
--- 

## Config

```bash 
git config --global user.name usernya
git config --global user.email emailnya
```

## Clone

```bash
git clone --depth=1 https://user:pass@github.com/user/repo
```

## Update local dari Github 

```bash 
git pull 
```

## Upload

```bash
git status
git add -A .
git commit -m "oke"
git push 
```