
$(document).ready(function(){
  $('#favoriteform').submit(function(event) {
    event.preventDefault();
    var favorite1 = $('#favorite1').val();
    var favorite2 = $('#favorite2').val();
    var favorite3 = $('#favorite3').val();
    var favorite4 = $('#favorite4').val();
    var favorite5 = $('#favorite5').val();

    var favoriteArray = [favorite1, favorite2, favorite3, favorite4, favorite5];
    var favoriteArray2 = favoriteArray['1'];
    var favoriteArray3 = favoriteArray['0'];
    var favoriteArray4 = favoriteArray['2'];
    var favoriteArray5 = [];
    favoriteArray5.push(favoriteArray[1])
    favoriteArray5.push(favoriteArray[0])
    favoriteArray5.push(favoriteArray[2])

    alert('Your Favorite Things Are: ' + favoriteArray5);


    favoriteArray5.forEach(function(dothething) {
      $("ul#favoritelist").append("<li>" + dothething + "</li>");
    });


    // favoriteArray2 + ', ' + favoriteArray3 + ', ' + favoriteArray4
  });
});
