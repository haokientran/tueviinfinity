
$(".header .header__bars").on('click', function () {

  var selector = $(".header .header__nav")
  var heroimg = $(".hero .hero__img")

  if (selector.hasClass('shown')) {
    heroimg.show();
    selector.css('right', "100%");
    selector.removeClass('shown');
  } else {
    heroimg.hide();
    selector.css('right', "0");
    selector.addClass('shown');
  }
});

$(".header .header__nav span").on('click', function () {

  var selector = $(".header .header__nav")
  var heroimg = $(".hero .hero__img")

  if (selector.hasClass('shown')) {
    heroimg.show();
    selector.css('right', "100%");
    selector.removeClass('shown');
  } else {
    heroimg.hide();
    selector.css('right', "0");
    selector.addClass('shown');
  }
});

var serviceSlider = new Swiper(".testimonial__slider", {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.arrow-button-next',
    prevEl: '.arrow-button-prev',
  },
});

var menu = ['<img src="assets/images/feedback-logo-small.png" alt="feedback logo">', '<img src="assets/images/feedback-logo-small.png" alt="feedback logo">', '<img src="assets/images/feedback-logo-small.png" alt="feedback logo">',  '<img src="assets/images/feedback-logo-small.png" alt="feedback logo">'];
var testimonialswiper = new Swiper ('.testimonial__swiper', {
  loop: true,
  slidesPerView: 1,
  speed: 800,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-custom-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
  },
})

$(".video__video-thumbnail").on('click', function(){
  $(".video__video-thumbnail").css("display", "none");
  $(".video__video-video").css("display", "block");
});

var videoswiper = new Swiper ('.video__swiper', {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
    },
    767.98: {
      slidesPerView: 3,
    },
    991.98: {
      slidesPerView: 4,
    },
  }
})

var clientSlider = new Swiper(".clients__slider", {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
    },
    767.98: {
      slidesPerView: 3,
    },
    991.98: {
      slidesPerView: 4,
    },
  }
});

function heightFix() {
  var biggestHeight = 0;
  // Loop through elements children to find & set the biggest height
  $(".height-fix *").each(function () {
    // If this elements height is bigger than the biggestHeight
    if ($(this).height() > biggestHeight) {
      // Set the biggestHeight to this Height
      biggestHeight = $(this).height();
    }
  });

  // Set the container height
  $(".height-fix").height(biggestHeight);
}

heightFix();

$(window).on('resize', function () {
  heightFix();
});

$('.card').on('hide.bs.collapse', function (e) {
  console.log("Hidden");
  var parentId = $(e.target).parent().attr('id');
  $(`#${parentId} > .card-header > h5`).addClass('hidden');
});

$('.card').on('show.bs.collapse', function (e) {
  console.log("Shown");
  var parentId = $(e.target).parent().attr('id');
  $(`#${parentId} > .card-header > h5`).removeClass('hidden');
});

$(window).on('load', function () {
  heightFix();
});