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
// End Tooltip

// Pie Charts
  
  // Pie Chart Empty
  var pieEmpty = [
    {value: 0}
  ]

  // Pie Chart About Page
  var pieData1 = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
  ]

  $('#piechart1').waypoint(function(direction) {
    if (direction == 'down') {
      var piechart1 = document.getElementById("piechart1").getContext("2d");
      new Chart(piechart1).Pie(pieData1, {
        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: false,
        //Number - Amount of animation steps
        animationSteps : 100,
        //String - Animation easing effect
        animationEasing : "easeOutQuart",
        // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: false
      });
    }
  }, {offset: '50%'});

  $('#piechart1').waypoint(function(direction) {
    if (direction == "up") {
      var piechart1 = document.getElementById("piechart1").getContext("2d");
      new Chart(piechart1).Pie(pieEmpty, {});
    }
  }, {offset: '100%'});

  // Pie Chart Portfolio Page
  var pieData2 = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
  ]

  $('#piechart2').waypoint(function(direction) {
    if (direction == 'down') {
      var piechart2 = document.getElementById("piechart2").getContext("2d");
      new Chart(piechart2).Pie(pieData2, {
        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: false,
        //Number - Amount of animation steps
        animationSteps : 100,
        //String - Animation easing effect
        animationEasing : "easeOutQuart",
        // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: false
      });
    }
  }, {offset: '50%'});

  $('#piechart2').waypoint(function(direction) {
    if (direction == "up") {
      var piechart2 = document.getElementById("piechart2").getContext("2d");
      new Chart(piechart2).Pie(pieEmpty, {});
    }
  }, {offset: '100%'});

  // Pie Chart Contact 
  var pieData3 = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
  ]

  $('#piechart3').waypoint(function(direction) {
    if (direction == 'down') {
      var piechart3 = document.getElementById("piechart3").getContext("2d");
      new Chart(piechart3).Pie(pieData3, {
        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: false,
        //Number - Amount of animation steps
        animationSteps : 100,
        //String - Animation easing effect
        animationEasing : "easeOutQuart",
        // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: false,
      });
    }
  }, {offset: '50%'});
  
  $('#piechart3').waypoint(function(direction) {
    if (direction == "up") {
      var piechart3 = document.getElementById("piechart3").getContext("2d");
      new Chart(piechart3).Pie(pieEmpty, {});
    }
  }, {offset: '100%'});
// End Pie Charts

// Bar Graphs
  // Bar Graph Empty
  var barEmpty = {
    labels : ["Kevin Love","Lebron James","Carmelo Anthony","Kevin Durant"],
    datasets : [
      {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data : [0, 0, 0, 0]
      }
    ]
  }

  // Bar Graph Portfolio
  var barData = {
    labels : ["Kevin Love","Lebron James","Carmelo Anthony","Kevin Durant"],
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

  $('#barchart').waypoint(function(direction) {
    if (direction == 'down') {
      var barchart = document.getElementById("barchart").getContext("2d");
      new Chart(barchart).Bar(barData, {
        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: true,
        // Number - Number of animation steps
        animationSteps: 100,
        // String - Animation easing effect
        animationEasing: "easeOutQuart",
        // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: true,
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero : false,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : false,
        //Number - Spacing between each of the X value sets
        barValueSpacing : 10
      });
    }
  }, {offset: '75%'});

  $('#barchart').waypoint(function(direction) {
      if (direction == "up") {
        var barchart = document.getElementById("barchart").getContext("2d");
        new Chart(barchart).Bar(barEmpty, {
          //Boolean - Whether grid lines are shown across the chart
          scaleShowGridLines : false,
          //scaleOverride for barData
          scaleOverride: true, scaleStartValue: 24, scaleStepWidth: 1, scaleSteps: 4
        });
      }
    }, {offset: '100%'});
// End Bar Graphs
