$(document).on('ready', function () {
      
    $(".testimonial__slider").slick({
      infinite: true,
      nextArrow: '.testimonials__next-btn',
      prevArrow: '.testimonials__prev-btn',
    });  
  
});
    
(() => {
  const refs = {
    makeLong: document.querySelector("[data-makeLong]"),
    makeShort: document.querySelector("[data-makeShort]"),
    description: document.querySelector("[data-description]"),
  };

  refs.makeLong.addEventListener("click", toggleModal);
  refs.makeShort.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.description.classList.toggle("testimonial__description--long");
  }
})();