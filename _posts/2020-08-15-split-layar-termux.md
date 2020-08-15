--- 
layout: post
title: Split layar Termux
--- 

Jadinya seperti ini:

![Tampilan tmux](https://i.ibb.co/9n3ZvCb/Screenshot-2020-08-15-05-39-53-74-84d3000e3f4017145260f7618db1d683.png)

## Instalasi

```bash
pkg install tmux 
```

## Cara menggunakan

Jalankan `tmux`

### Split atas bawah

`Ctrl` `b` `"`

### Split kanan kiri

`Ctrl` `b` `%`

### Berpindah screen aktif

Kalau di Android, tinggal klik aja screen yang mau diaktifkan. Tapi, kalau di desktop, tekan `Ctrl` `b` lalu arah panahnya.

## Menutup screen yang terbuka

```bash
exit
```

## Konfigurasi untuk tmux yang di PC

Buat di `~/.tmux.conf`:

```bash
# Make mouse useful in copy mode
setw -g mode-mouse on

# Allow mouse to select which pane to use
set -g mouse-select-pane on

# Allow xterm titles in terminal window, terminal scrolling with scrollbar, and setting overrides of C-Up, C-Down, C-Left, C-Right
set -g terminal-overrides "xterm*:XT:smcup@:rmcup@:kUP5=\eOA:kDN5=\eOB:kLFT5=\eOD:kRIT5=\eOC"

# Scroll History
set -g history-limit 30000

# Set ability to capture on start and restore on exit window data when running an application
setw -g alternate-screen on

# Lower escape timing from 500ms to 50ms for quicker response to scroll-buffer access.
set -s escape-time 50
```
