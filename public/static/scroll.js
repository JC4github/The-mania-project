let mode1 = document.querySelector('.mode1');
const mode2 = document.querySelector('.mode2');
const mode3 = document.querySelector('.mode3');
const mode4 = document.querySelector('.mode4');


window.addEventListener('scroll', function() {
    console.log('scrolling');
    const clientHeight = document.documentElement.clientHeight;
    const mode1Y = mode1.getBoundingClientRect().y;

    if(clientHeight > mode1Y){
        mode1.style.animation = 'fadeInLeft 0.4s ease-in forwards';
    }

});