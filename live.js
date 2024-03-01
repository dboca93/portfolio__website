console.log('hello'); 

const project__Sel = document.querySelector('.proj'); 
const about__Sel = document.querySelector('.about'); 

//event listener -- hover 

about__Sel.addEventListener('mouseenter', function() {
    project__Sel.style.color = `rgb(110, 6, 242)`; 
})

// event listener -- when the mouse leaves the element 

about__Sel.addEventListener('mouseleave', function() {
    project__Sel.style.color = `rgb(36, 38, 47)`; 
})



// good, we create some event listeners for the opp

project__Sel.addEventListener('mouseenter', function() {
    about__Sel.style.color = `rgb(110, 6, 242)`; 
})

project__Sel.addEventListener('mouseleave', function() {
    about__Sel.style.color = `rgb(36, 38, 47)`; 
})


// select the image and change the dimensions during the mouseenter

const img__C = document.querySelector('.main__img__container');
const img__S = document.querySelector('.prof'); 

img__C.addEventListener('mouseover', function() {
    img__S.style.width = '580px'; 
    img__S.style.height = '580px'; 
})

img__C.addEventListener('mouseout', function() {
    img__S.style.width = ''; 
    img__S.style.height = ''; 
})