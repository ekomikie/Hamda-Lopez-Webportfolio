const splashScreen = document.querySelector("#splashScreen");
const logoTwo = document.querySelectorAll('#logo-2 path');


window.addEventListener("load", () => {
    if (splashScreen) {
        splashScreen.style.display = "flex";
        splashScreen.classList.add("loaded");
        setTimeout(() => splashScreen.style.display = "none", 5000);
    }
    document.body.style.visibility = "visible";
    document.body.style.opacity = 1;
});

for (let i = 0; i < logoTwo.length; i++) {
  console.log(`letter ${i} is ${logoTwo[i].getTotalLength()}`);
}


const faqs = document.querySelectorAll(".skills-wrapper");
navbar = document.querySelector("ul").querySelectorAll("a");
mobilenav =document.querySelector(".mobile-nav").querySelectorAll("a");


navbar.forEach((element) => {
  element.addEventListener("click", function () {
    navbar.forEach((nav) => nav.classList.remove("be-active"));
    this.classList.add("be-active");
  });
});

mobilenav.forEach((element) => {
  element.addEventListener("click", function () {
    mobilenav.forEach((nav) => nav.classList.remove("mobile-active"));
    this.classList.add("mobile-active");
  });
});


faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});

  AOS.init(
    {
      duration: 1200,
      easing: ease-out-back,
      
    }
  );
