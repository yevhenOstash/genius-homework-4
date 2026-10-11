const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.pagination',
    clickable: true,
    bulletClass: 'pagination__dot',
    bulletActiveClass: 'pagination__dot--active',
  },
  navigation: {
    nextEl: '.carousel-arrow--right',
    prevEl: '.carousel-arrow--left',
  },
});
