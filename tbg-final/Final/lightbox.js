$(document).ready(function() {

$("#about-toggle").on('click', function() {
$("#about-overlay").show(500)
})

$("#close-toggle") .on('click', function() {
$("#about-overlay").hide(500)
})


$("#shop-view-toggle").on('click', function() {
$("#product-overlay").show(500)
})

$("#shop-close-toggle").on('click', function() {
$("#product-overlay").hide(500)
	})
});

