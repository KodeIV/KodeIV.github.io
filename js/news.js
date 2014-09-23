var main = function(){
 var footballList = new ajaxLinks("http://content.guardianapis.com/search?api-key=test&show-fields=football&show-elements=football&q=football",'#news','#news1','#news2','#news3','#news4');

 var UKnewsList = new ajaxLinks("http://content.guardianapis.com/search?api-key=test&show-fields=football&show-elements=uk%20news&order-by=newest&q=uk%20news",'#news5','#news6','#news7','#news8','#news9');

 var TravelList = new ajaxLinks("http://content.guardianapis.com/search?api-key=test&show-fields=travel&show-elements=travel&order-by=newest&q=travel",'#news10','#news11','#news12','#news13','#news14');
}
$(document).ready(main);


var ajaxLinks = function(link,div0,div1,div2,div3,div4){
 $.ajax({
   url: link,
   success: function( data ) {
     $(div0).html(data.response.results[1].webTitle);
     $(div1).html(data.response.results[2].webTitle);
     $(div2).html(data.response.results[3].webTitle);
     $(div3).html(data.response.results[4].webTitle);
     $(div4).html(data.response.results[5].webTitle);
   }
});
};
$(function() {
    $( "#tabs" ).tabs();
  });