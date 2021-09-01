
var navbar = document.getElementById("navbar"); 
var closing = document.getElementById("close-bar");
var menulist = document.getElementById("menu-bar");
function show(){
 navbar.style.display="block";
menulist.style.display="none";
closing.style.display="block";

}
function Close(){
closing.style.display="none";
navbar.style.display="none";
    menulist.style.display="block";
    
return false; 

}
