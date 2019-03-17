// ambil skill

skill_sekarang = JSON.parse(localStorage.getItem('skill'))

function grup_frekuensi(arr) {
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

skill_sekarang_grup = grup_frekuensi(skill_sekarang)

skill_sekarang_grup_2 = []
for (n in skill_sekarang_grup[0]){
	skill_sekarang_grup_2.push([0, 0])
	skill_sekarang_grup_2[n][0] = skill_sekarang_grup[0][n]
	skill_sekarang_grup_2[n][1] = skill_sekarang_grup[1][n]
}

function compareSecondColumn(a, b) {
	return a[1] - b[1]
}

skill_sekarang_grup_2.sort(compareSecondColumn).reverse()

frekuensi_tertinggi_skill_sekarang = 0
for (n in skill_sekarang_grup[1]){
	if (skill_sekarang_grup[1][n] > frekuensi_tertinggi_skill_sekarang){
		frekuensi_tertinggi_skill_sekarang = skill_sekarang_grup[1][n]
	}
}

for (n in skill_sekarang_grup_2){
	progress = ''
	persen = skill_sekarang_grup_2[n][1] * 100 / frekuensi_tertinggi_skill_sekarang
	progress += '<div data-progress="' + persen + '" class="row induk_progress">'
		progress += '<div class="col-xs-3">'
			progress += skill_sekarang_grup_2[n][0]
		progress += '</div>'
		progress += '<div class="col-xs-9">'
			progress += '<div class="progress">'
				progress += '<div class="progress-bar" style="width: ' + persen + '%;">'
			progress += '</div>'
		progress += '</div>'
	progress += '</div>'
	// letakkan di mana?
	// $('tbody.pemrograman').append(progress)
}

// list_progress = []
// $('.induk_progress').each(function(){
// 	list_progress.push($(this).attr('data-progress'))
// })