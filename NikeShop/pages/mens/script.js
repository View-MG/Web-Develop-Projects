var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var x = document.getElementsByClassName("banner");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";
}

function autoSlide() {
    plusDivs(1);
}

setInterval(autoSlide, 3000);

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