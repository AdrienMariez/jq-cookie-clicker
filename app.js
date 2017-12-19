$(document).ready(function(){
	//votre code
var value_cookies = 0 ;

	$('.cake-is-a-lie').click(function(){
		value_cookies ++;


		$(".counter").html(value_cookies);

		if ( value_cookies == 20 )
  			{
  				alert('NaN');
  			}

	});
});
