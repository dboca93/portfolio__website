// Initial animation
gsap.from('.roll', { 
    duration: 3, 
    x: '-145%', 
    ease: 'bounce'
    // ease: 'power2.out' // You can change easing function as per your preference
  });
  


  
// Hide the text initially
gsap.set(".mood", {autoAlpha: 0});

// Animate the text to appear and then disappear
gsap.timeline()
    .to(".mood", {
        duration: 1, // Adjust duration as needed
        autoAlpha: 1, // Make the text visible
        ease: "power2.out",
        delay: 3
    })
    .to(".mood", {
        duration: 1, // Adjust duration as needed
        autoAlpha: 0, // Make the text invisible
        ease: "power2.in",
        delay: 1 // Adjust this delay as needed for the text to stay visible briefly before disappearing
    });


// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
  
    // Select all paragraphs and navigation links
    const paragraphs = document.querySelectorAll(".kard");
    const navigationLinks = document.querySelectorAll(".nav__container a");
    
      // Function to show a specific paragraph and hide others
  function showParagraph(paragraphId) {
    paragraphs.forEach(i => {
      if (i.id === paragraphId) {
        i.style.display = "block";
      } else {
        i.style.display = "none";
      }
    });
  }

  // Initially show the "Professional Summary" paragraph
  showParagraph("professional-summary");

  // Add click event listeners to navigation links
  navigationLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      showParagraph(targetId);
    });
  });
});

// so its saying when you click on one of the links, if the href 
// of the link you've clicked corresponds to one of id-names of a 
// paragraph found within the paragraphs const, the change the id 
// of said div to display: block; 