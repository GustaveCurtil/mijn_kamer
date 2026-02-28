function isMobile() {
    return /Android|iPhone/i.test(navigator.userAgent);
}

console.log(isMobile())

let defaultNavs = document.querySelectorAll('.default');
let desktopNav = document.querySelector('.default#desktop');
let mobileNav = document.querySelector('.default#mobile');
defaultNavs.forEach(nav => {
    nav.classList.remove('active');
});

if (isMobile()) {
    mobileNav.classList.add('active')
} else {
    panning();
    desktopNav.classList.add('active')
}