$('.theia').theiaStickySidebar({
	additionalMarginTop: 50,
	additionalMarginBottom: 0
})

for (x = 1; x <= 5; x++){
	$('.jelajah .list-group-item:nth-child('+ x +')').css('display', 'block')	
}
$('.jelajah2 .element:nth-child(1)').css('display', 'block')