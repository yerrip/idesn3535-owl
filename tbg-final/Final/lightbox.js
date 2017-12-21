$(document).ready(function() {

// $("#about-toggle").on('click', function() {
// $("#about-overlay").show(500)
// })

// $("#close-toggle") .on('click', function() {
// $("#about-overlay").hide(500)
// })


$("#shop-view-toggle").on('click', function() {
$("#product-overlay").show(500)
})

$("#shop-close-toggle").on('click', function() {
$("#product-overlay").hide(500)
	})


$('.show-filters').on('click', function() {
  // $('.filters-list').toggle(300) easy solution
  if ($('.filters .filters-list').is(':visible')) {
    $('.filters .filters-list').slideUp()
    $('.show-filters').text('Show Filters')
  } else {
    $('.filters .filters-list').slideDown()
    $('.show-filters').text('Hide Filters')
  }
  
  return false
})

$('.filters-list a').on('click', function() {
  var filter = $(this).attr('data-filter')

  console.log(filter)

  $('.product').hide()
  $(filter).show()

  $('.filters-list a').removeClass('selected')
  $(this).addClass('selected')
  
  return false
})

$('#menu-toggle img').on("click", function() { 
  $('#menu nav').toggleClass('open')
  console.log('click')

})
});

