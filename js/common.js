$( document ).ready( function() {

	var $menu = $( "#menu" ),
		$mod = $( "#modification" ),
		$body = $( "body" ),
		$side_menu = $( ".side_menu" ),
		$side_ul = $( ".side_menu_ul" ),
		$side_mod_ul = $( ".side_mod_ul" );

		//*************** Menu button *********************
		$( $menu ).on( "click", function(){

			$( ".side_menu-dealers" ).hasClass( "shifted-left" )?$( ".side_menu-dealers" ).removeClass( "shifted-left" ):1;

			
			if ( !$side_ul.hasClass( "invisible" ) && $body.hasClass( "shifted" ) ) {

				$side_ul.removeClass( "fadeIn" ).addClass( "fadeOut" ).addClass( "invisible" );
				$body.removeClass( "shifted" ).removeClass( "blocked" ).addClass( "unshifted" );
			}

			else if ( $side_ul.hasClass( "invisible" ) && $body.hasClass( "unshifted" ) ) {

				$body.removeClass( "unshifted" ).addClass( "shifted" ).addClass( "blocked" );
				$side_ul.removeClass( "invisible" ).removeClass( "fadeOut" ).addClass( "fadeIn" );
			}

			else if ( !$side_mod_ul.hasClass( "invisible" ) && $body.hasClass( "shifted" ) ) {

				$side_mod_ul.removeClass( "fadeIn" ).addClass( "fadeOut" ).addClass( "invisible" );
				$side_ul.removeClass( "invisible" ).removeClass( "fadeOut" ).addClass( "fadeIn" );
			}

		});

		//***************** Modification button ************************
		$( $mod ).on( "click", function(){

			$( ".side_menu-dealers" ).hasClass( "shifted-left" )?$( ".side_menu-dealers" ).removeClass( "shifted-left" ):1;

			if ( !$side_mod_ul.hasClass( "invisible" ) && $body.hasClass( "shifted" ) ) {

				$side_mod_ul.removeClass( "fadeIn" ).addClass( "fadeOut" ).addClass( "invisible" );
				$body.removeClass( "shifted" ).removeClass( "blocked" ).addClass( "unshifted" );

			}

			else if ( $side_mod_ul.hasClass( "invisible" ) && $body.hasClass( "unshifted" ) ) {

				$body.removeClass( "unshifted" ).addClass( "shifted" ).addClass( "blocked" );
				$side_mod_ul.removeClass( "invisible" ).removeClass( "fadeOut" ).addClass( "fadeIn" );
			}

			else if ( !$side_ul.hasClass( "invisible" ) && $body.hasClass( "shifted" ) ) {

				$side_ul.removeClass( "fadeIn" ).addClass( "fadeOut" ).addClass( "invisible" );
				$side_mod_ul.removeClass( "invisible" ).removeClass( "fadeOut" ).addClass( "fadeIn" );
			}

		});

		//************** Dealers button ****************
		$( "#dealers" ).on( "click", function(){

			$body.addClass( "blocked" );

			$( ".side_menu-dealers" ).addClass( "shifted-left" );

		})

		$( ".close" ).on( "click", function(){

			$body.removeClass( "blocked" );

			$( ".side_menu-dealers" ).removeClass( "shifted-left" );

		})


	//**************** Mobile menu show on Hamburger button click ********************
	$( ".mob_menu_icon" ).on( "click", function(){

		if ( $body.hasClass( "unshifted" ) ) {
			$body.removeClass( "unshifted" ).addClass( "shifted" ).addClass( "blocked" );
		}

		else if ( $body.hasClass( "shifted" ) ) {
			$body.removeClass( "shifted" ).addClass( "unshifted" ).removeClass( "blocked" );
		}

	});



//Mobile menu Hamburger icon to X on click	
	(function() {

		  "use strict";

		  var toggles = document.querySelectorAll( ".mob_menu_icon" );

		  for ( var i = toggles.length - 1; i >= 0; i-- ) {

		    var toggle = toggles[i];
		    toggleHandler(toggle);

		  };

		  function toggleHandler(toggle) {

		    toggle.addEventListener( "click", function(e) {

		    	e.preventDefault();
		    	(this.classList.contains( "is-active" ) === true) ? this.classList.remove( "is-active" ) : this.classList.add( "is-active" );

		    });
		  }

	})();

	/********* Mobile menu toggle *********/
	$( ".toggleMenu > a" ).on( "click", function(){
		
		$( ".mob_menu-menu" ).slideToggle( 400, function (){

			$(this).addClass( "fadeIn" ).removeClass( "fadeOut" ).removeClass( "invisible" );

			if ( $( ".mob_menu-mod" ).hasClass( "fadeIn" ) || $( ".mob_menu-dealers" ).hasClass( "fadeIn" ) ) {

				$( ".mob_menu-mod" ).add( $( ".mob_menu-dealers" ) ).removeClass( "fadeIn" ).addClass( "fadeOut" ).addClass( "invisible" ).slideUp();

			}

		});

	});


	/******** Mobile Modification menu toggle ********/
	$( ".toggleMod > a" ).on( "click", function(){
		

	$( ".mob_menu-mod" ).slideToggle( 400, function (){

			$(this).addClass( "fadeIn" ).removeClass( "fadeOut" ).removeClass( "invisible" ).scrollTop(0);

			if ( $( ".mob_menu-menu" ).hasClass( "fadeIn" ) || $( ".mob_menu-dealers" ).hasClass( "fadeIn" ) ) {

				$( ".mob_menu-menu" ).add( $( ".mob_menu-dealers" ) ).removeClass( "fadeIn" ).addClass( "fadeOut" ).addClass( "invisible" ).slideUp();

			}

		});

	});

	/******** Mobile Dealers menu toggle ********/
	$( ".toggleDealers > a" ).on( "click", function(){
		

	$( ".mob_menu-dealers" ).slideToggle( 400, function (){

			$(this).addClass( "fadeIn" ).removeClass( "fadeOut" ).removeClass( "invisible" );

			if ( $( ".mob_menu-menu" ).hasClass( "fadeIn" ) || $( ".mob_menu-mod" ).hasClass( "fadeIn" ) ) {

				$( ".mob_menu-mod" ).add( $( ".mob_menu-menu" ) ).removeClass( "fadeIn" ).addClass( "fadeOut" ).addClass( "invisible" ).slideUp();
			
			}

		});

	});

	//************ Screen resize **************
	$( window ).resize( function() {

		if ( $( window ).width() < 992 ) {

			$side_mod_ul.removeClass( "fadeIn" ).addClass( "fadeOut" ).addClass( "invisible" );

			$side_ul.removeClass( "fadeIn" ).addClass( "fadeOut" ).addClass( "invisible" );
			
			$( ".side_menu-dealers" ).removeClass( "shifted-left" );

			$( ".mob_menu_icon" ).hasClass( "is-active" )?$( ".mob_menu_icon" ).removeClass( "is-active" ):1;


			$body.removeClass( "shifted" ).removeClass( "blocked" ).addClass( "unshifted" );

		}

		else if ( $( window ).width() > 991 ) {

			$( ".mob_menu_icon" ).hasClass( "is-active" )?$( ".mob_menu_icon" ).removeClass( "is-active" ):1;

			$body.removeClass( "blocked" );

			$body.hasClass( "shifted" )?$body.removeClass( "shifted" ):$body.addClass( "unshifted" );
			$body.hasClass( "blocked" )?$body.removeClass( "blocked" ):1;

		}

	});


	//Waypoints
	$( ".ads_header, .btn_ads" ).waypoint(function(dir) {
		if( dir == "down" ) {
			$(this).removeClass( "fadeOut" );
			$(this).addClass( "fadeIn" );
		}

		else {
			$(this).removeClass( "fadeIn" );
			$(this).addClass( "fadeOut" );
		}

	}, { offset: "bottom-in-view" })

	.waypoint( function(dir) {

		if( dir == "down" ) {
			$(this).removeClass( "fadeIn" );
			$(this).addClass( "fadeOut" );
		}

		else {
			$(this).removeClass( "fadeOut" );
			$(this).addClass( "fadeIn" );
		}

	}, { offset: "-10%" });

	$( ".logo" ).waypoint( function(dir) {

		if( dir == "down" ) {

			$( ".logo" ).css({
				"top" : "1px",
				"left" : "50%",
				"margin-left" : "-28px",
				"transition" : "top .2s ease-in-out, left .4s ease-in-out, margin-left .4s ease-in-out"
			})

			$( ".logo img" ).css({
				"height" : "56px",
				"width" : "56px",
				"transition" : "width .4s ease-in-out, height .4s ease-in-out"

			})

		}

		else {

			$( ".logo" ).css({
				"position" : "fixed",
				"top" : "15px",
			  	"left" : "50%",
			  	"margin-left" : "-45px"
			})

			$( ".logo img" ).css({
				"height" : "90px",
				"width" : "90px"
			})

		}

	}, { offset: -350 });

	/********* Background of Artcle section *********/
	$( ".info_bgr img" ).waypoint(function(dir) {

		if( dir == "down" ) {

			$(this).css({
				"position" : "fixed"
			})

		}

	});

	/******** Articles blocks - Main, Left and Right ********/
	$( ".mainBlock, .leftBlock, .mainArticle h2, .rightBlock" ).waypoint( function(dir) {

		if ( dir == "down" ) {
			$(this).addClass( "fadeIn" );

			$( ".leftBlock" ).css({
				"animation-delay" : ".3s"
			})

			$( ".rightBlock" ).css({
				"animation-delay" : ".4s"
			})

		}

	}, { offset : "85%" });

	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$( "form" ).submit( function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done( function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});




