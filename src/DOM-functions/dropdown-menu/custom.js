// JavaScript Document
function favsports()
{
var mylist=document.getElementById("mylist");
document.getElementById("favorite").value=mylist.options[mylist.selectedIndex].text;	
}