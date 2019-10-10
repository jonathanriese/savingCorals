$(document).ready(function(){
  $(".menu-icon").click(function(){
    $(".bar1, .bar2, .bar3").toggleClass("change");
    $(".menu-overlay").toggleClass("show");
  });
});