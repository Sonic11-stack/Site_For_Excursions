document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__zoomIn');
        }
      });
    });

    document.querySelectorAll('.animate__animated').forEach(element => {
      observer.observe(element);
    });
  });