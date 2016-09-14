//Connect Menu
$(".connect").click(function(){
  $("nav").toggleClass('open');
  $(".menu").toggleClass('open');
  //$(".page").toggleClass('open-mobile');
});

$('.project, .back').click(function expandCard() {
  $(".page, .page .content *", this).toggleClass('open');
  $(".card").toggleClass('shrink');
  $(".back").toggleClass('open');

  //Add Background
  $(".background", this).toggleClass('open');
  
  //Cleanup Back Button
  $(".back").click(function(){
    $(".page, .page .content *, .background").removeClass('open');
  });
});
