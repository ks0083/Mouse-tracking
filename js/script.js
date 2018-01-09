(function() {

  var canvas;
  var ctx;
  var width;
  var height;
  var ballX;
  var ballY;
  var mouseX;
  var mouseY;

  function initialize() {
    canvas = document.getElementById('canvas');
    if(!canvas && !canvas.getContext) {
      return false;
    }
    
    ctx = canvas.getContext('2d');
    width = ctx.canvas.width ;
    height = ctx.canvas.height;
    ballX = mouseX = width/2;
    ballY = mouseY = height/2;
    
    canvas.addEventListener('mousemove', getMousePosition, false);
    
    setInterval(drawBall, 10);
  };

  function getMousePosition(e) {
    var rect = e.target.getBoundingClientRect();
    mouseX = Math.floor(e.clientX - rect.left);
    mouseY = Math.floor(e.clientY - rect.top);
  };

  var hue = 0;
  
  function drawBall() {
    var radius = 10;
    var delay = 20;
    hue += 0.5;
    
    ballX = (mouseX + delay * ballX) / (delay+1);
    ballY = (mouseY + delay * ballY) / (delay+1);
    
    ctx.save();
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, width, height);

    ctx.beginPath();
    ctx.arc(ballX, ballY, radius, 0, 2*Math.PI, true);
    ctx.closePath();    
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  };

  window.addEventListener('load', initialize, false);
  
} ) ();