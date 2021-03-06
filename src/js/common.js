$(document).ready(function () {
  lazy();
  tradersSlider();
  slider();
  feed();
  inputs();
  submit();
});
//загрузка видео после загрузки всей страницы
window.addEventListener('load', 
    function() { 
      setTimeout(function() {
        backgroundVideo();
      }, 1000)
  }, false);

$(window).resize(function () {
  innerWidth = $('body').innerWidth();
});

var innerWidth = $('body').innerWidth(),
videoLoaded;


//inputs
function inputs() {

  $('select').selectric();

  function addRub (val) {
    return val + " $";
  }
  
  function removeUsd (val) {
    val = val.replace(" $", "");
      val = val.replace("$", "");
      val = val.replace(" ", "");
      return val;
  }
  $('.usd-input').bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
    this.value = this.value.replace(/[^0-9 $]/g, '');
    }
  });
  
  $(".usd-input").on("input", function () {
    var $this = $(this);
      var val = $this.prop("value");
      var newVal = removeUsd(val);
      newVal = addRub(newVal);
      $this.prop("value", newVal);
  });
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
  $(".news-feed__list").liScroll({travelocity: 0.1});
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
  var slider = $('.trades-slider'),
      $tabLink = $('.trades-slide__container'),
      $tab = $('.trades__chart-tab');

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
          slidesToShow: 4,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });
  slider.on('afterChange', function(){
    lazy();
  });

  //tabs
  $tabLink.on('click', function(event) {
    event.preventDefault();
    var id = $(this).attr('href');
    $tabLink.parent().removeClass('trades-slide_active');
    $(this).parent().addClass('trades-slide_active');
    $tab.removeClass('trades__chart-tab_visible');
    $(id).addClass('trades__chart-tab_visible');
    stateTabs();
  })

  function stateTabs() {
    $tab.hide();
    $tab.each(function() {
      if($(this).hasClass('trades__chart-tab_visible')) {
        $(this).fadeIn(300);
      }
    })
  }
}

//submit
function submit() {
  var requiredInput = $('.input_required'),
      checkbox = $('.checkbox__input'),
      form = $('.home-form__form');

  form.submit(function(e) {
    var empty = $(this).find(requiredInput).filter(function() {
      return this.value === "";
    });
    if (!empty.length && checkbox.prop("checked")) {
      //Если все графы заполнены и согласие дано, то показываем popup
      thanksPopup();
      //очищаем все данные полей, кроме кнопок
      form.find('input').not(':button, :submit').val('');
      checkbox.prop('checked', false);
    }
    e.preventDefault();
  });
}

function thanksPopup() {
  var popup = $('.popup-thanks');

  popup.fadeIn(300);
  setTimeout(function() {
    popup.fadeOut(300);
  }, 2500)
}
