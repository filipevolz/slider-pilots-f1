const images = document.querySelectorAll('.slide');
const arrowReturn = document.getElementById('arrow-return');
const arrowAdvance = document.getElementById('arrow-advance');

let currentImage = 0;

arrowAdvance.addEventListener('click', ( ) => {
    if (currentImage === images.length - 1){
        return;
    }
    
    hideImage()

    currentImage++;
    images[currentImage].classList.add('show');

    shideOrHideArrows()
})

arrowReturn.addEventListener('click', ( ) => {
    if (currentImage === 0){
        return;
    }

    hideImage()

    currentImage--;
    images[currentImage].classList.add('show');

    shideOrHideArrows()
})

function hideImage() {
    const imageOpen = document.querySelector('.show')
    imageOpen.classList.remove('show');
}

function shideOrHideArrows() {
    if(currentImage !== 0){
        arrowReturn.classList.remove('opacity')
    }else{
        arrowReturn.classList.add('opacity')
    }

    if(currentImage !== 0 && currentImage === images.length - 1){
        arrowAdvance.classList.add('opacity')
    }else{
        arrowReturn.classList.remove('opacity')
    }
}

