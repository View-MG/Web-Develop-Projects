const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateSlider() {
    var x = document.getElementsByClassName("slide");
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
      }
    x[currentIndex].classList.add("active");
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) currentIndex--;
    else currentIndex = slides.length - 1;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) currentIndex++;
    else currentIndex = 0;
    updateSlider();
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.dataset.index);
        updateSlider();
    });
});

updateSlider();

document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
    
    links.forEach((link) => {
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
  
  // เพิ่มการเลื่อนหน้าจอไปยัง section ที่คลิก
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetSection = document.querySelector(link.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });