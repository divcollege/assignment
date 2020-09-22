const model = document.querySelector('.modal');
const close = document.querySelector('.close');
const timer = document.querySelector('.timer');

setTimeout(function () {
    model.style.display = 'block';
}, 2000);


close.addEventListener('click', function () {
    model.style.display = 'none';
});
let i = 10;
const autoClose = setInterval(function () {
    timer.textContent = `${i} s before closing popUp`;
    i--;
}, 1000);
setTimeout(function () {
    clearInterval(autoClose);
    model.style.display = 'none';
}, 11000)



