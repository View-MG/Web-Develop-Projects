let currentIndex = 0;

const backgroundColors = [
    '#188494',  // สีสำหรับสไลด์แรก
    '#708c6c',  // สีสำหรับสไลด์ที่สอง
    '#db9376'   // สีสำหรับสไลด์ที่สาม
];


function updateSlider(currentIndex) {
    const slides = document.querySelectorAll('.slideshow-box');
    const background_keyword = document.querySelectorAll('.keyword');
    
    slides.forEach(slide => slide.classList.remove('active'));
    background_keyword.forEach(keyword => keyword.classList.remove('active'));
    
    slides[currentIndex].classList.add('active');
    background_keyword[currentIndex].classList.add('active');
    // เปลี่ยนสีพื้นหลังของหน้า
    const body = document.querySelector('body');
    body.style.backgroundColor = backgroundColors[currentIndex];

}

updateSlider(0);



    