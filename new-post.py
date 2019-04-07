import datetime, os

judul = input('Masukkan judul postingan: ')
# print(judul.lower())

sekarang = datetime.datetime.now()
# print(sekarang.strftime('%Y-%m-%d %H:%M:%S'))

karakter_terlarang = ['\\', '/', ':', '*', '?', '"', '\'', '<', '>', '|', '!']

# INI BAGIAN JUDUL

judul_kecil = judul.lower().replace(' ', '-')
for x in karakter_terlarang:
	judul_kecil = judul_kecil.replace(x, '')
# print(judul_kecil)
tanggal_untuk_judul = sekarang.strftime('%Y-%m-%d-')
# print(tanggal_untuk_judul)
judul_sekarang = tanggal_untuk_judul + judul_kecil + '.md'
# print(judul_sekarang)

# INI BAGIAN ISI

judul_baru = str(judul)
# judul_baru = judul_baru.replace('"', '\\\\\"')
# judul_baru = '"' + judul_baru + '"'
# judul_baru = judul_baru.replace('"', '')
# judul_baru = "\'" + judul_baru + "'"
# judul_baru = judul_baru.replace("'", '"')
# print(judul_baru)

perintah = [
	'cd _drafts',
	'touch ' + judul_sekarang,
	'echo --- > ' + judul_sekarang,
	'echo layout: post >> ' + judul_sekarang,
	'echo "title: ' + judul_baru + '" >> ' + judul_sekarang,
	'echo --- >> ' + judul_sekarang
]

perintah_string = ''
for x in perintah:
	perintah_string += x + ';'
os.system(perintah_string)