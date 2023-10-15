$(document).ready(function(){
    $('.slider').slick();

    $('.sliderTwo').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive:[
        {
          breakpoint: 1089,
          settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          }

        }
      ]
    });

    $('.slideThree__wrapper').slick({
        slidesToShow: 1
    });

});

// меню мобильное

$(".header__burger").on("click", function(){
  $(".menuMobile").toggleClass("menuMobile-active");
});
$(".cross_line").on("click", function(){
  $(".menuMobile").removeClass("menuMobile-active");
});
$('.menuMobile__wrapper-list a').click(function() {
  $('.menuMobile').removeClass('menuMobile-active');
});

//Анимация на появление при прокрутке
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('animation-show');
      }
    });
  }
  let options = {
    threshold: [0.3] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }