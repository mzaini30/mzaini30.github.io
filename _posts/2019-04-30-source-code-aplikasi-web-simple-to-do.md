---
layout: post
title: Source Code Aplikasi Web Simple To Do
---

# Struktur File dan Folder

```
.
├── app
│   ├── app - backup.js
│   ├── app.js
│   ├── style - backup.css
│   └── style.css
├── index.html
└── vendor
    ├── bootstrap
    │   ├── css
    │   │   ├── bootstrap.css
    │   │   ├── bootstrap.css.map
    │   │   ├── bootstrap.min.css
    │   │   ├── bootstrap.min.css.map
    │   │   ├── bootstrap-theme.css
    │   │   ├── bootstrap-theme.css.map
    │   │   ├── bootstrap-theme.min.css
    │   │   └── bootstrap-theme.min.css.map
    │   ├── fonts
    │   │   ├── glyphicons-halflings-regular.eot
    │   │   ├── glyphicons-halflings-regular.svg
    │   │   ├── glyphicons-halflings-regular.ttf
    │   │   ├── glyphicons-halflings-regular.woff
    │   │   └── glyphicons-halflings-regular.woff2
    │   └── js
    │       ├── bootstrap.js
    │       ├── bootstrap.min.js
    │       └── npm.js
    └── jquery
        └── jquery.min.js

7 directories, 22 files
```

# index.html

```html
<!DOCTYPE html>
<html>
<head>
	<title>To Do</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="app/style.css">
</head>
<body>

	<div class="navbar navbar-default navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			    </button>
				<a href="#!" class="navbar-brand top">To Do</a>
			</div>
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul class="nav navbar-nav">
		      	<li><a href="https://api.whatsapp.com/send?phone=6281545143654&text=">Chat Me</a></li>
		        <li><a href="https://play.google.com/store/apps/dev?id=6751907367958089476">Other Apps</a></li>
		        <li><a href="https://play.google.com/store/apps/details?id=com.mzaini30.simpletodo">Review</a></li>
		      </ul>
		    </div>
		</div>
	</div>

	<div class="container">
		<div class="progress">
			<div class="progress-bar progress-bar-success progress-level" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
		</div>
		<div class="progress">
			<div class="progress-bar progress-complete" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
		</div>
		<div class="alert alert-success" role="alert">0% Complete / Level 0</div>
		<table class="table list-canvas">
			<!-- <tr>
				<td class="cek-container"><div class="btn btn-default cek">&check;</div></td>
				<td><div class="isi">aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa </div></td>
				<td class="hapus-container"><div class="btn btn-danger hapus">&times;</div></td>
			</tr> -->
		</table>
		<form action="" class="tambah-baru">
			<div class="form-group"><input type="text" class="form-control input-data" placeholder="New To Do?"></div>
		</form>
	</div>

	<script type="text/javascript" src="vendor/jquery/jquery.min.js"></script>
	<script type="text/javascript" src="vendor/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="app/app.js"></script>
</body>
</html>
```

# app/app.js

```javascript
if (localStorage.getItem('level') === null){
	level = 0
} else {
	level = parseInt(localStorage.getItem('level'))
}

$('.navbar-nav a').click(function(){
	$('.navbar-toggle').click()
})

// inisialisasi bulan ini

tanggalan = new Date()
bulan = tanggalan.getMonth()
bulan++
bulan2 = bulan++

list_bulan = ['Januari', 'Februari', 'Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']

hari_ini = tanggalan.getDate() + ' ' + list_bulan[tanggalan.getMonth()]
$('.navbar-brand').html(hari_ini)

update_persen = function(){
	sudah_selesai = $('.cek-oke').length
	sudah_selesai_aktif = $('.cek-oke.aktif').length
	semua = $('.cek.aktif').length
	if (semua > 0){
		persen_selesai = Math.round(sudah_selesai_aktif / semua * 100)	
	} else {
		persen_selesai = 0
	}
	// if (sudah_selesai > level){
	// 	level++
	// }
	level = sudah_selesai
	localStorage.setItem('level', level)
	// console.log(level)
	// console.log(sudah_selesai)
	level_bagi_sepuluh = Math.floor(level / 10)
	// console.log(level_bagi_sepuluh)
	$('.progress-level').attr('aria-valuenow', level_bagi_sepuluh).css('width', level_bagi_sepuluh + '%')
	$('.progress-complete').attr('aria-valuenow', persen_selesai).css('width', persen_selesai + '%')
	$('.alert-success').html(persen_selesai + '% Complete / Level ' + level_bagi_sepuluh)
	$('.aktif').parent().parent().first().find('td').css('border-top', 'none')
}

$('.list-canvas').html(localStorage.getItem('simple to do'))
update_persen()

$('.top').click(function(){
	atas()
})

$('.tambah-baru').submit(function(){
	event.preventDefault()
	item = $('.input-data').val()
	if (item){
		$('.list-canvas').append('<tr><td class="cek-container"><div class="btn btn-default cek aktif">&check;</div></td><td><div class="isi">' + item + '</div></td><td class="hapus-container"><div class="btn btn-danger hapus">&times;</div></td></tr>')
		localStorage.setItem('simple to do', $('.list-canvas').html())
		update_persen()
		$('.input-data').val('')
	}
})

$(document).on('click', '.cek', function(){
	$(this).toggleClass('btn-default').toggleClass('btn-success').toggleClass('cek-oke')
	$(this).parent().parent().find('.isi').toggleClass('selesai')
	localStorage.setItem('simple to do', $('.list-canvas').html())
	update_persen()
})

$(document).on('click', '.hapus', function(){
	// $(this).parent().parent().remove()
	$(this).parent().parent().find('.cek').removeClass('aktif')
	$(this).parent().parent().hide()
	localStorage.setItem('simple to do', $('.list-canvas').html())
	update_persen()
})
```

# app/style.css

```css
body {
  padding-top: 70px !important;
}

table tr:first-child td {
	border-top: none;
}

.isi {
	font-weight: bold;
}
.selesai {
	text-decoration: line-through;
	font-style: italic;
	font-weight: normal;
}

.cek-container {
	width: 52.8px;
}
.hapus-container {
	width: 50.4px;
}
```