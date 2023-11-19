console.log('strakers v1');
$(document).ready(function() {
  //parallax scroll
  $(window).on("load scroll", function() {
    var parallaxElement = $(".parallax_scroll"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function() {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.20 + "px, 0)"
        });
      }
    });
  });
});


function hamburgerMenu(){
  var menuButton = document.querySelector('.s-hamburger');
  var menu = document.querySelector('.s-mobile-menu');
  menuButton.addEventListener('click', function(){
    this.classList.toggle('closed');
    menu.classList.toggle('closed');
  });
}

hamburgerMenu();
