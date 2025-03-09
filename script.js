let unlock = true;

//=================

//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("active-icon-menu");
			menuBody.classList.toggle("left-0");
			menuBody.classList.toggle("before:left-0");
		}
	});
};

function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("active-icon-menu");
	menuBody.classList.remove("left-0");
	menuBody.classList.remove("before:left-0");
}
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains("overflow-hidden")) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}

function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {

		setTimeout(() => {

			body.style.paddingRight = '0px';
			body.classList.remove("overflow-hidden", "touch-none", "overscroll-none");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}

function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {

		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("overflow-hidden", "touch-none", "overscroll-none");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}