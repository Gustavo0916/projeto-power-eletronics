/** INICIO SLIDER PRODUTOS **/

$(document).ready(function(){
    $('.js-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 2,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
  ]
  });
});

const myObserver = new IntersectionObserver( (entries) => {
  entries.forEach( (entry) => {
      if(entry.isIntersecting){
          entry.target.classList.add('show')
      } else {
          entry.target.classList.remove('show')
      }
  })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((elements ) => myObserver.observe(elements))

/** FIM SLIDER PRODUTOS **/





/** SLIDER BLOG **/
$('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('.next'),
  prevArrow: $('.prev')
});



