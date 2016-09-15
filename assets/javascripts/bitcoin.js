$( "#find" ).click(function( e ) {
        e.preventDefault();
       
		var queryURL='https://blockchain.info/ticker' 
		$.ajax({url: queryURL,method: 'GET'}).done(function(response) {
	     $('#response').html(JSON.stringify(response));
	     
		}); 
        return false;
    })