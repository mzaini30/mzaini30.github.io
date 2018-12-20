kategori = 'soul'

$('.' + kategori).each(function(n){
	if (n < 10){
		$(this).css('display', 'block')
		$(this).find('img').attr('src', $(this).find('img').data('src'))
	}
})

$('.' + kategori + '-sidebar').each(function(n){
	if (n < 10){
		$(this).css('display', 'block')
		$(this).find('img').attr('src', $(this).find('img').data('src'))
	}
})

$('.theia').theiaStickySidebar({
	additionalMarginTop: 20
})