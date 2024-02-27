const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dots = document.querySelector(".dots")
console.log(dots)

let currentSlide = 0

function generateDots() {
	console.log(slides.length)
	for(let i=0; i<slides.length; i++) {
		console.log(i)
		const spanDot = document.createElement("span")
		spanDot.classList.add("dot")
		console.log(spanDot)
		dots.appendChild(spanDot)
		// debugger
		if(i===currentSlide) {
			spanDot.classList.add("dot_selected")
		}
	}
}
generateDots()

// const dot = document.querySelector(".dot")
// console.log(dot)

// function generateActiveDot() {
// 	console.log(Dot)
// 	for(let i=0; i<Dot; i++) {
// 		console.log(i)
// 	}
// }

const arrow_left = document.querySelector(".arrow_left") 
arrow_left.addEventListener("click", function () {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length
	AfficherImg()
});


const arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", function () {
	currentSlide = (currentSlide + 1) % slides.length
	AfficherImg()
});

// function AfficherImg () {
// 	const slide1 = document.createElement("slide1")
// 	slide1.classList.add("slide1")
// // 	console.log("slide1.jpg")
// // }
// arrow_left.onclick = AfficherImg;
// arrow_right.onclick = AfficherImg;

// const image1 = document.getElementById("#slide1");
// const image2 = document.getElementById("#slide2");
// const image3 = document.getElementById("#slide3");
// const image4 = document.getElementById("#slide4");

function AfficherImg () {
	const imgSrc = "./assets/images/slideshow/" + slides[currentSlide].image
	const imgElement = document.querySelector(".banner-img")
	imgElement.src = imgSrc
	const p = document.querySelector("#banner p")
	p.innerHTML = slides[currentSlide].tagLine
	const dotElements = document.querySelectorAll(".dot")
	dotElements.forEach ((element, index)=>{
		if(index===currentSlide) {
			element.classList.add("dot_selected")
		}else{
			element.classList.remove("dot_selected")

		}
	}) 
		
}

// let arrow_left = document.getElementById("arrow_left");
// arrow_left.addEventListener("click", function () {
// 	console.log("Test")
// });

// let arrow_right = document.getElementById("arrow_right");
// arrow_right.addEventListener("click", function () {
// 	console.log()
// });