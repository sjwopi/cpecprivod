const modalLogin = document.querySelector('.modalLogin');
const modalRegister = document.querySelector('.modalRegister');
const modalRegisterUr = document.querySelector('.modalRegisterUr');
const modalCall = document.querySelector('.modalCall');
const Body = document.body;

/* переключение между физ и юр лицом */
modalRegister.querySelector('.btnToUr').addEventListener('click', (e) => {
  e.preventDefault();
  modalRegister.classList.remove('active');
  modalRegisterUr.classList.add('active');
});
modalRegisterUr.querySelector('.btnToFiz').addEventListener('click', (e) => {
  e.preventDefault();
  modalRegister.classList.add('active');
  modalRegisterUr.classList.remove('active');
});

/* переключение между войти и зарегестрироваться */
modalLogin.querySelector('.btnChangeGo').addEventListener('click', (e) => {
  e.preventDefault();
  modalLogin.classList.remove('active');
  modalRegister.classList.add('active');
})
modalRegister.querySelector('.btnChangeGo').addEventListener('click', (e) => {
  e.preventDefault();
  modalLogin.classList.add('active');
  modalRegister.classList.remove('active');
})
/* Переход на страничку профиля после нажатия на вход или регистрация */
document.querySelectorAll('.btnGo').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = "./profile.html";
  })
})
/* Открытие модалки по нажатия на иконку профиля */
document.querySelector(".head-profile").addEventListener('click', () => {
  modalLogin.classList.add('active');
  Body.classList.add('open')
})

/* Открытие модалки по нажатия на заказать звонок */
document.querySelectorAll('.callBtn').forEach(item => {
  item.addEventListener('click', () => {
    modalCall.classList.add('active');
    Body.classList.add('open')
  })
})


/* Закрытие на оверлэй */
document.querySelectorAll('.modal__back').forEach(item =>
  item.addEventListener("click", () => {
    modalLogin.classList.remove('active');
    modalRegisterUr.classList.remove('active');
    modalRegister.classList.remove('active');
    modalCall.classList.remove('active');
    Body.classList.remove('open')
  })
)
/* Закрытие на крестик */
document.querySelectorAll('.modal__close').forEach(item =>
  item.addEventListener("click", () => {
    modalLogin.classList.remove('active');
    modalRegisterUr.classList.remove('active');
    modalRegister.classList.remove('active');
    modalCall.classList.remove('active');
    Body.classList.remove('open')
  })
)