let arrowHeader = document.querySelector('.arrow__img'),
    bgBlue = document.querySelector('.blue'),
    delLi = document.querySelector('.nav__item'),
    nav = document.querySelector('.nav'),
    headerImg = document.querySelector('.header__img'),
    prevBtn = document.querySelector('.prev'),
    rightBtn = document.querySelector('.right'),
    slider = document.querySelectorAll('.slider__item'),
    slideIndex = 1;

showSlides(slideIndex);
function showSlides(n) {
    if (n < 1) {
        slideIndex = slider.length;
    } else if (n > slider.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = 'none';
    }
    slider[slideIndex - 1].style.display = 'flex';
}

function plusSlider(n) {
    showSlides(slideIndex += n);
}

prevBtn.addEventListener('click', () => {
    plusSlider(-1)
})
rightBtn.addEventListener('click', () => {
    plusSlider(1)
})

arrowHeader.addEventListener('click', () => {
    handlerClick();
})

function handlerClick() {
    if(bgBlue.style.backgroundColor !== "white") {
        bgBlue.style.backgroundColor = "white";
        arrowHeader.style.transform = 'rotateX(180deg)';
        delLi.querySelectorAll('li').forEach((n) => n.style.display = 'none');
        nav.style.width = 'auto';
        headerImg.style.backgroundImage = 'url(./img/logoBlack.svg)';
        
    } else {
        bgBlue.style.backgroundColor = "#1E78FF";
        arrowHeader.style.transform = 'rotateY(180deg)';
        delLi.querySelectorAll('li').forEach((n) => n.style.display = 'block');
        nav.style.width = '40%';
        headerImg.style.backgroundImage = 'url(./img/logo.svg)';
    }
}
