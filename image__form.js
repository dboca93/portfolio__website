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
