function animateX(){
	var element=document.getElementById("animate");
	var currentPosition=0;
	var id=setInterval(frame,5);
	function frame(){
		if(currentPosition==500){
			clearInterval(id);
			}
		else{
			currentPosition++;
			element.style.left=currentPosition+'px';

			}
		}
	}
