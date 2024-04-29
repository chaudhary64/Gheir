let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');

let cover1 = document.getElementById('cover1');
let cover2 = document.getElementById('cover2');
let cover3 = document.getElementById('cover3');

number1.addEventListener('mouseenter',()=>{
    cover1.style.left = '50%';
    cover1.style.opacity = '1';
})

number1.addEventListener('mouseleave',()=>{
    cover1.style.left = '25%';
    cover1.style.opacity = '0';
})

number2.addEventListener('mouseenter',()=>{
    cover2.style.left = '50%';
    cover2.style.opacity = '1';
})

number2.addEventListener('mouseleave',()=>{
    cover2.style.left = '25%';
    cover2.style.opacity = '0';
})

number3.addEventListener('mouseenter',()=>{
    cover3.style.left = '50%';
    cover3.style.opacity = '1';
})

number3.addEventListener('mouseleave',()=>{
    cover3.style.left = '25%';
    cover3.style.opacity = '0';
})