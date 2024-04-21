
const svg = document.querySelector('.background svg path');
const svgPath = svg.getAttribute('d');
const svgNewPath = "M-446,1199C-446,1199 -843,362.333 -744,297C-645,231.667 -598,-159.333 -499,-216C-400.64,-272.3 4.841,-158.333 158,-246C523.479,-455.196 796.667,-84.333 895,-172C993.333,-259.667 1281.67,35.667 1392,-52C1502.33,-139.667 2054,-52 2054,-52L2054,1206L-446,1199Z";

const btn = document.querySelector('section button');
const btnBack = document.querySelector('header button');
const main = document.querySelector('main')

btn.addEventListener('click', ()=> {
    svg.setAttribute('d', svgNewPath);
    btn.classList.add('btn-fade');
    
 
    setTimeout(() => {
        main.classList.add('main-active')
    }, 400);
    
})


btnBack.addEventListener('click', () => {
    svg.setAttribute('d', svgPath);
    main.classList.remove('main-active')
    
    setTimeout(() => {
        btn.classList.remove('btn-fade')
    }, 800);
    
})

