// init

ambil_data = function(){
   return localStorage.getItem('petunjuk-ngaji')
}
tentukan_data = function(x){
   localStorage.setItem('petunjuk-ngaji', x)
}

// main data

$('h1').html(ambil_data())
$('input').attr({
   placeholder: function(){
      return ambil_data()
   }
})

$('.data-baru').click(function(){
   input = $('input').val()
   if (input != ''){
      tentukan_data(input)
   }
   location.href = 'index.html'
})