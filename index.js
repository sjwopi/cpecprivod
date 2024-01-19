const mainOverlay = document.querySelector('.main-overlay');
const catalogGrid = document.querySelector('.catalog__grid');
const catNav = document.querySelector('.catalog__nav')

catNav.addEventListener('mouseover', () => {
  mainOverlay.classList.add('active');
  catalogGrid.classList.add('active');
});
catNav.addEventListener('mouseout', () => {
  mainOverlay.classList.remove('active');
  catalogGrid.classList.remove('active');
});
