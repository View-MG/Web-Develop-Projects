document.addEventListener("DOMContentLoaded", () => {
    const banners = document.getElementsByClassName("banner");
    const infoContainer = document.querySelector(".info");
    const sidebar = document.querySelector(".side-bar");   
    let currentIndex = 0;
    let autoSlideInterval;

    function updateSlide(direction) {
        const totalBanners = banners.length;
        if (direction === "next") {
            currentIndex = (currentIndex + 1) % totalBanners;
        } else if (direction === "prev") {
            currentIndex = (currentIndex - 1 + totalBanners) % totalBanners;
        }
        const offset = currentIndex * 575; 
        infoContainer.scrollTo({ left: offset, behavior: "smooth" });
        sidebar.scrollTo({ left: offset, behavior: 'smooth'});
    }

    function getRandomInterval() {
        return Math.floor(Math.random() * (10 - 3 + 1)) + 3;
    }
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            updateSlide("next");
            resetAutoSlide();
        }, getRandomInterval() * 1000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    document.getElementById("NextBtn").addEventListener("click", () => {
        updateSlide("next");
        resetAutoSlide();
    });

    document.getElementById("PrevBtn").addEventListener("click", () => {
        updateSlide("prev");
        resetAutoSlide();
    });

    startAutoSlide();
});


function toggleExpand(n) {
    var x = document.getElementsByClassName("toggle-button");
    var y = document.getElementsByClassName("dropdown-content");
    if (x[n].classList.contains('expanded')) {
        x[n].classList.remove('expanded');
        x[n].classList.add('collapsed');
    } else {
        x[n].classList.remove('collapsed');
        x[n].classList.add('expanded');
    }
    if (y[n].style.display === "none" || y[n].style.display === "") {
        y[n].style.display = "block";
    } else {
        y[n].style.display = "none";
    }
}

document.querySelectorAll('.small-img').forEach(item => {
    let mainImage = item.closest('.product').querySelector('.main-img');
    let originalSrc = mainImage.src;
    item.addEventListener('mouseover', function() {
        mainImage.src = this.src;
    });
    item.addEventListener('mouseout', function() {
        mainImage.src = originalSrc;
    });
});

document.addEventListener("scroll", () => {
    const navBar = document.querySelector('.nav-bar');
    const subBar = document.querySelector('.sub-bar');
    const sideBar = document.querySelector('.side-bar');
  
    const navBarHeight = navBar.offsetHeight;
    const subBarHeight = subBar.offsetHeight;
  
    if (window.scrollY > navBarHeight) {
      subBar.style.top = "0";
      subBar.style.position = "fixed";
      // ปรับตำแหน่ง sidebar
      sideBar.style.top = `${subBarHeight}px`;
    } else {
      // แสดง navbar
      navBar.style.transform = "translateY(0%)";
      subBar.style.position = "absolute";
      // คืนค่าตำแหน่ง subbar
      subBar.style.top = `${navBarHeight}px`;
  
      // คืนค่าตำแหน่ง sidebar
      sideBar.style.top = `${navBarHeight + subBarHeight}px`;
    }
  });

