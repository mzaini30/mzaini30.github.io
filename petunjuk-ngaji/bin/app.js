// init

ambil_data = function(){
   return localStorage.getItem('petunjuk-ngaji')
}
tentukan_data = function(x){
   localStorage.setItem('petunjuk-ngaji', x)
}
data_baru = function(x){
   tentukan_data(x)
}

// main data

$('h1').html(ambil_data())
$('input').attr({
   placeholder: function(){
      return ambil_data()
   }
})

$('.data-baru').click(function(){
   data_baru($('input').val())
   location.href = 'index.html'
})