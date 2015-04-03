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

// Main Animation
  var icon_value = [];

  // set default positions
  var icon_left = [];
  var icon_top = [];

  for(var i=0; i < 33; i++) {
      icon_left[i] = 10 + 8 * (i%11);
      icon_top[i] = 90 - 17.5 * Math.floor(i/11);
  }

  function moveToPlace(id) {
      var el = document.getElementById("icon_" + id);
      el.style["left"] = icon_left[id] + "%";
      el.style["top"] = icon_top[id] + "%";
  }

  icon_value.sort(function() { return Math.round(Math.random()) - 0.5; });
    for(i=0; i < 33; i++) setTimeout("moveToPlace(" + i + ")", i * 100);
// End Main Animation

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

// Contact Button Smooth Scroll
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
    },
    {
        value: 50,
        color: "#46BFBD",
    },
    {
        value: 100,
        color: "#FDB45C",
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
        showTooltips: false,
        //String - The colour of each segment stroke
        segmentStrokeColor : "#FFFFFF",
        //Number - The width of each segment stroke
        segmentStrokeWidth : 3,
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
    },
    {
        value: 50,
        color: "#46BFBD",
    },
    {
        value: 100,
        color: "#FDB45C",
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
        showTooltips: false,
        //String - The colour of each segment stroke
        segmentStrokeColor : "#515151",
        //Number - The width of each segment stroke
        segmentStrokeWidth : 3,
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
        color:"#F7464A"
    },
    {
        value: 50,
        color: "#46BFBD"
    },
    {
        value: 100,
        color: "#FDB45C"
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
        //String - The colour of each segment stroke
        segmentStrokeColor : "#EEEEEE",
        //Number - The width of each segment stroke
        segmentStrokeWidth : 3,
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

// Bar Charts
  // Bar Chart Empty
  var barEmpty = {
    labels : ["L. James","J. Harden","S. Curry","R. Westbrook","A. Davis"],
    datasets : [
      {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data : [0, 0, 0, 0, 0]
      }
    ]
  }

  // Bar Chart Portfolio
  var barData = {
    labels : ["L. James","J. Harden","S. Curry","R. Westbrook","A. Davis"],
    datasets : [
      {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data : [26.0, 26.6, 28.0, 29.3, 31.1]
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
        // String - Colour of the scale line
        scaleLineColor: "#FFFFFF",
        // String - Scale label font colour
        scaleFontColor: "#FFFFFF",
        // Boolean - If we want to override with a hard coded scale
        scaleOverride: true,
        // ** Required if scaleOverride is true **
        // Number - The number of steps in a hard coded scale
        scaleSteps: 4,
        // Number - The value jump in the hard coded scale
        scaleStepWidth: 2,
        // Number - The scale starting value
        scaleStartValue: 24,
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
        // String - Colour of the scale line
        scaleLineColor: "#FFFFFF",
        // String - Scale label font colour
        scaleFontColor: "#FFFFFF",
        // Boolean - If we want to override with a hard coded scale
        scaleOverride: true,
        // ** Required if scaleOverride is true **
        // Number - The number of steps in a hard coded scale
        scaleSteps: 4,
        // Number - The value jump in the hard coded scale
        scaleStepWidth: 2,
        // Number - The scale starting value
        scaleStartValue: 24,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : false,
      });
    }
  }, {offset: '100%'});
// End Bar Charts

// Line Charts

  // Line Chart Empty
  var lineEmpty = {
    labels: ["Jan","", "Feb","", "Mar","", "Apr","", "May","", "Jun","", "Jul","", "Aug","", "Sept","", "Oct","", "Nov","", "Dec","", ""],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    ]
  };

  // Line Chart Portfolio
  var lineData = {
    labels: ["Jan","", "Feb","", "Mar","", "Apr","", "May","", "Jun","", "Jul","", "Aug","", "Sept","", "Oct","", "Nov","", "Dec","", ""],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [1832, 1848, 1742, 1839, 1846, 1859, 1886, 1843, 1884, 1871, 1925, 1938, 1973, 1982, 1925, 1955, 2002, 1984, 1946, 1862, 2018, 2041, 2053, 1990, 2058]
        }
    ]
  };

  $('#linechart').waypoint(function(direction) {
    if (direction == 'down') {
      var linechart = document.getElementById("linechart").getContext("2d");
      new Chart(linechart).Line(lineData, {
        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: true,
        // Number - Number of animation steps
        animationSteps: 100,
        // String - Animation easing effect
        animationEasing: "easeOutQuart",
        // Boolean - If we want to override with a hard coded scale
        scaleOverride: true,
        // String - Colour of the scale line
        scaleLineColor: "#FFFFFF",
        // String - Scale label font colour
        scaleFontColor: "#FFFFFF",
        // ** Required if scaleOverride is true **
        // Number - The number of steps in a hard coded scale
        scaleSteps: 8,
        // Number - The value jump in the hard coded scale
        scaleStepWidth: 50,
        // Number - The scale starting value
        scaleStartValue: 1700,
        // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: false,
        //Boolean - Whether the line is curved between points
        bezierCurve : false,
      });
    }
  }, {offset: '75%'});

  $('#linechart').waypoint(function(direction) {
    if (direction == "up") {
      var linechart = document.getElementById("linechart").getContext("2d");
      new Chart(linechart).Line(lineEmpty, {
        // String - Colour of the scale line
        scaleLineColor: "#FFFFFF",
        // String - Scale label font colour
        scaleFontColor: "#FFFFFF",
        // Boolean - If we want to override with a hard coded scale
        scaleOverride: true,
        // ** Required if scaleOverride is true **
        // Number - The number of steps in a hard coded scale
        scaleSteps: 8,
        // Number - The value jump in the hard coded scale
        scaleStepWidth: 50,
        // Number - The scale starting value
        scaleStartValue: 1700,
        // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: false,
      });
    }
  }, {offset: '100%'});
// End Line Charts
