window.addEventListener('DOMContentLoaded', ()=>{
	let menuBtn = document.getElementById('menu-btn');
	let navLinksBox = document.getElementById('nav-links-box');
	
	menuBtn.addEventListener('click', ()=>{
		navLinksBox.classList.toggle("show-links");
		console.log("clicked");
	})
	
	let circleBtns = document.querySelectorAll("div.circle-btn");
	let moveBtns = document.querySelectorAll("div.move-btn");
	console.log(moveBtns);
	
	circleBtns.forEach((cBtn, index)=>{
		cBtn.addEventListener('click', ()=>{
			currentDiv(index + 1);
		})
	})
	
	moveBtns.forEach((mBtn, index)=>{
		mBtn.addEventListener('click', ()=>{
			if (index === 0) plusDivs(-1) 
			else if (index === 1) plusDivs(1)
		})
	})
	
	var slideIndex = 1;
	showDivs(slideIndex);

	function plusDivs(n) {
	  showDivs(slideIndex += n);
	}

	function currentDiv(n) {
	  showDivs(slideIndex = n);
	}

	function showDivs(n) {
	  var i;
	  var x = document.getElementsByClassName("mySlides");
	  var dots = document.getElementsByClassName("demo");
	  if (n > x.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = x.length}
	  for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	  }
	  for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" w3-white", "");
	  }
	  x[slideIndex-1].style.display = "block";  
	  dots[slideIndex-1].className += " w3-white";
	}
})

