const button = document.querySelector("#navBtn");
const navList = document.querySelector(".nav__options");

const click = () => {
    navList.classList.toggle('navigation--active');
}

button.addEventListener('click', click);


/*HEADER*/
gsap.fromTo(".header__content h1",
    { opacity: 0 }, { opacity: 1 }
).delay(.4);

gsap.fromTo(".header__content button",
    { opacity: 0 }, { opacity: 1 }
).delay(.5);

/*PARTNERS*/
gsap.fromTo(".partnersContainer p", { opacity: 0 }, {
    scrollTrigger: ".partnersContainer",
    opacity: 1,
    delay: .4
});

gsap.fromTo(".partnersContainer h2", { opacity: 0 }, {
    scrollTrigger: ".partnersContainer",
    opacity: 1,
    delay: .5
});

gsap.fromTo(".logoGrid li", { opacity: 0 }, {
    scrollTrigger: ".logoGrid",
    opacity: 1,
    delay: .6
});

/*OFFER*/
gsap.fromTo(".offerContainer p", { opacity: 0 }, {
    scrollTrigger: ".offerContainer",
    opacity: 1,
    delay: .4
});

gsap.fromTo(".offerContainer h2", { opacity: 0 }, {
    scrollTrigger: ".offerContainer",
    opacity: 1,
    delay: .5
});

gsap.fromTo(".cardGrid li", { opacity: 0 }, {
    scrollTrigger: ".cardGrid",
    opacity: 1,
    delay: .6
});