(function() {
    // your page initialization code here
    // the DOM will be available here

$(document).ready(function(){
$('#hamburger').on('click',function() {
  $('.cross').toggleClass('d-none slit-in-horizontal')
  $('.patties ').toggleClass('d-none slit-in-horizontal')
})
  for (let i = 1; i <= 17; i++) {

    $(`#sl${i}`).slick({
      infinite: true,
      dots: true,
      autoplay: true,
      prevArrow:"<button type='button' class='slick-prev pull-left'><div class='arrow-wrapper'><div class='icon-left'><svg viewBox='0 0 24 24' width='30px' height='30px' focusable='false'><path fill='rgba(255,255,255,1)' d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z'></path><path d='M0-.75h24v24H0z' fill='none'></path></svg></div></div></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><div class='arrow-wrapper'><div class='icon-right'><svg viewBox='0 0 24 24' width='30px' height='30px' focusable='false'><path fill='rgba(255,255,255,1)' d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z'></path><path d='M0-.75h24v24H0z' fill='none'></path></svg></div></div></button>"
    });
    console.log('test');
    $( "#sl"+i ).mouseover(function() {
      console.log('ds')
      $( " .arrow-wrapper",this ).css( 'display','flex' );
    });
    $( "#sl"+i ).mouseleave(function() {
      console.log('ds')
      $( " .arrow-wrapper",this ).css( 'display','none' );
    });
  }
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top"); 
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
 })();
 })();
