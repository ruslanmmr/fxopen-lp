$(document).ready(function () {
  lazy();
  feed();
  slider();
});
//загрузка видео после загрузки всей страницы
window.addEventListener('load', 
    function() { 
      backgroundVideo();
  }, false);

$(window).resize(function () {
  innerWidth = $('body').innerWidth();
});

var innerWidth = $('body').innerWidth(),
videoLoaded;

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
