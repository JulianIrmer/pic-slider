let xCoord;
//document.getElementById("imgL").style.height = window.innerHeight +"px";
//document.getElementById("imgR").style.height = window.innerHeight +"px";

function slide(){
	let xCoord = event.clientX;
	if(xCoord < window.innerWidth){
		document.getElementById("imgL").style.width = xCoord +"px";
	}
}

dragElement(document.getElementById(("slider")));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0;
  elmnt.onmousedown = dragMouseDown;
	elmnt.touchstart = dragMouseDown;
  

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos2 = e.clientX;
    document.onmouseup = closeDragElement;
    document.touchend = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    document.touchmove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
		
    // calculate the new cursor position:
    pos1 = pos2 - e.clientX;
    pos2 = e.clientX;
		
    // set the element's new position:
		console.log(e.clientX);
		if(e.clientX < window.innerWidth){
			 elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		}
		slide();
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.touchend = null;
    document.onmousemove = null;
    document.touchmove = null;
  }
}

