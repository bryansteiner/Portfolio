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



