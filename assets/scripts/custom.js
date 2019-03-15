(function(){

"use strict";

console.log("JS Veikia!");



let burger = document.querySelectorAll(".burger-menu");

console.log(burger);
for(let i = 0; i < burger.length; i++){
	burger[i].addEventListener("click", function(e){
		e.preventDefault();

		let navigacija = this.nextElementSibling;

		navigacija.classList.toggle("show");
	});
}
let navBaratag = document.querySelectorAll(".nav-li");
for(let n = 0; n < navBaratag.length; n++){
	navBaratag[n].addEventListener("click", function(e){
		e.preventDefault();
	});
}
let readMore = document.querySelectorAll(".read-more");
for(let n = 0; n < readMore.length; n++){
	readMore[n].addEventListener("click", function(e){
		e.preventDefault();
	});
}
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
  	rewindNav: false,
  	items:1,
  	nav:true,
  	navText : ['<i class="icon-arrowhead-thin-outline-to-the-left arrow-left arrow"></i>','<i class="icon-arrow-point-to-right arrow-right arrow"></i>'],
  });

});
}());
