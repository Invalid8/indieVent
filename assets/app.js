//{theme: "dark", themeCode: 135}
//{theme: "light", themeCode: 122}

window.addEventListener('DOMContentLoaded', ()=>{
	document.body.style.display = "block";
	let theme = getThemeFromLS();
	let menuBtn = document.getElementById('menu-btn');
	let navHeader = document.getElementById('nav-header'); 
	let navLinksBox = document.getElementById('nav-links-box');
	let themeBtn = document.getElementById("theme-btn");
	
	console.log(theme.themeCode)
	
	if (theme.themeCode === 122) {
		document.body.classList.remove('dark-theme');
		themeBtn.textContent = "light mode";
		themeBtn.dataset.theme = "light";
		themeBtn.classList.remove("dark");
	} else if (theme.themeCode === 135) {
		document.body.classList.add('dark-theme');
		themeBtn.textContent = "dark mode";
		themeBtn.dataset.theme = "dark";
		themeBtn.classList.add("dark");
	} else {
		document.body.innerHTML = "<h1>ERROR</h1>"
	}
	
	window.addEventListener('scroll', ()=>{
		let position = window.screenTop;
		
		if (position > navHeader.getBoundingClientRect().height) {
			navHeader.classList.add("cover-header");
		} else {
			navHeader.classList.remove("cover-header");
		}
	}, { passive: true })
	
	menuBtn.addEventListener('click', ()=>{
		navLinksBox.classList.toggle("show-links");
		navHeader.classList.toggle("cover-header");
		document.body.classList.toggle("disable-scroll");
	})
	
	themeBtn.addEventListener('click', ()=>{
		if (themeBtn.dataset.theme === "light") {
			document.body.classList.add('dark-theme');
			themeBtn.textContent = "dark mode";
			themeBtn.dataset.theme = "dark";
			themeBtn.classList.add("dark");
			updateTheme({theme: "dark", themeCode: 135});
			
		} else if (themeBtn.dataset.theme === "dark") {
			document.body.classList.remove('dark-theme');
			themeBtn.textContent = "light mode";
			themeBtn.dataset.theme = "light";
			themeBtn.classList.remove("dark");
			updateTheme({theme: "light", themeCode: 122});
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

function getThemeFromLS() {
	if (!localStorage.getItem("theme")) {
		localStorage.setItem("theme", JSON.stringify({theme: "light", themeCode: 122}));
	} 
	
	return JSON.parse(localStorage.getItem("theme"));
}

function updateTheme(theme) {
	localStorage.setItem("theme", JSON.stringify(theme));
}
