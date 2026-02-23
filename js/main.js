console.log("fired");

//variables
const button = document.querySelector("#button");
const burgerCon = document.querySelector("#burger-con");

function hamburgerMenu() {
	burgerCon.classList.toggle("slide-toggle");
}

//Event Listeners
button.addEventListener("click", hamburgerMenu);