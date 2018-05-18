// init

ambil_data = function(){
   return localStorage.getItem('petunjuk-ngaji')
}
tentukan_data = function(x){
   return localStorage.setItem('petunjuk-ngaji', x)
}

// main data

$('h1').html(ambil_data())
$('input').attr({
   placeholder: function(){
      ambil_data()
   }
})

data_baru = function(x){
   tentukan_data(x)
}