var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullestes:true,
      clickable:true,
    },
    autoplay:{
      delay:3000
    },
    loop:true,

    navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev"
    }

  });