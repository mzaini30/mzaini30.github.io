// init

ambil_data = function(){
   return localStorage.getItem('petunjuk-ngaji')
}
tampil_data = function(){
   if (ambil_data() == '' || ambil_data() == null){
      return '0'
   } else {
      return ambil_data()
   }
}
tentukan_data = function(x){
   localStorage.setItem('petunjuk-ngaji', x)
}

// main data

$('h1').html(tampil_data())
$('input').attr({
   placeholder: function(){
      return tampil_data()
   }
})

$('.data-baru').click(function(){
   input = $('input').val()
   if (input != ''){
      tentukan_data(input)
   }
   location.href = 'index.html'
})