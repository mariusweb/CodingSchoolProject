(function(){

"use strict";

console.log("JS Veikia!");

let buttonLeft = document.getElementsByClassName("button-left");

let burger = document.querySelectorAll(".burger-menu");

console.log(burger);
for(let i = 0; i < burger.length; i++){
	burger[i].addEventListener("click", function(e){
		e.preventDefault();

		let navigacija = this.nextElementSibling;

		navigacija.classList.toggle("show");
	});
}

let slideIndex = 1;
showeSlides(slideIndex);

function plusSlides(n){
	showeSlides(slideIndex += n);
}
 function currentSlide(n){
 	showeSlides(slideIndex = n);
}

function showeSlides(n){
	let slides = document.getElementsByClassName("slide");
	if(n < slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "flex";
}
}());