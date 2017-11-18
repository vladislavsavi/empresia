var nav = document.getElementById('navMenu');
window.onscroll = function () {
	var scroll = window.pageYOffset;
	if (scroll > 80) {
		nav.className = 'Fix';
	} if (scroll < 80) {
		nav.className = '';
	}
}

var line = document.getElementById('line');
var ball = document.getElementById('ball');

var buttonCoords = {
  x: 0,
  y: 0,
};



var button = document.querySelector("#calculate");
var buttonBounding = button.getBoundingClientRect();

button.addEventListener('click', function(event){
  var bubble = document.getElementById("bubble");
  
  if(bubble)
      bubble.remove();
  
  bubble = document.createElement('span');
  bubble.setAttribute("id", 'bubble');
  bubble.className = 'bubble';
  bubble.style.width = '10px';
  bubble.style.height = '10px';
  
  calculateCoords(event);
  
  bubble.style.left = (buttonCoords.x-5) + "px";
  bubble.style.top  = (buttonCoords.y-5) + "px";
  
  
  var buttonWidth = (buttonCoords.x > buttonBounding.width/2) ? buttonBounding.right - buttonCoords.x :  buttonCoords.x - buttonBounding.left;
  
  setTimeout(function(){
    bubble.style.transform = "scale("+ buttonWidth/5 +")";
    bubble.style.opacity = "0";
  }, 10);
  
  
  this.appendChild(bubble);
  
  setTimeout(function(){
    bubble.remove();
  }, 1000);
}, true);

function calculateCoords(event){
  buttonCoords.x = event.clientX - buttonBounding.x;
  buttonCoords.y = event.clientY - buttonBounding.y;
}
var buttons = document.getElementsByClassName('butt'),
forEach = Array.prototype.forEach;

forEach.call(buttons, function (b) {
b.addEventListener('click', addElement);
});

function addElement(e) {
var addDiv  = document.createElement('div'),
    mValue  = Math.max(this.clientWidth, this.clientHeight),
    rect    = this.getBoundingClientRect();
    sDiv    = addDiv.style,
    px      = 'px';

sDiv.width  = sDiv.height = mValue + px;
sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;

addDiv.classList.add('pulse');
this.appendChild(addDiv);
}


line.onclick = function (){
	debugger
	 if (ball.className == 'ChekOn') {
  	ball.className == 'ChekOff';

	  	setTimeout(function(){
	  	document.getElementById('cont').style.opacity = '1';
	  	document.getElementById('cont').style.zIndex = '11';
	  },500);
  }
	
  if (ball.className !== 'ChekOn') {
  	ball.className = 'ChekOn';

	  	setTimeout(function(){
	  	document.getElementById('cont').style.opacity = '0';
	  	document.getElementById('cont').style.zIndex = '-10';
	  },500);
  }
  
}
