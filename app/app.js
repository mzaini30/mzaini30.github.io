kategori = 'soul'

$('.' + kategori).each(function(){
	$(this).css('display', 'block')
	$(this).find('img').attr('src', $(this).find('img').data('src'))
})

$('.theia').theiaStickySidebar({
	additionalMarginTop: 20
})