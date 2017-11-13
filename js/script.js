var nav = document.getElementById('navMenu');
window.onscroll = function () {
	var scroll = window.pageYOffset;
	if (scroll > 80) {
		nav.className = 'Fix';
	} if (scroll < 80) {
		nav.className = '';
	}
}



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