
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


const swiper2 = new Swiper('.swiper-customers', {
    slidesPerView: 1,
    direction: 'horizontal',
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      465: {
        centeredSlides: false,
        slidesPerView: 1.3,
        spaceBetween: 30,
      },
      530: {
        centeredSlides: false,
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      635: {
        centeredSlides: false,
        slidesPerView: 1.8,
        spaceBetween: 30,
      },
      701: {
        centeredSlides: false,
        slidesPerView: 2,
        spaceBetween: 30,
      },
      805: {
        centeredSlides: false,
        slidesPerView: 2.3,
        spaceBetween: 30,
      },
      930: {
        centeredSlides: false,
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1050: {
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
});

const swiper = new Swiper('.swiper-blog', {
    slidesPerView: 1,
    direction: 'horizontal',
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      465: {
        centeredSlides: false,
        slidesPerView: 1.3,
        spaceBetween: 30,
      },
      530: {
        centeredSlides: false,
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      635: {
        centeredSlides: false,
        slidesPerView: 1.8,
        spaceBetween: 30,
      },
      701: {
        centeredSlides: false,
        slidesPerView: 2,
        spaceBetween: 30,
      },
      805: {
        centeredSlides: false,
        slidesPerView: 2.3,
        spaceBetween: 30,
      },
      930: {
        centeredSlides: false,
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1050: {
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
});


