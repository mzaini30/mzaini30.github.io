input_cari = ".input_cari"
output_cari = ".output_cari .list-group-item"

$(output_cari).hide()
$(input_cari).on("keyup", function() {
	var value = $(this).val().toLowerCase();
	$(output_cari).filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	});
	if ($(this).val().length == 0){
		$(output_cari).hide()
	}
});