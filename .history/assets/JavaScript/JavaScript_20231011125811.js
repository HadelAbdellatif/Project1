// *************  Start Loading ************* //
 
const loading = document.querySelector('.loading');

window.addEventListener('load', function(){
     this.setTimeout(function(){
        loading.classList.add('opacity-0', 'invisible');
        document.body.style.overflow = 'auto';
     }, 2000)
})

// *************  End of Loading ************* //

// *************  Start scroll-to-top ************* //

const ScrollToTop = document.querySelector('.scroll-to-top');
const aboutSection = document.querySelector('.about');

ScrollToTop.addEventListener('click', function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})

// *************  End scroll-to-top ************* //

// *************  Start Navbar ************* //

const navbar = document.querySelector('.navbar');
const headerContenth = document.querySelector('.header-content h3');

navbar.style.transition = '0.4s background-color';

window.addEventListener('scroll', function(){
    if(window.scrollY > headerContenth.offsetTop){
         navbar.style.backgroundColor = "#fff";
    }
    else{
        navbar.style.backgroundColor = "transparent";
    }
    if(window.scrollY > aboutSection.offsetTop){
        ScrollToTop.classList.remove('opacity-0', 'invisible');
    }
    else{
        ScrollToTop.classList.add('opacity-0', 'invisible');
    }
})

// *************  End of Navbar ************* //

// *************  Start Links ************* //

const NavLinks = document.querySelectorAll('.nav-link');

for(let i=0 ; i<NavLinks.length ; i++){
    NavLinks[i].addEventListener('click', function(e){
        e.preventDefault();
        
        document.querySelector('.nav-link.active').classList.remove('active');
        
       // for(let j=0 ; j<NavLinks.length ; j++){
        //    NavLinks[j].classList.remove('active');
       // }

        NavLinks[i].classList.add('active');
        let currentID = this.getAttribute('href');
        let targerSection = document.querySelector(currentID);
        window.scroll({
            top:targerSection.offsetTop,
            behavior:"smooth"
        })
    })
}

// *************  End of Links ************* //

