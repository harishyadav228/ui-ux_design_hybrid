
const primaryColors = document.querySelector('.primary-color');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const background = document.querySelector('.background');
const h1 = document.querySelector('.heading');
const p = document.querySelectorAll('main p');


red.addEventListener('click', function () {
    background.style.cssText = `background: url('img/red.png') no-repeat 95%/cover;`;
    h1.textContent = 'Red'
    p[0].textContent = 'rgb(255, 0, 0)'
    p[1].textContent = 'hsl(0, 100, 50)'
    p[2].textContent = '#ff0000'
})


blue.addEventListener('click', function () {
    background.style.cssText = `background: url('img/blue.png') no-repeat 95%/cover;`;
    h1.textContent = 'Blue'
    p[0].textContent = 'rgb(0, 0, 255)'
    p[1].textContent = 'hsl(240, 100, 50)'
    p[2].textContent = '#0000ff'
})


yellow.addEventListener('click', function () {
    background.style.cssText = `background: url('img/yellow.png') no-repeat 95%/cover;`;
    h1.textContent = 'Yellow'
    p[0].textContent = 'rgb(255, 255, 0)'
    p[1].textContent = 'hsl(60, 100, 50)'
    p[2].textContent = '#ffff00'
})


primaryColors.addEventListener('click', function () {
    background.style.cssText = `background: url('img/primary-colors.png') no-repeat 95%/cover;`;
    h1.textContent = 'Primary Colors'
    p[0].textContent = 'Red'
    p[1].textContent = 'Yellow'
    p[2].textContent = 'Blue'
})