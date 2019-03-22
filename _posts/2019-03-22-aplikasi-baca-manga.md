---
title: "Yuk, Kita Buat Aplikasi Baca Manga dengan Python dan Jekyll..."
layout: post
bahasa: Python
date: 2019-03-22 23:51:00 +0800
---

# Yang Diperlukan

- Firefox
- Jekyll
- Python3
- remark-latest.min.js

	Donwload aja di <http://remarkjs.com>.

# Tree

```
root/
- gambar 1.jpg
- gambar 2.jpg
- gambar n.jpg
- baca/
  - gambar/
  - baca.py
  - cache.txt
  - _config.yml
  - index.html
  - remark-latest.min.js
```

# Penjabaran Tree

`gambar 1.jpg` `gambar 2.jpg` dan seterusnya adalah gambar-gambar satu chapter manga yang sudah kamu download.

Untuk folder `gambar` biarkan kosong.

Isi dari `baca.py`:

```python
import os, random

perintah = [
	'rm gambar/*.jpg',
	'cd ..; find . -name "*.jpg" -exec cp {} baca/gambar ";"; cd baca',
	'cd ..; ls *.jpg > baca/cache.txt; cd baca'
]

for x in perintah:
	os.system(x)

data = open('cache.txt', 'r')
baca_data = data.read().splitlines()
data.close()

os.system('echo "gambar: " > _config.yml')
for x in baca_data:
	os.system('echo "  - ' + x + '" >> _config.yml')

acak = random.randint(1111, 9999)

os.system('firefox http://localhost:' + str(acak))
os.system('jekyll s --port=' + str(acak))
```

`cache.txt` biarkan kosong.

`_config.yml` kosong aja.

`index.html`:

```html
---
---

<!DOCTYPE html>
<html>
<head>
	<title>Baca Manga</title>
	<style>
		.remark-slide-content {
			background-position: center;
			background-size: contain;
		}
	</style>
</head>
<body>
	<textarea name="" id="source" cols="30" rows="10" style="display: none;">

	{% raw %}{% for x in site.gambar %}
		background-image: url(gambar/{{ x }})

		---
	{% endfor %}{% endraw %}

	</textarea>
	<script src="remark-latest.min.js"></script>
	<script>
		slideshow = remark.create()
	</script>
</body>
</html>
```

# Menjalankan

```bash
python3 baca.py
```