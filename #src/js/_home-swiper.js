new Swiper('.home__swiper-container', {

  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.home__swiper-pagination',
  },

  navigation: {
    nextEl: '.home__button-next',
    prevEl: '.home__button-prev',
  },

  scrollbar: {
    el: '.home__swiper-scrollbar',
  },

  spaceBetween: 20,

  slidesPerView: 1
})
