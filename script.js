var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array,2,5));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
css.textContent = body.style.background + ";"

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
	css.textContent = body.style.background + ";"
}

function getRandomColor1() {
  var letters1 = '0123456789ABCDEF';
  var col1 = '#'
  for (var i = 0; i < 6; i++) {
    col1 += letters1[Math.floor(Math.random() * 16)];
  }
  color1.value = col1;
  return col1;
}

function getRandomColor2() {
  var letters2 = '0123456789ABCDEF';
  var col2 = '#'
  for (var i = 0; i < 6; i++) {
    col2 += letters2[Math.floor(Math.random() * 16)];
  }
  color2.value = col2;
  return col2;
}

function setRandomColor() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ getRandomColor1() 
		+ ", " 
		+ getRandomColor2() 
		+ ")";
	css.textContent = body.style.background + ";"
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomColor);