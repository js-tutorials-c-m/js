// JavaScript Document


var x;

function changecolors() {
  x = 1;
  setInterval(change, 1000);
}

function change() {
  if (x === 1) {
    color = "red";
    x = 2;
  } else {
    color = "green";
    x = 1;
  }

  document.getElementById('demo').style.background =  color;
}
