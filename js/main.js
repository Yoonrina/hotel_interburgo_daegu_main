// main_vis 슬라이드
var swiper = new Swiper(".main_img_wrap", {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//예약 달력 라이브러리
$.datepicker.setDefaults({
  dateFormat: 'yy-mm-dd',
  prevText: '이전 달',
  nextText: '다음 달',
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
  //showMonthAfterYear: true,
  //yearSuffix: '년'
});


var dates = $( "#from, #to" )
  .datepicker({
    defaultDate: "+1w",  // 기본선택일이 1 week 이후가 선택되는 옵션
    minDate:0,
    maxDate:'+30D',
    changeYear: true,
    changeMonth: true,
    showAnim: 'slideDown',
    numberOfMonths: 2,  // 한눈에 보이는 월달력수
    onSelect: function( selectedDate ) {
      var option = this.id == "from" ? "minDate" : "maxDate",
        instance = $( this ).data( "datepicker" ),
        date = $.datepicker.parseDate(
        instance.settings.dateFormat ||
        $.datepicker._defaults.dateFormat,
        selectedDate, instance.settings );
        dates.not( this ).datepicker( "option", option, date );
    }
  });

  $('#from').datepicker('setDate', 'today');
  $('#to').datepicker('setDate', '+1D');


//sc_event_package 슬라이드
var swiper = new Swiper(".event_box", {
  slidesPerView: 'auto',
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".s_btn.next",
    prevEl: ".s_btn.prev",
  },
});

//sc_dining + sc_special 슬라이드
var swiper = new Swiper(".img_slide_box", {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".s_btn.next",
    prevEl: ".s_btn.prev",
  },
});

//sc_dining 탭 구현
$('.sc_dining .t_t_item').click(function(e){
  e.preventDefault();
  
  target = $(this).children('a').attr('href');
  
  $('.sc_dining .t_t_item').removeClass('on');
  $(this).addClass('on');

  $('.sc_dining .cate_box').removeClass('on');
  $(target).addClass('on');
});

//sc_special 탭 구현
$('.sc_special .t_t_item').click(function(e){
  e.preventDefault();
  
  target = $(this).children('a').attr('href');
  
  $('.sc_special .t_t_item').removeClass('on');
  $(this).addClass('on');

  $('.sc_special .cate_box').removeClass('on');
  $(target).addClass('on');
});


//sc_room 슬라이드
var swiper = new Swiper(".room_wrap", {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".s_btn.next",
    prevEl: ".s_btn.prev",
  },
});

//sc_room 탭구현
$('.sc_room .r_t_item').click(function(e){
  e.preventDefault();

  target = $(this).children('a').attr('href');
  
  $('.sc_room .r_t_item').removeClass('on');
  $(this).addClass('on');

  $('.sc_room .room_cate_box').removeClass('on');
  $(target).addClass('on');
});

//sc_contact_us 주소 복사하기
$('.hotel_address').click(function (e) { 
  e.preventDefault();
  $('#addr').select();
  document.execCommand("copy");
  alert("주소가 복사되었습니다"); 
});