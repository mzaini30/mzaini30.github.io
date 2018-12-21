function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

function setFormatNumber (integerNumber) {
	return parseInt(integerNumber).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// kategori --> replace spasi jadi -
arr = JSON.parse(localStorage.getItem('kategori blog'))
arr = arr.slice(Math.max(arr.length - 10, 0))
kategori = mode(arr)

if (kategori === null){
	$('.bagian-minat').hide()
} else {
	kategori = kategori.replace(/ /g, '-')
}

$('.' + kategori).each(function(n){
	if (n < 10){
		$(this).css('display', 'table-row')
		$(this).find('img').attr('src', $(this).find('img').data('src'))
	}
})

$('.' + kategori + '-sidebar').each(function(n){
	if (n < 10){
		$(this).css('display', 'block')
		$(this).find('img').attr('src', $(this).find('img').data('src'))
	}
})

data_kunjungan = localStorage.getItem('kunjungan blog')
localStorage.setItem('kunjungan blog', parseInt(data_kunjungan) + 1)

total_kunjungan = 0
banyak_kunjungan = parseInt(localStorage.getItem('kunjungan blog'))
if (banyak_kunjungan > 1000000){
	total_kunjungan = '1.000.000+'
} else {
	total_kunjungan = setFormatNumber(localStorage.getItem('kunjungan blog'))
}

$('.jumlah-kunjungan').html(total_kunjungan)
$('.tampil-minat').html(kategori)

$('.theia').theiaStickySidebar({
	additionalMarginTop: 70
})