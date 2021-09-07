import Splide from '@splidejs/splide';



  new Splide ('#one', {
    direction: 'ttb',
    type   : 'loop',
    arrows: false,
    gap: 1,
    perPage: 1,
  } ).mount();


  new Splide ('#two', {
    type   : 'loop',
    arrows: true,
  } ).mount();


  var elms = document.getElementsByClassName( 'splide' );
  for ( var i = 0, len = elms.length; i < len; i++ ) {
    new Splide( elms[ i ] ).mount();
  }


  // document.addEventListener("DOMContentLoaded", function () {
  //   slider_one();
  //   slider_two();
  //   global_carousel__ctrl();
  // });
  
  // function slider_one() {
  //   var one = new Splide("#one", {
  //     direction: 'ttb',
  //     type: "loop",
  //     autoplay: false,
  //     keyboard: "focused", 
  //     gap: 1,
  //     pagination: true,
  //     arrows: false,
  //   }).mount();
  // }
  
  // function slider_two() {
  //   var two = new Splide("#two", {
  //     type: "loop",
  //     autoplay: false,
  //     keyboard: "focused", 
  //     gap: 1,
  //     pagination: true,
  //     arrows: true,
  //   }).mount();
  // }


  
  
  //alternate way of triggering carousels in muiltiple instances
  // function global_carousel__ctrl() {
  //   var elms = document.getElementsByClassName("splide");
  //   for (var i = 0; i < elms.length; i++) {
  //     new Splide(elms[i], {
  //       type: "loop",
  //       autoplay: false,
  //       keyboard: "focused", //enabling keyboard for focused element
  //       gap: 1,
  //       pagination: true,
  //     }).mount();
  //   }
  // }

 
  