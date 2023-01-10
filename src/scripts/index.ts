const ham = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElms = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

ham?.addEventListener("click", () => {
	if (header?.classList.contains("open")) {
		body?.classList.remove("no-scroll");
		header?.classList.remove("open");
		fadeElms.forEach((element) => {
			element?.classList.remove("fade-in");
			element?.classList.add("fade-out");
		});
	} else {
		body?.classList.add("no-scroll");
		header?.classList.add("open");
		fadeElms.forEach((element) => {
			element?.classList.remove("fade-out");
			element?.classList.add("fade-in");
		});
	}
});
