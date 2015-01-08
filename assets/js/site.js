//@codekit-prepend "jquery.shuffle.min.js"
//@codekit-prepend "jquery.matchHeight.js"
//@codekit-prepend "custom.js"
//@codekit-prepend "chosen.jquery.js"
//@codekit-prepend "responsivemobilemenu.js"
//@codekit-prepend "jquery.slabtext.js"


(function($) {    
	
		$(document).ready(function() {
			bottom();
			$( window ).resize(function() {
		       if ($(window).width() > 960) {
				   bottom();
				}
				$('.align-bottom ').css( "paddingTop", "" );
			});
			function bottom() {
				var height = parseInt($('.align-bottom').height());
				var offset = $('.align-bottom').parents(".panel-row-style").height() - height; 
				$('.align-bottom ').css( "paddingTop", offset );
			}
		});
		
})( jQuery );	
