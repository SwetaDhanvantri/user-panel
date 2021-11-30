$('#carousel-example').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;
  
    if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
        // append slides to end
        if (e.direction=="left") {
          $('.carousel-item').eq(i).appendTo('.carousel-inner');
        }
        else {
          $('.carousel-item').eq(0).appendTo('.carousel-inner');
        }
      }
    }
  });
  
  $(document).ready(function() {  
    //Enable swiping...
    $(".carousel-inner").swipe( {
      //Generic swipe handler for all directions
      swipeLeft:function(event, direction, distance, duration, fingerCount) {
        $(this).parent().carousel('next'); 
      },
      swipeRight: function() {
        $(this).parent().carousel('prev'); 
      },
      //Default is 75px, set to 0 for demo so any distance triggers swipe
      threshold:0
    });
  });