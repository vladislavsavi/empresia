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
ball.setAttribute('state','');
ball.state = 'off';

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
   if (ball.state == 'on') {
    ball.classList.remove('ChekOn');
    ball.className == 'ChekOff';
    ball.state = 'off';
    ball.style.left = '4px';
      setTimeout(function(){
      document.getElementById('cont').style.opacity = '1';
      document.getElementById('cont').style.zIndex = '11';
      BottomText.style.color = 'white';
      BottomText.innerHTML = 'Посмотреть на карте';
    },1000);
  }
  else{
  if (ball.state == 'off') {
    ball.classList.remove('ChekOff');
    ball.className = 'ChekOn';
    ball.state = 'on';
      ball.style.left = '30px';
      setTimeout(function(){
      document.getElementById('cont').style.opacity = '0';
      document.getElementById('cont').style.zIndex = '-10';
      BottomText.style.color = '#000';
      BottomText.innerHTML = 'Вернуться к просмотру контактов';
    },1000);
  }
}
}

var burger = $('#burger');

$('#burger').on('click', function() {
   if(document.querySelector('.hideCutlet')){
     $('#one').removeClass('oneCutlet');
     $('#two').removeClass('hideCutlet');
     $('#three').removeClass('threeCutlet'); 
     $('#lis').animate({height: '0px'},300);
   } else{
     $('#one').addClass('oneCutlet');
     $('#two').addClass('hideCutlet');
     $('#three').addClass('threeCutlet');
     $('#lis').animate({height: '100px'},300)
   }
   
});