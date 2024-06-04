console.log('this')

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


  // now I need a click event so that when my top-right 
  // corner menu is clicked, the dropdown menu stays there 
  // until the cross in the top right corner is clicked. 



  const icon__S = document.querySelector('.icon__container'); 
  const dropdown__S = document.querySelector('.dropdown__menu'); 
  const cross__S = document.getElementById('cross') ; 

  function showDropdown() {
    dropdown__S.style.display = 'flex'; 
  }

  function hideDropdown() {
    dropdown__S.style.display = 'none'; 
  }

  icon__S.addEventListener('mouseover', showDropdown); 
  icon__S.addEventListener('mouseout', hideDropdown); 


  // Event listener for click
icon__S.addEventListener('click', function(event) {
    icon__S.removeEventListener('mouseout', hideDropdown);
    dropdown__S.style.display = 'flex'; 
});

// to close the dropdown menu; 

cross__S.addEventListener('click', function(event) {
    event.stopPropagation(); 
    hideDropdown(); 
})



/* The following is so that when we visit the contact 
page, we can visit the previous page via hitting the link
in the top right corner and not just visit the home page*/

