jQuery(document).ready(function(){

	// Lift card and show stats on Mouseover
	jQuery('.product-card').hover(function(){
			var id = jQuery(this).data('id');
			jQuery('#product-card-'+id).addClass('animate');
			jQuery('#carousel-'+id+' div.carouselNext, #carousel-'+id+' div.carouselPrev').addClass('visible');
		 }, function(){
		 	var id = jQuery(this).data('id');
			jQuery('#product-card-'+id).removeClass('animate');
			jQuery('#carousel-'+id+' div.carouselNext, #carousel-'+id+' div.carouselPrev').removeClass('visible');
	});

	// Flip card to the back side
	jQuery('.view_details').click(function(){
		var id = jQuery(this).data('id');
		jQuery('#carousel-'+id+' div.carouselNext, #carousel-'+id+' div.carouselPrev').removeClass('visible');
		jQuery('#product-card-'+id).addClass('flip-10');
		setTimeout(function(){
			jQuery('#product-card-'+id).removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
				jQuery('#product-front-'+id+', #product-front-'+id+' div.shadow').hide();
			});
		}, 50);

		setTimeout(function(){
			jQuery('#product-card-'+id).removeClass('flip90').addClass('flip190');
			jQuery('#product-back-'+id).show().find('div.shadow').show().fadeTo( 90 , 0);
			setTimeout(function(){
				jQuery('#product-card-'+id).removeClass('flip190').addClass('flip180').find('div.shadow').hide();
				setTimeout(function(){
					jQuery('#product-card-'+id).css('transition', '100ms ease-out');
					jQuery('#cx-'+id+', #cy-'+id).addClass('s1');
					setTimeout(function(){jQuery('#cx-'+id+', #cy-'+id).addClass('s2');}, 100);
					setTimeout(function(){jQuery('#cx-'+id+', #cy-'+id).addClass('s3');}, 200);
					jQuery('#carousel-'+id+' div.carouselNext, #carousel-'+id+' div.carouselPrev').addClass('visible');
				}, 100);
			}, 100);
		}, 150);
	});

	// Flip card back to the front side
	jQuery('.flip-back').click(function(){
		var id = jQuery(this).data('id');
		jQuery('#product-card-'+id).removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			jQuery('#product-card-'+id).removeClass('flip190').addClass('flip90');

			jQuery('#product-back-'+id+' div.shadow').css('opacity', 0).fadeTo( 100 , 1, function(){
				jQuery('#product-back-'+id+', #product-back-'+id+' div.shadow').hide();
				jQuery('#product-front-'+id+', #product-front-'+id+' div.shadow').show();
			});
		}, 50);

		setTimeout(function(){
			jQuery('#product-card-'+id).removeClass('flip90').addClass('flip-10');
			jQuery('#product-front-'+id+' div.shadow').show().fadeTo( 100 , 0);
			setTimeout(function(){
				jQuery('#product-front-'+id+' div.shadow').hide();
				jQuery('#product-card-'+id).removeClass('flip-10').css('transition', '100ms ease-out');
				jQuery('#cx-'+id+', #cy-'+id).removeClass('s1 s2 s3');
			}, 100);
		}, 150);

	});


	/* ----  Image Gallery Carousel   ---- */
	function responsiveCarousel(){
		var carouselSlideWidth = jQuery('.product-back').width();
		jQuery('.product-back .carousel li').css('width', carouselSlideWidth);
		jQuery('.arrows-perspective').css('perspective', carouselSlideWidth).css('width', carouselSlideWidth);

		jQuery('.product-back .carousel ul').each(function(){
			var carouselWidth = 0;
			// building the width of the casousel
			jQuery(this).children().each(function(){
				carouselWidth += carouselSlideWidth;
			});
			jQuery(this).css('width', carouselWidth).css('left', '0px');
		});
	}

	jQuery(window).on('resize', responsiveCarousel);

  responsiveCarousel();

	var isAnimating = false;

	// Load Next Image
	jQuery('div.carouselNext').on('click', function(){
		var id = jQuery(this).data('id');
		var carousel = jQuery('#carousel-'+id+' ul');
		var currentLeft = Math.abs(parseInt(jQuery(carousel).css("left")));
		var newLeft = currentLeft + carousel.children(":first").width();
		if(newLeft == carousel.width() || isAnimating === true){return;}
		jQuery('#carousel-'+id+' ul').css({'left': "-" + newLeft + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating = true;
		setTimeout(function(){isAnimating = false;}, 300);
	});

	// Load Previous Image
	jQuery('div.carouselPrev').on('click', function(){
		var id = jQuery(this).data('id');
		var carousel = jQuery('#carousel-'+id+' ul');
		var currentLeft = Math.abs(parseInt(jQuery(carousel).css("left")));
		var newLeft = currentLeft - carousel.children(":first").width();
		if(newLeft < 0  || isAnimating === true){return;}
		jQuery('#carousel-'+id+' ul').css({'left': "-" + newLeft + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating = true;
		setTimeout(function(){isAnimating = false;}, 300);
	});
});
