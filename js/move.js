
// 커서 따라다님
$(window).mousemove(function(e){
  //console.log(1);

  child = $('.cursor');

  w = child.width()/2
  h = child.height()/2

  gsap.to('.cursor',{
    x:e.clientX-w,
    y:e.clientY-h,
    duration:0.1
  });
});


//무브는 무브고 , 호버는 따로
$('a').mouseover(function(){
    gsap.to('.cursor',{
      scale:4,
      backgroundColor:'#c6a582',
      duration:0.2
    });
})

$('a').mouseleave(function(){
    gsap.to('.cursor',{
      scale:1,
      backgroundColor:'#848484',
      duration:0.2
    });
})
  
  



$('.up_item').each(function(index,item){

  gsap.fromTo(item,{
    opacity:0,
    y:150,
  },{
    scrollTrigger:{
      trigger:item,
      start:"top bottom",
      // markers:true,
    },
    opacity:1,
    y:0,
    duration:2,
    ease: "circ.out"
  })
})


$('.up_item2').each(function(index,item){

  gsap.fromTo(item,{
    opacity:0,
    y:200,
  },{
    scrollTrigger:{
      trigger:item,
      start:"top bottom",
      // markers:true,
    },
    opacity:1,
    y:0,
    duration:2,
    ease: "circ.out"
  })
})

$('.left_item').each(function(index,item){

  gsap.fromTo(item,{
    opacity:0,
    x:-100,
  },{
    scrollTrigger:{
      trigger:item,
      start:"top bottom",
      // markers:true,
    },
    opacity:1,
    x:0,
    duration:2,
    ease: "circ.out"
  })
})

$('.right_item').each(function(index,item){

  gsap.fromTo(item,{
    opacity:0,
    x:100,
  },{
    scrollTrigger:{
      trigger:item,
      start:"top bottom",
      // markers:true,
    },
    opacity:1,
    x:0,
    duration:2,
    ease: "circ.out"
  })
})


//sc_room 라인, 딜레이
$('.h_line').each(function(index,item){

  gsap.fromTo(item,{
    opacity:0,
    height:0,
  },{
    scrollTrigger:{
      trigger:item,
      start:"top 80%",
      // markers:true,
    },
    opacity:1,
    height:'100%',
    duration:2,
    ease: "circ.out",
  })
})

$('.up_item_delay').each(function(index,item){

  gsap.fromTo(item,{
    opacity:0,
    y:100,
  },{
    scrollTrigger:{
      trigger:item,
      start:"top bottom",
      // markers:true,
    },
    opacity:1,
    y:0,
    duration:2,
    ease: "circ.out",
    delay:1
  })
})

$('.left_item_delay').each(function(index,item){

  gsap.fromTo(item,{
    opacity:0,
    x:-100,
  },{
    scrollTrigger:{
      trigger:item,
      start:"top bottom",
      // markers:true,
    },
    opacity:1,
    x:0,
    duration:2,
    ease: "circ.out",
    delay:0.7
  })
})

$('.right_item_delay').each(function(index,item){

  gsap.fromTo(item,{
    opacity:0,
    x:100,
  },{
    scrollTrigger:{
      trigger:item,
      start:"top bottom",
      // markers:true,
    },
    opacity:1,
    x:0,
    duration:2,
    ease: "circ.out",
    delay:0.5
  })
})
