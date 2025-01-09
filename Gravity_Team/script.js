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


function setupSlideshow(slideshowId, direction) {
  const slidesElement = document.querySelector(`#${slideshowId} .slideshow-content`);
  const totalSlides = document.querySelectorAll(`#${slideshowId} .slide-item`).length;
  const slideHeight = 15;
  let position = (direction === -1) ? (totalSlides - 1) * slideHeight : 0;
  let isPaused = false;

  function smoothScroll() {
    if (!isPaused) {
      position += 0.1 * direction;
      if (position >= (totalSlides - 1) * slideHeight) {
        direction = -1; // เปลี่ยนเป็นเลื่อนลงเมื่อถึงขอบบน
      } else if (position <= 0) {
        direction = 1; // เปลี่ยนเป็นเลื่อนขึ้นเมื่อถึงขอบล่าง
      }
      slidesElement.style.transform = `translateY(-${position}%)`;
    }
  }

  const scrollInterval = setInterval(smoothScroll, 16);

  const slideshowContainer = document.getElementById(slideshowId);
  slideshowContainer.addEventListener('mouseenter', () => {
    isPaused = true;
  });
  slideshowContainer.addEventListener('mouseleave', () => {
    isPaused = false;
  });
}

// ตั้งค่าสไลด์โชว์: slideshow1 เลื่อนขึ้น, slideshow2 เลื่อนลง
setupSlideshow('slideshow1', 1);  // เลื่อนขึ้น
setupSlideshow('slideshow2', -1); // เลื่อนลง