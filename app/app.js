$('.theia').theiaStickySidebar({
	additionalMarginTop: 50,
	additionalMarginBottom: 0
})
$('.theia_2').theiaStickySidebar({
	additionalMarginTop: 70,
	additionalMarginBottom: 0
})
 
$('.tulisan_lainnya a').each(function(){
	if ($(this).attr('href') == ''){
		$(this).slideUp()
	}
})