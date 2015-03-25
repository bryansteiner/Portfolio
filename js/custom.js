// Navbar Smooth Scroll
$("#navbar a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 750, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });
});
// End Navbar Smooth Scroll

// Main Button Smooth Scroll
$("#main a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 750, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });
});
// End Main Button Smooth Scroll

// About Button Smooth Scroll
$("#about a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 750, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });
});
// End About Button Smooth Scroll

// Portfolio Button Smooth Scroll
$("#portfolio a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 750, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });
});
// End Portfolio Button Smooth Scroll

// Bottom Button Smooth Scroll
$("#bottom a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 750, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });
});
// End Contact Button Smooth Scroll

// Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Bar Graph
var barData = {
  labels : ["A. Davis","L. James","J. Harden","R. Westbrook"],
  datasets : [
    {
      fillColor : "rgba(220,220,220,0.5)",
      strokeColor : "rgba(220,220,220,0.8)",
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data : [24.6, 25.9, 27.2, 27.5]
    }
  ]
}

$('#bargraph').waypoint(function(direction) {
  if (direction == 'down') {
    var bargraph = document.getElementById("bargraph").getContext("2d");
    new Chart(bargraph).Bar(barData, {
      // Boolean - whether or not the chart should be responsive and resize when the browser does.
      responsive: true,
      // Number - Number of animation steps
      animationSteps: 75,
      // String - Animation easing effect
      animationEasing: "easeOutQuart",
      // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: true,
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero : false,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines : false,
      //Number - Spacing between each of the X value sets
      barValueSpacing : 10,
    });
  } else {}
}, {offset: '75%'});
