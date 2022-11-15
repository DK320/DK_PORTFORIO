/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    var ScrollBorder = function(){
        const targetElement = document.querySelectorAll(".animetionTarget");
        for(let i=0;i<targetElement.length;i++){
            const getElementDistance = targetElement[i].getBoundingClientRect().top
            console.log(targetElement[i])
            console.log("画面の高さ",window.innerHeight)
            console.log(targetElement[i].getBoundingClientRect().top)
            console.log(getElementDistance)

            if(window.innerHeight*0.8 > getElementDistance){
                targetElement[i].classList.add("run")
            }
        }
        const targetElement_run = document.querySelectorAll(".run");
        for(let i=0;i<targetElement_run.length;i++){
            const getElementDistance = targetElement_run[i].getBoundingClientRect().top
            console.log(targetElement[i])
            console.log("画面の高さ",window.innerHeight)
            console.log(targetElement[i].getBoundingClientRect().top)
            console.log(getElementDistance)

            if(100 > getElementDistance){
                targetElement_run[i].classList.remove("run")
            }else if(getElementDistance > window.innerHeight){
                targetElement_run[i].classList.remove("run")
            }
        }
    }
    ScrollBorder();
    document.addEventListener('scroll',ScrollBorder);


});
