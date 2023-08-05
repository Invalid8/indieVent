window.addEventListener('DOMContentLoaded', ()=>{
	let menuBtn = document.getElementById('menu-btn');
	let navHeader = document.getElementById('nav-header'); 
	let navLinksBox = document.getElementById('nav-links-box');
	
	menuBtn.addEventListener('click', ()=>{
		navLinksBox.classList.toggle("show-links");
		navHeader.classList.toggle("cover-header");
		document.body.classList.toggle("disable-scroll");
	})
	
	let themeBtn = document.getElementById("theme-btn");
	
	themeBtn.addEventListener('click', ()=>{
		if (themeBtn.dataset.theme === "light") {
			document.body.classList.add('dark-theme');
			themeBtn.textContent = "dark mode";
			themeBtn.dataset.theme = "dark";
			themeBtn.classList.add("dark");
		} else if (themeBtn.dataset.theme === "dark") {
			document.body.classList.remove('dark-theme');
			themeBtn.textContent = "light mode";
			themeBtn.dataset.theme = "light";
			themeBtn.classList.remove("dark");
		}
	})
	
	let circleBtns = document.querySelectorAll("div.circle-btn");
	let moveBtns = document.querySelectorAll("div.move-btn");
	
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

