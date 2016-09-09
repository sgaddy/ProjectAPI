$('button').on('click', function(){
    $('.animalButton').removeClass('active');
    $(this).addClass('active');

    var p = $(this).data('person'); // <------------------------- 1. What is this in "this" case? 

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=1";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;

         for(var i=0; i < results.length; i++){


            if (results[i].rating == "r" || results[i].rating == "pg-13")
            {

            }
            else {
              var gifDiv = $('<div class="item">')

             var rating = results[i].rating;

             var p = $('<p>').text( "Rating: " + rating);

             var personImage = $('<img>');
             personImage.attr('src', results[i].images.fixed_height.url);

             gifDiv.append(p)
             gifDiv.append(personImage)

             $('#gifsAppearHere').prepend(gifDiv);               
            }

         }
        
    }); 
});