// jika nggak ada skill, buat

if (localStorage.getItem('skill') == null){
	localStorage.setItem('skill', '[]')
}