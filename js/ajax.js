
$( document ).ready(function(){
$.ajax({
  url: "http://mybox-147072.euw1-2.nitrousbox.com:8080/",
  success: function(data) {
    var array = data;
    var str = '';
      
         for(var i=0; i<array.length; i++) {
         str += '<img src="'
             + array[i] + '" class="thumbnail img-responsive"/>';

                    }
    console.log(str)
      $( "#twitpics" ).append(str)
}
});
});