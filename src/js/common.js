$(document).ready(function () {
  lazy();
  tradersSlider();
  slider();
  feed();
  inputs();
});
//загрузка видео после загрузки всей страницы
window.addEventListener('load', 
    function() { 
     setTimeout(function() {
      backgroundVideo();
     }, 1500)
  }, false);

$(window).resize(function () {
  innerWidth = $('body').innerWidth();
});

var innerWidth = $('body').innerWidth(),
videoLoaded;


//inputs
function inputs() {
  $('select').selectric();
}
//lazy
function lazy() {
  $(".lazy").Lazy({
    visibleOnly: true,
    threshold: '',
    effect: 'fadeIn',
    effectTime: '300'
  });
}
//bg
function backgroundVideo() {
    $('.jquery-background-video-wrapper').append('<video class="my-background-video jquery-background-video" loop autoplay muted playsinline><source class="video-source" src="videos/optimazed.mp4" type="video/mp4"><source class="video-source" src="videos/optimazed.webm" type="video/webm"></video>');
    $('.my-background-video').bgVideo ({
      fullScreen : false, 
      fadeIn : 500,
      fadeOnPause : false,
      fadeOnEnd : true,
      showPausePlay: false
    });
    videoLoaded = true;
}

//rss feed
function feed() {
  $('.news-feed__list').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: true,
    touchThreshold: 40,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          adaptiveHeight:true
        }
      }
    ]
  });
}
//relevance-slider
function slider() {
  var slider = $('.relevance-slider');

  slider.slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    touchThreshold: 20,
    adaptiveHeight:true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false
        }
      }
    ]
  });
}

//traders-slider
function tradersSlider() {
  var slider = $('.trades-slider');

  slider.slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    touchThreshold: 20,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  slider.on('afterChange', function(){
    lazy();
  });
}
