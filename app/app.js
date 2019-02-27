---
---

// $('.modal_view').click()

foto_profil = 'https://avatars0.githubusercontent.com/u/7939342?s=460&v=4'
nama = 'Zen'
bio = 'developer Nulis Aja Community | layouter Sanggar Caraka | co-owner Toko Sepeda Sinar Jaya | mahasiswa Psikologi | mantan wakil ketua Himpunan Mahasiswa Psikologi | mantan Badan Informasi dan Komunikasi Ikatan Lembaga Mahasiswa Psikologi Indonesia'

if (localStorage.getItem('foto_profil') == null){
	localStorage.setItem('foto_profil', foto_profil)
	localStorage.setItem('nama', nama)
	localStorage.setItem('bio', bio)
}

tampil_biodata = function(){
	$('.tampil_foto_profil').attr('src', localStorage.getItem('foto_profil'))
	$('.tampil_nama').html(localStorage.getItem('nama'))
	$('.tampil_bio').html(localStorage.getItem('bio'))
}

tampil_biodata()

$('.foto_profil').val(localStorage.getItem('foto_profil'))
$('.nama').val(localStorage.getItem('nama'))
$('.bio').val(localStorage.getItem('bio'))

$('.simpan').click(function(){
	localStorage.setItem('foto_profil', $('.foto_profil').val())
	localStorage.setItem('nama', $('.nama').val())
	localStorage.setItem('bio', $('.bio').val())

	tampil_biodata()
	$('.tutup_modal').click()
})

if (localStorage.getItem('judul') == null){
	localStorage.setItem('judul', '[0]')
	localStorage.setItem('tag', '[0]')
}
if (judul != 'beranda'){
	ambil_judul = JSON.parse(localStorage.getItem('judul'))
	ambil_tag = JSON.parse(localStorage.getItem('tag'))

	ada = false
	for (n in ambil_judul){
		if (ambil_judul[n] == judul){
			ada = true	
		}
		if (ambil_judul[n] == 0){
			ambil_judul.shift()
			ambil_tag.shift()
		}
	}
	if (ada == false){
		ambil_judul.push(judul)
		ambil_tag.push(tag)
	}

	localStorage.setItem('judul', JSON.stringify(ambil_judul))
	localStorage.setItem('tag', JSON.stringify(ambil_tag))
}

telah_dibaca = JSON.parse(localStorage.getItem('judul')).length
jumlah_semua_postingan = '{{ site.posts | size }}'
jumlah_semua_postingan = Number(jumlah_semua_postingan)

if (telah_dibaca > 0){
	$('.sudah_dibaca').html(telah_dibaca)

	persenan = telah_dibaca * 100 / jumlah_semua_postingan
	$('.progress_dibaca').css('width', persenan + '%')
}