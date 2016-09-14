//None of this is very pretty, but it works.

//Trigger card expansion function with card and back button clicks.
$(".card, .back").click(expandCard);

//Cleanup Back Button
$(".back").click(function(){
  $(".card").removeClass('shrink');
  $(".card").removeClass('expand');
  $(".card h2").removeClass('close');
  $(".background").removeClass('open');
});

//Project Cards
function expandCard(){
  $(".back").toggleClass('open');
  $(".card h2").toggleClass('open');
  $(".card .page h1").toggleClass('open');
  $(".card .page p").toggleClass('open');
  $(".card .page .go").toggleClass('open');
  $(".card .info").toggleClass('close');
  $(".card .page").toggleClass('open');

  //Progress Circle
  $(".loading").toggleClass('open');
  $(".inner").toggleClass('open');
};

//Connect Menu
$(".connect").click(function(){
  $("nav").toggleClass('open');
  $(".menu").toggleClass('open');
  //$(".page").toggleClass('open-mobile');
});

$('#metro').click(function () {
  $(".card").toggleClass('shrink');
  $(this).toggleClass('expand');
  $("h2", this).toggleClass('close');

  //Add Background
  $(".background.metro").toggleClass('open');
});

$('#yali').click(function () {
  $(".card").toggleClass('shrink');
  $(this).toggleClass('expand');
  $("h2", this).toggleClass('close');

  //Add Background
  $(".background.yali").toggleClass('open');
});
