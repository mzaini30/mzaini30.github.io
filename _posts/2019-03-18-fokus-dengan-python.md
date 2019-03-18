---
title: 'Python: Membuat Aplikasi yang Membuat Kita Fokus...'
layout: post
bahasa: Python
---

1. Buat file `fokus.py` berisi:

	```python
	import time

	data_baca = open('data fokus.txt', 'r')
	data_tertinggi = data_baca.read()
	data_baca.close()

	detik = 0

	while True:
		time.sleep(1)
		detik += 1

		if detik <= int(data_tertinggi):
			print(str(detik) + ' - belum')
		else:
			print(detik)

			data_tulis = open('data fokus.txt', 'w')
			data_tulis.write(str(detik))
			data_tulis.close()
	```

2. Buat file `data fokus.txt` berisi angka 0
3. Jalankan `fokus.py` dengan `python3 fokus.py`