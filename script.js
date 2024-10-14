const slider = document.querySelector('.slider');



let X = -105;

setInterval(() => {
    slider.style.transform = `translateY(${X}px)`;
    X -= 105; 
    
    if (X ===  -105 * 3) {
        X = 0;
    }
}, 800);
