---
layout: post
title: Menjadikan tmux sebagai default shell
---

Edit file `bashrc` lalu di baris paling pertama, tambahkan script ini **di atasnya**:

```bash
[[ $TERM != "screen" ]] && exec tmux
```

## Lokasi bashrc

Kalau di Linux:

```
~/.bashrc
```

Kalau di Termux:

```bash
cd
cd ../usr/etc
nano bash.bashrc
```
