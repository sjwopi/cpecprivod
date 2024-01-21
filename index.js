const catalogGrid = document.querySelector('.catalog__grid');
const catNav = document.querySelector('.catalog__nav')

const deskW = 1520;

var canvas = document.getElementById("overlay-catalog");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "#F9F9F9"
  ctx.fillRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
  catalogGrid.classList.remove('active');


const catName = catNav.querySelectorAll('.catalog__name').forEach((item, i) => {
  item.addEventListener('mouseover', (e) => {
    /* задний фон для названия */
    let left = (document.documentElement.clientWidth - deskW) / 2;
    console.log(item.getClientRects())
    let top = item.offsetTop + 122; 
    let right = 400;
    let bottom = item.getBoundingClientRect().height - 4;
    ctx.clearRect(left, top, right, bottom);
  
    /* большой задний фон для списка товаров */
    left += 385;
    top = 122;
    right = 1130;
    bottom = 900;
    ctx.clearRect(left, top, right, bottom);

    catalogGrid.classList.add('active');
  });

  item.addEventListener('mouseout', (e) => {
    ctx.fillRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
    catalogGrid.classList.remove('active');
  });

})
/* 
function eventForGrid() {
  mainOverlay.classList.add('active');
  catalogGrid.classList.add('active');
};

catNav.addEventListener('mouseover', () => {
  catalogGrid.addEventListener('mouseover', () => {
    catalogGrid.classList.add('active');
  });
});

catalogGrid.addEventListener('mouseout', () => {
  //mainOverlay.classList.remove('active');

  setTimeout(() => {
    if (document.mouse)
    mainOverlay.classList.remove('active');
    catalogGrid.classList.remove('active');
  }, 5000)
});
 */