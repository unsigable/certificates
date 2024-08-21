var swiper = new Swiper('.swiper-container', 
  {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '2',
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    loop:true,
    autoplay: {
       delay: 4500,
       disableOnInteraction: false,
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
  });