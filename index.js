const catalogGrid = document.querySelector('.catalog__grid');

const deskW = 1520;
const padTop = 112;
const padLeft = 382;

var canvas = document.getElementById("overlay-catalog");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#F9F9F9"
ctx.fillRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);


document.querySelectorAll('.catalog__name').forEach((item, i) => {
  item.addEventListener('mouseover', () => {
    /* задний фон для названия */
    let left = (document.documentElement.clientWidth - deskW) / 2;
    let top = item.offsetTop + padTop; 
    let right = padLeft;
    let bottom = item.getBoundingClientRect().height - 1;
    ctx.clearRect(left, top, right, bottom);
  
    /* большой задний фон для списка товаров */
    top = padTop;
    left += padLeft;
    right = deskW - padLeft;
    bottom = 900;
    ctx.clearRect(left, top, right, bottom);

    catalogGrid.classList.add('active');
  });

  item.addEventListener('mouseout', () => {
    let left = (document.documentElement.clientWidth - deskW) / 2;
    let top = item.offsetTop + padTop; 
    let right = padLeft;
    let bottom = item.getBoundingClientRect().height - 1;
    ctx.fillRect(left, top, right, bottom);
  });
})

