document.addEventListener("DOMContentLoaded", function() {
    const words = document.querySelectorAll
    (".Background, .Number_Phone, .Exc_1, .Exc_2, .Logotip, Square_1, Square_2, Square_3, Square_4, Square_5, Square_6, Square_7, Square_8, ");
    
    words.forEach((word, index) => {
      setTimeout(() => {
        word.style.opacity = "1";
      }, index * 1000); 
    });
  });
  