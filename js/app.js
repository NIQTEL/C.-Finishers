
/* ************ Animation Forms ************ */

const Container__form = document.querySelector(".container__form-login");
const login = document.querySelector(".login__link");
const register = document.querySelector(".register__link");

register.addEventListener('click', () =>{
    Container__form.classList.add('active');
});

login.addEventListener('click', () =>{
    Container__form.classList.remove('active');
});

/* ************ Swiper ************ */


  const swiper = new Swiper('.about__us-container', {
    // Optional parameters
    loop: true,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
