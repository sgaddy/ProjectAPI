
var API_SECRET="IWofxizMQutZMb3ANra9aAZTbE-IWXTz";
var API_KEY="6593a73d0b444f183b794332424bcf4e";
	$( "button" ).click(function( e ) {
        e.preventDefault();
		var queryURL="https://apius.faceplusplus.com/v2/detection/detect?url=http%3A%2F%2Fwww.faceplusplus.com%2Fwp-content%2Fthemes%2Ffaceplusplus%2Fassets%2Fimg%2Fdemo%2F13.jpg%3Fv%3D2&api_secret="+API_SECRET+"&api_key="+API_KEY+"&attribute=glass,pose,gender,age,race,smiling"
        console.log(queryURL)
		$.ajax({url: queryURL,method: 'GET'}).done(function(response) {
	     $('#response').html(JSON.stringify(response.face[0].attribute));
		}); 
        return false;
    })
