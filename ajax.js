$(document).ready(function() {

  $.ajax({
   type: "GET",
   dataType: "jsonp",                                                                                           // necessary AJAX name/values
   url: 'http://young-plains-8557.herokuapp.com/'

   success: function(data)  {
      $.each(data.statuses, function () {
        $( "#tweets" )
        .append($('img', {
          src: this['<img>'],
          style: "padding-top:10px"
        }));
      });
    }
  });
