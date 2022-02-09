$(function(){

  //헤더 함수
  function headEffect(){
    curr = $(window).scrollTop();
    target = $('footer').outerHeight();


    //헤더 .white 추가, .member가림
    if(curr > 1){
      $('.logo_area').addClass('white');
      $('.member').addClass('hide');
      $('.util_area').addClass('on');
    }else{
      $('.logo_area').removeClass('white');
      $('.member').removeClass('hide');
      $('.util_area').removeClass('on');
    };


    //스크롤 내리면 탑버튼
    if(curr > 400){
      $('.top_btn').addClass('show');

      //푸터에 다다르면 탑버튼 고정
      if(curr > $(document).height() - $(window).height() - $('footer').outerHeight()+60){
        $('.top_btn').removeClass('show');
        $('.top_btn').addClass('bottom');
      }else{
        $('.top_btn').addClass('show');
        $('.top_btn').removeClass('bottom');
      }
    }else{
      $('.top_btn').removeClass('show');
    };
  }
  headEffect()

  $(window).scroll(function(){
    headEffect()
  });



  //탑버튼 클릭하면 맨위로
  $('.top_btn').click(function(e){
    e.preventDefault();
    $('html,body').stop().animate({scrollTop:0},500);
  });



  //헤더 - 대분류 호버시 .white+서브메뉴+ko변경
  $('.gnb_item > a').mouseover(function(){

    $('.sub_menu_bg').stop().animate({height:0,opacity:0},200);
    $('.sub_menu_bg').stop().animate({height:172,opacity:1},200);
    $('.banner_img').addClass('mov');

    $(this).children('.en').addClass('off');
    $(this).children('.ko').addClass('on');
    $('.logo_area').addClass('white');

    $('.sub_menu_box').removeClass('show');
    $(this).siblings('.sub_menu_box').addClass('show');
  });

  $('.gnb_item > a').mouseleave(function(){
    $(this).children('.en').removeClass('off');
    $(this).children('.ko').removeClass('on');
  });


  $('header').mouseleave(function(){
    curr = $(window).scrollTop();
    if(curr > 0){
      $('.sub_menu_bg').stop().animate({height:0,opacity:0},200);
      $('.banner_img').removeClass('mov');
      $('.sub_menu_box').removeClass('show');
    }else{
      $('.sub_menu_bg').stop().animate({height:0,opacity:0},200);
      $('.banner_img').removeClass('mov');
      $('.sub_menu_box').removeClass('show');
      $('.logo_area').removeClass('white');
    }
  });


  //전체메뉴박스
  $('.all_menu').click(function(e){
    e.preventDefault();
    
    if(!$('.all_menu_box').hasClass('open')){
      $('.logo_area').removeClass('white');
      $('.sub_menu_bg').stop().animate({height:0,opacity:0},200);
      $('.sub_menu_box').removeClass('show');

      $('.all_menu_box').addClass('open');
      $('.logo_area').addClass('all');
      $('body').addClass('hidden');
    }else{
      curr = $(window).scrollTop();
      if(curr > 0){
        $('.logo_area').addClass('white');
        $('.all_menu_box').removeClass('open');
        $('.logo_area').removeClass('all');
        $('body').removeClass('hidden');
      }else{
        $('.all_menu_box').removeClass('open');
        $('.logo_area').removeClass('all');
        $('body').removeClass('hidden');
      };
    }
  });


  //전체메뉴 - 1000px기준 pc,mo
  $('.a_g_item > a').mouseover(function(){

    if($(window).width()<=1000){
      $('.a_g_item > a').removeClass('show');
      $(this).removeClass('show');
      $('.a_g_sub_menu_box').removeClass('open');
      $(this).siblings('.a_g_sub_menu_box').removeClass('open');
    }else{
      $('.a_g_item > a').removeClass('show');
      $(this).addClass('show');
      $('.a_g_sub_menu_box').removeClass('open');
      $(this).siblings('.a_g_sub_menu_box').addClass('open');
    };

  });

  $('.a_g_item').mouseleave(function(){
    $('.a_g_item > a').removeClass('show');
    $('.a_g_sub_menu_box').removeClass('open');
  });

  //전체메뉴 - 1000px mo버젼 클릭
  $('.a_g_item .click').click(function(e){
    e.preventDefault();
    $('.a_g_sub_menu_box').removeClass('click');
    $(this).siblings('.a_g_sub_menu_box').addClass('click');
  });


  //전체메뉴박스 - 이벤트박스 스와이퍼
  var swiper = new Swiper(".event_bnr_list", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  //푸터 패밀리사이트
  $('.family_site .select').click(function(){
    h = $(this).siblings('.option').children('.o_list').outerHeight();

    if($('.select').hasClass('up')){
      $('.select').removeClass('up');
      $('.option').stop().animate({height:0},300);
    }else{
      $('.select').addClass('up');
      $('.option').stop().animate({height:0},300);
      $('.option').stop().animate({height:h},300);
    }
  });

  $('.family_site').mouseleave(function(){
    $('.select').removeClass('up');
    $('.option').stop().animate({height:0},300);
  });


});