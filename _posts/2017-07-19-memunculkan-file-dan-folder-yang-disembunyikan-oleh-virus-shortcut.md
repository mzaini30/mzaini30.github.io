---
layout: post
title: "Memunculkan File dan Folder yang Disembunyikan oleh Virus Shortcut"
date: 2017-07-19 11:05:47
gambar: "http://qph.ec.quoracdn.net/main-qimg-330d45b24b0885a1e4330794b8f65a25-c"
categories: artikel
tags: [windows, shortcut, virus]
---

1. Buka folder yang seharusnya ada isinya
2. Pencet `Shift` + `klik kanan` lalu pilih `Open Command Window Here`
3. Ketikkan

    ```bash
    attrib -s -h /s /d
    ```
