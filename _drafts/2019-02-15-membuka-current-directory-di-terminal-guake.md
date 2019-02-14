---
image:
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

```bash
guake --show --new-tab="%f" --execute-command="cd %f"
```