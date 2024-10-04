/*=============== SHOW MENU ===============*/
const navMenu= document.getElementById("nav-menu"),
      navToggle= document.getElementById("nav-toggle"),
      navClose= document.getElementById("nav-close");
    //   menu show
    if(navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-menu');
        })
    }
    // menu hidden
    if(navClose){
navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu');
})
    }

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgheader= ()=>{
    const header = document.getElementById('header');

    this.scrollY>= 50 ? header.classList.add('bg-header')
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgheader);
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton=document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme =()=> document.body.classList(darkTheme) ? 'dark' :'light'
const getCurrentIcon =()=> document.body.classList(iconTheme) ? 'ri-moon-line' :'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'? 'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' :'remove'](iconTheme)
}
themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})










