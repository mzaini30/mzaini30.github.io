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

function ambil_frekuensi_array(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return [a, b];
}

array_tag = JSON.parse(localStorage.getItem('tag'))
frekuensi = ambil_frekuensi_array(array_tag)

tag_descending = []
frekuensi_tag_descending = []

for (n2 = 1; n2 <= 4; n2++){
	tertinggi = 0
	urutan_tertinggi = 0
	for (n in frekuensi[1]){
		if (Number(frekuensi[1][n]) > tertinggi){
			tertinggi = Number(frekuensi[1][n])
			urutan_tertinggi = n
		}
	}
	tag_descending.push(frekuensi[0][n])
	delete frekuensi[0][n]
	frekuensi_tag_descending.push(frekuensi[1][n])
	delete frekuensi[1][n]
}

if (tag_descending.length == 4){
	jumlah = 0
	for (n in frekuensi_tag_descending){
		jumlah += frekuensi_tag_descending[n]
	}
	persen = []
	for (n in tag_descending){
		if(tag_descending[0] != 0){
			$('.tag' + (Number(n) + 1) + '_nama').html(tag_descending[n])	
			$('.tag' + (Number(n) + 1) + '_persen').html(Math.floor(frekuensi_tag_descending[n] * 100 / jumlah))
			$('.tag' + (Number(n) + 1)).css('width', frekuensi_tag_descending[n] * 100 / jumlah + '%')
		}
	}
}