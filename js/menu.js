const navSlide= (x)=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
   
 //Toggle Nav
    
    burger.addEventListener('click', () =>{
        if(x.matches){
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
            }

        });
        burger.classList.toggle('toggle');
        toggleNav();
     }
     });   
}
var x = window.matchMedia("(max-width: 768px)")
navSlide(x);

var nav = false;

function openNav() {
document.body.style.overflowY = "hidden";
  nav = true;}

function closeNav() {
  document.body.style.overflowY = "visible";
  nav = false;             }

function toggleNav() {
  nav ? closeNav() : openNav();
}

const burgerSlide=()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const area= document.querySelector('.link-burger');

    area.addEventListener('mouseover',()=>{
        nav.classList.add('nav-hover');
    });
    area.addEventListener('mouseout',()=>{
        nav.classList.remove('nav-hover');
    });
}
burgerSlide();

