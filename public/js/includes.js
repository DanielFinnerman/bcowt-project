'use strict';

//Fetching header and footer of the html page, which are divided to different files
//to make further cyustomizing easier
//tho more useful on websites with multiple different html pages
fetch("./header.html").then(response => {return response.text();}).then(data => {document.querySelector("header").innerHTML = data;});
fetch("./footer.html").then(response => {return response.text();}).then(data => {document.querySelector("footer").innerHTML = data;});

//upload overlay open and close
const openNav = () => document.getElementById("myNav").style.height = "100%";
const closeNav = () => document.getElementById("myNav").style.height = "0%";


const sign = (x) => {
	const d0 = document.getElementById('drop0')
	const d1 = document.getElementById('drop1')
	d0.style.display = "none";
	d1.style.display = "none";
	if(x==0) d0.style.display = "block";
	if(x==1) d1.style.display = "block";
}