$(function () {

  // スマホ画面だけタップで電話できる機能
  var $iPhone = navigator.userAgent.toLowerCase().indexOf('iphone');
  var $Android = navigator.userAgent.toLowerCase().indexOf('android');
  if ($iPhone != -1 || $Android != -1) {
    $('[data-tapTel]').html('<a class="tel-link" href="tel:011-206-0311">011-206-0311</a>');
  }

  // メインビジュアルのスライドショー

  var $slides = $('#slideShow > ul > li');
  var delay = 7000;
  var duration = 1000;

  var total = $slides.length;
  var i = 0;

  function showNextSlide() {
    var current = i;
    i = (i + 1) % total;
    $slides.eq(i).velocity('fadeIn', { duration: duration, delay: delay });
    $slides.eq(current).velocity('fadeOut', { duration: duration, delay: delay, complete: showNextSlide });
  }

  $slides.eq(0).velocity('fadeIn', { duration: 500 });
  $('.first-catch').addClass('catch-active');
  showNextSlide();

  // pointセクションの「もっと詳しく」ボタン

  var $healthBeautyBtn = $('#healthBeauty');
  var $manToManBtn = $('#manToMan');
  var $closeBtn = $('.detail-close-btn');

  var $healthBeauty = $('.health-beauty-detail');
  var $manToMan = $('.man-to-man-detail');
  var $2concept = $('.health-beauty-detail, .man-to-man-detail');

  $healthBeautyBtn.click(function () {
    $healthBeauty.fadeIn(300);
  });
  $manToManBtn.click(function () {
    $manToMan.fadeIn(300);
  });
  $closeBtn.click(function () {
    $2concept.fadeOut(300);
  });

  // オーガニックカラーセクションのホバーアクション

  var $villaLodola = $('.villa-lodola');
  var $villaLodolaDetail = $('.villa-lodola-detail-wrap');
  var $henna = $('.henna');
  var $hennaDetail = $('.henna-detail-wrap');

  $villaLodola.hover(
    function () {
      $villaLodolaDetail.stop().fadeIn();
    },
    function () {
      $villaLodolaDetail.stop().fadeOut();
    }
  );

  $henna.hover(
    function () {
      $hennaDetail.stop().fadeIn();
    },
    function () {
      $hennaDetail.stop().fadeOut();
    }
  );

  return false;
});