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