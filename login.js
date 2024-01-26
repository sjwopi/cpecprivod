const modalLogin = document.querySelector('.modalLogin');
const modalRegister = document.querySelector('.modalRegister');
const modalRegisterUr = document.querySelector('.modalRegisterUr');
const modalCall = document.querySelector('.modalCall');

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

document.querySelectorAll('.btnGo').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = "./profile.html";
  })
})

document.querySelector(".head-profile").addEventListener('click', () => {
  modalLogin.classList.add('active');
})

document.querySelectorAll('.callBtn').forEach(item => {
  item.addEventListener('click', () => {
    modalCall.classList.add('active');
  })
})
