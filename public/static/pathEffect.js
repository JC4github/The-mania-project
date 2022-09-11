import { useRef } from 'react';

let path = document.querySelector('path')
let pathLength = path.getTotalLength()
let mode1 = document.querySelector('.mode1')

path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

const ref = useRef();

document.addEventListener('scroll', () => {
    
    
    const clientHeight = document.documentElement.clientHeight;
    const mode1Y = mode1.wrapRef.getBoundingClientRect().y;

    if(clientHeight > mode1Y){
        mode1.style.animation = 'fadeInLeft 0.4s ease-in forwards';
    }

    

    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    var drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;
})
