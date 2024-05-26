document.addEventListener('DOMContentLoaded', () => {
      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  if (entry.target.classList.contains('slide-left')) {
                      entry.target.classList.add('slide-in-left');
                  } else if (entry.target.classList.contains('slide-right')) {
                      entry.target.classList.add('slide-in-right');
                  }
                  observer.unobserve(entry.target); 
              }
          });
      }, { threshold: 0.1 });
  
      document.querySelectorAll('.menu-select').forEach(select => {
          observer.observe(select);
      });
  });
  