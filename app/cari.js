$(".input_cari").on("keyup", function() {
	var value = $(this).val().toLowerCase();
	$(".output_cari .list-group-item").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	});
});