(function($) {
    "use strict";
  
    // manual carousel controls
    $('.next').click(function(){ $('#multi_item').carousel('next');return false; });
    $('.prev').click(function(){ $('#multi_item').carousel('prev');return false; });
    
  })(jQuery);