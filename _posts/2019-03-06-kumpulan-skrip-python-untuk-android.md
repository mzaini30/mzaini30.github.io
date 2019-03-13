---
tag: pemrograman
layout: post
bahasa: Python
---

APK yang kugunakan di sini adalah QPython3. Bisa didownload dari Play Store.

# Bicara

```python
import androidhelper

droid = androidhelper.Android()

while True:
	bicara = input('Masukkan kalimat yang ingin diucapkan: ')
	droid.ttsSpeak(bicara)
```

# Jumlah Satuan

```python
while True:
	angka = input('Masukkan angka: ')
	cacah = list(angka)
	total = 0
	for x in cacah:
		total += int(x)
	print(total)
```

# Tambah 25 Ribu

```python
while True:
	modal = input('Masukkan harga modal')
	hitung = int(modal) + 25
	print(hitung)
```