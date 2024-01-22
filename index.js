const catalog = document.querySelector('.catalog')
const catalogNav = document.querySelector('.catalog__nav')
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
    /* для отрисовки "дырок" для каждого названия */
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
    /* для уменьшения карточек */
    catalogGrid.classList.add('active');
    /* для заднего фона */
    catalog.classList.add('active');
  });

  item.addEventListener('mouseout', () => {
    /* при выходе мышки все закрашивается обратно и возвращаются стили */
    ctx.fillRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
    catalogGrid.classList.remove('active');
    catalog.classList.remove('active');
  });
})
