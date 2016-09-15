$( "#find" ).click(function( e ) {
        e.preventDefault();
       
		var queryURL='http://api.geonames.org/postalCodeLookupJSON?postalcode=27517&country=AT&username=uncuser' 
		$.ajax({url: queryURL,method: 'GET'}).done(function(response) {
	     $('#response').html(JSON.stringify(response));
	     
		}); 
        return false;
    })