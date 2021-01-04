window.onload = function () {
    // Calling function myFunction after the page loads.
    myFunction();
  };
  
  // Function used to draw lines.
  function drawLines() {
    // Getting canvas element ID.
    var canvas = document.getElementsByTagName("canvas")[0];
    // Getting canvas context object.
    var lines = canvas.getContext("2d");
  
    // Random line colors using RGB (Red, Green, Blue) values.
    var w = function () {
      return Math.floor(Math.random() * 256);
    };
    // Random line lengths, locations, and orientations.
    var x = function () {
      return Math.floor(Math.random() * 1000);
    };
    // Random line widths.
    var y = function () {
      return Math.floor(Math.random() * 25);
    };
    // Random line transparencies.
    var z = function () {
      return Math.random();
    };
  
    // Creating lines using random number variables w, x, y, z
    lines.strokeStyle = "rgb(" + w() + "," + w() + "," + w() + ")";
    lines.beginPath();
    lines.moveTo(x(), x());
    lines.lineTo(x(), x());
    lines.stroke();
    lines.lineWidth = y();
    lines.globalAlpha = z();
  }
  
  function myFunction() {
    // Calling function draw every 300 miliseconds.
    setInterval(function () {
      drawLines();
    }, 300);
  }
  