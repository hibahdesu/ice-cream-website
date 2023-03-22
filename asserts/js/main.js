//Show Menu

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    //Validate that if variables exist
    if(toggle && nav) {
        //if so, add show-menu class to the div tag with the nav__menu class
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

//Remove Menu mobile

const links = document.querySelectorAll('.nav__link');
function linkAction() {
    const menu = document.getElementById('nav-menu');
    //when we click on each nav__link, we remove the sho-menu class
    menu.classList.remove('show-menu');
}
links.forEach(n => n.addEventListener('click', linkAction));


//Scroll section active link

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}
window.addEventListener('scroll', scrollActive);

//Change Background header
function scrollHeader() {
    const nav = document.getElementById('header');
    //when the scroll is greater than 200 viewport height, add the scroll-header class
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

//Show scroll top
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
        //when the scroll is greater than 200 viewport height, add the scroll-header class
    if(this.scrollY >= 560) {
        scrollTop.classList.add('scroll-top');
    } else {
        scrollTop.classList.remove('scroll-top')
    }
}
window.addEventListener('scroll', scrollTop);






// Dark/light theme
const themeBtn = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';


//previously selsected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeBtn.body.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

//we validate if the user previously chose a topic
if (selectedTheme) {
    //if the validation is fulfilled, we ask the issue was to know if we activate
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeBtn.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

//Activate / deactivate the theme manually witht the button
themeBtn.addEventListener('click', () => {
    //add or remove the dark / icon
    document.body.classList.toggle(darkTheme);
    themeBtn.classList.toggle(iconTheme);
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());

})
//scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true,
});
sr.reveal(`.home__data, .home__img, .about__data, 
.about__img, .location__content, .menu__content, 
.contact__data, .contact__button, .footer__content`, {
    interval: 200
});




