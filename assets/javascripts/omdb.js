var movie="frozen";
	
	$( "#find" ).click(function( e ) {
        e.preventDefault();
		var queryURL='https://www.omdbapi.com/?t=' + movie 
		$.ajax({url: queryURL,method: 'GET'}).done(function(response) {
	     $('#response').html(JSON.stringify(response));
	     
		}); 
        return false;
    })