$(window).resize(function() {
  var more = document.getElementById("js-navigation-more");
  if ($(more).length > 0) {
    var windowWidth = $(window).width();
    var moreLeftSideToPageLeftSide = $(more).offset().left;
    var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

    if (moreLeftSideToPageRightSide < 330) {
      $("#js-navigation-more .submenu .submenu").removeClass("fly-out-right");
      $("#js-navigation-more .submenu .submenu").addClass("fly-out-left");
    }

    if (moreLeftSideToPageRightSide > 330) {
      $("#js-navigation-more .submenu .submenu").removeClass("fly-out-left");
      $("#js-navigation-more .submenu .submenu").addClass("fly-out-right");
    }
  }
});

$( ".filter-item" ).on("click", function(e){$(this).toggleClass("active");});//.css( "border", "3px solid red" );

$(document).ready(function() {
  var menuToggle = $("#js-mobile-menu").unbind();
  $("#js-navigation-menu").removeClass("show");
  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#js-navigation-menu").slideToggle(function(){
      if($("#js-navigation-menu").is(":hidden")) {
        $("#js-navigation-menu").removeAttr("style");
      }
    });
  });

    $( ".filter-item" ).on("click", function(e){
      $( ".filter-item").not(this).removeClass("active");
      if ($(this).hasClass("active")){
        // Deactivating the class should show all posts
        $(this).removeClass("active");
        $( ".grid-item").show();
      } else {
        $(this).addClass("active");
        var classes = $(this).attr("class").split(/\s+/);
        var cat = "." + classes[1].substring(7);
        $( ".grid-item ").show()
        $( ".grid-item").not(cat).hide();
      };
    });
});
