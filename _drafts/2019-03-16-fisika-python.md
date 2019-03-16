---
title: "Menyelesaikan Persoalan Matematika dan Fisika dengan Python"
layout: post
bahasa: Python
---

# Luas Lingkaran

```python
import math

while True:
	jari_jari = int(raw_input('Masukkan panjang jari-jari: '))
	hitung = math.pi * jari_jari**2
	print 'Luas lingkaran = ' + str(hitung)
	print
```

# Luas Segitiga

```python
while True:
	alas = int(raw_input('Berapa panjang alas: '))
	tinggi = int(raw_input('Berapa panjang tinggi: '))
	hitung = alas * tinggi / 2
	print 'Luas segitiga adalah '+ str(hitung) + ' cm^2'
	print
```

# Keliling Lingkaran

```python
import math

while True:
	diameter = int(raw_input('Masukkan panjang diameter: '))
	hitung = math.pi * diameter
	print 'Keliling lingkaran = ' + str(hitung)
	print
```

# Gaya

```python
while True:
	massa = int(raw_input('Berapa massa benda: '))
	percepatan = int(raw_input('Berapa percepatan benda: '))
	hitung = massa * percepatan
	print 'Gaya benda sebesar ' + str(hitung) + ' Newton'
	print
```