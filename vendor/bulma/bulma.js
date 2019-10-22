$('.navbar-burger').each(function(){
  $(this).click(function(){
    $(this).toggleClass('is-active')
    $('#' + $(this).attr('data-target')).toggleClass('is-active')
  })
})