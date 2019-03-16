---
title: "Terkuak!!! Berapakah Hasil dari Angka Berapapun Jika Dibagi dengan Nol? Ini Kata Python dan Kawan-Kawan..."
layout: post
bahasa: Python
---

# Python

```python
while True:
	angka_dibagi = raw_input('Masukkan angka yang mau dibagi: ')
	hitung = int(angka_dibagi) / 0
	print angka_dibagi + ' / 0 = ' + hitung
```

Hasilnya:

```
Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
ZeroDivisionError: integer division or modulo by zero
```

# Python3

```python
while True:
	angka_dibagi = input('Masukkan angka yang mau dibagi: ')
	hitung = int(angka_dibagi) / 0
	print(angka_dibagi + ' / 0 = ' + hitung)
```

Hasilnya:

```
Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
ZeroDivisionError: division by zero
```

# Javascript

```javascript
angka_dibagi = 34
hitung = angka_dibagi / 0
console.log(angka_dibagi + ' / 0 = ' + hitung)
```

Hasilnya:

```
34 / 0 = Infinity
```

# Jekyll

```plaintext
{% raw %}{{ 3 | modulo: 0 }}{% endraw %}
```

Hasilnya:

```
Liquid Exception: Liquid error (line 1): divided by 0 in index.html
		   Error: Liquid error (line 1): divided by 0
		   Error: Run jekyll build --trace for more information.
```

# Excel

```
= 34 / 0
```

Hasilnya:

```
#DIV/0!
```