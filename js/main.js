const footerYear = document.querySelector('.footer-year')
const burgerBtn = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-page')
const navLinks = document.querySelectorAll('.nav-link')

function switchNav(){
    nav.classList.toggle('show-nav');
    burgerBtn.classList.toggle('is-active');
    navLinks.forEach(item => {
        item.addEventListener('click', () =>{
            nav.classList.remove('show-nav')
            burgerBtn.classList.remove('is-active');
        })
    })
}


const switchCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

burgerBtn.addEventListener('click', switchNav)
switchCurrentYear();