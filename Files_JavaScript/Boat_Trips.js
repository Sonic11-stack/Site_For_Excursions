document.addEventListener("DOMContentLoaded", function() {
    const words = document.querySelectorAll
    (".Background, .Number_Phone");
    
    words.forEach((word, index) => {
      setTimeout(() => {
        word.style.opacity = "1";
      }, index * 1000); 
    });
  });
  