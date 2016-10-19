// JavaScript Document

function animateY(){
	var element=document.getElementById("animate");
	var currentPosition=0;
	var id=setInterval(frame,5);
	function frame(){
		if(currentPosition==1500){
			clearInterval(id);
			}
		else{
			currentPosition++;
			element.style.top=currentPosition+'px';
			
			}
		}
	}
	
