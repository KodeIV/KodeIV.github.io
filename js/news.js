$(document).ready(function() {


 var fillNews = function (sect) {                                                                              // function created, names 'fillNews'. Passed 'sect' as a parameter.

$.ajax({
   type: "GET",
   dataType: "jsonp",                                                                                           // necessary AJAX name/values
   url: "http://content.guardianapis.com/search?api-key=test&show-fields=all&order-by=newest&section=" + sect,  // the 'sect' parameter is added on to the api link, this specifies a topic
   success: function(data) {
       //window.alert("in ajax" + sect);
       for (var i = 0; i < 5; i++) {                                                                            // creates a 'for' loop that cycles through the api data, stops at the 5th.
         if  (i <= 5) {                                                                                        // when 'i' is 0,
       $("#" + sect).append("<img src ='" + data.response.results[i].fields.thumbnail + "'>");                   
           // a thumbnail is appended to the 'sect'id.
         }
                                                                                             // else
       $("#" + sect).append((i+1) + ". " + "<a href='"                                                          //  THIS IS ONE APPEND.
           + data.response.results[i].webUrl + "'>"                                                             //
           + data.response.results[i].webTitle + "</a><br>"                                                     //
              + data.response.results[i].fields.trailText.substring(0,146) + "..." + "<br><br>" + "<p></p>");                                        // trail text adds the 'trailing text'

           }
       }
   });

};

fillNews ("uk-news");
fillNews ("football");
fillNews ("travel");

 $("div#tabs").tabs();

 });
