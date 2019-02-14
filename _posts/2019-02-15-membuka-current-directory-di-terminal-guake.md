---
image: https://instagram.fupg2-1.fna.fbcdn.net/vp/2240f877f781f3b6cd26517df19ec0d9/5CE6775A/t51.2885-15/e35/51573447_1866022750174380_5878546579872551077_n.jpg?_nc_ht=instagram.fupg2-1.fna.fbcdn.net&_nc_cat=100
layout: post
---

Apa itu Terminal? Terminal itu sederhananya ya macam Command Prompt di Windows, cuma ini di Linux. Itu aja sih. Perbedaannya mungkin pada bahasa pemrograman yang digunakan. Kalau di Command Prompt, pakainya Windows Batch. Kalau di Linux, pakainya Bash. Nah, di tutorial ini, aku akan memberi tahu bagaimana caranya membuka Terminal pada direktori saat ini:

# Install Guake

1. Install `Guake`:

	```bash
	sudo apt install guake
	```

2. Setting Guake supaya jalan otomatis saat _startup_:

	1. Pencet `Windows`
	2. Ketik `Session and Startup`
	3. Pada `Application Autostart`, klik `Add`
	4. Pada isian `Name`, ketik `Guake`. Pada isian `Command`, ketik `guake`
	5. Klik `OK`

# Menambahkan Menu Guake Pada Klik Kanan Folder

1. Pada Thunar (file managernya Linux Lite), pilih `Edit` lalu `Configure custom actions...`

2. Pada bagian `Open Terminal Here`, edit

3. Lalu pada bagian `Command`, isilah dengan skrip di bawah ini:

	```bash
	guake --show --new-tab="%f" --execute-command="cd %f"
	```

4. Klik `OK`

# Cara Supaya Pencet F4 Langsung Kebuka Terminal

1. Buka `Settings Manager`
2. Pilih `Appearance` lalu `Settings`. Pada bagian `Enable editable accelerators`, jadikan `enable`
3. Buka Thunar
4. Pilih salah satu folder
5. Lalu pilih `File`, pada bagian `Open Terminal Here`, klik `F4`