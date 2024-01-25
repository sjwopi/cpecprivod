if (document.documentElement.clientWidth >= 800) {

  const catalogGrid = document.querySelector('.catalog__grid');
  const catNav = document.querySelector('.catalog__nav')

  catNav.querySelectorAll('.catalog__name').forEach(item => {

    item.addEventListener('mouseover', () => {
      catalogGrid.classList.add('active');
      item.parentElement.classList.add('active');
      document.querySelector('.catalog__title_sub').textContent =  item.textContent;
    });

    item.addEventListener('mouseout', () => {
      catalogGrid.classList.remove('active');
      item.parentElement.classList.remove('active');
      document.querySelector('.catalog__title_sub').textContent =  "Сборные блоки";
    });

  })
}
