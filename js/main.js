;(function () {
	'use strict';

	// PARALLAXWINDOWS
	var parallaxWindow = function() {
		$(window).scroll(function(){
		  var x = $(this).scrollTop(),
		      transY = (x * 0.5), scale = 1 + (x * 0.0003),
		      transform = 'translateY('+transY+'px) scale('+scale+') translate3d(0,0,0)';
			  $('#header .header-bg').css({
			    opacity: 1 - (x * 0.0008),
			    WebkitTransform: transform,
			    MozTransform: transform,
			    msTransform: transform,
			    transform: transform
			  });
		});
	};

	//GOTOP
	var goToTop = function() {
		$(window).scroll(function(){
			if ($(window).scrollTop() > 400)
				$('.ac-gototop').addClass('active');
			else
				$('.ac-gototop').removeClass('active');
		});
	};

	// slideOut
	var slideOut = function(){
		var $toggleButton = $('.toggle-button'),
			$wrapper = $('.wrapper'),
	    	$menuWrap = $('.menu-wrap'),
	    	$sidebarArrow = $('.menu-item-has-children');

		// Hamburger button

		$toggleButton.on('click', function() {
			$(this).toggleClass('button-open');
			$menuWrap.toggleClass('menu-show');
		});

		// Wrapper
		$wrapper.on('click', function() {
			$toggleButton.removeClass('button-open');
			$menuWrap.removeClass('menu-show');
		});

		// Sidebar navigation arrows

		$sidebarArrow.click(function() {
			$(this).find('.sub-menu').slideToggle(300);
		});

	}
	// Loading page
	var loaderPage = function() {
		$('body').removeClass('ac-scroll-loader');
		$(".ac-loader").fadeOut("slow");
	};

	// skillbar
	var skillbar = function(id_skills){
		var waypoint = new Waypoint({
		  element: document.getElementById(id_skills),
		  handler: function() {
			jQuery('.skillbar').each(function(){
				jQuery(this).find('.skillbar-bar').animate({
					width:jQuery(this).attr('data-percent')
				},2000);
			});
		  },
		  offset: '75%'
		});
	};
		
	// GRID_IMG
	var grid_img = function() {

		function getWindowWidth() {
		  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
		}

		// Instantiate wookmark after all images have been loaded
		var wookmark;

		// Init lightbox
		$('#container-grid-img').magnificPopup({
		  delegate: 'li:not(.inactive) a',
		  type: 'image',
		  gallery: {
		    enabled: true
		  }
		});

		imagesLoaded('#container-grid-img', function() {
		  wookmark = new Wookmark('#container-grid-img', {
		    itemWidth: 150, // Optional min width of a grid item
		    outerOffset: 20, // Optional the distance from grid to parent
		    flexibleWidth: function () {
		      // Return a maximum width depending on the viewport
		      return getWindowWidth() < 1024 ? '100%' : '50%';
		    }
		  });
		});
	};

	var scrollreveal = function(){
		// JavaScript
		window.sr = ScrollReveal({ reset: true,mobile: false,duration: 1000});
		sr.reveal('.reveal-efect',{duration: 1000,origin: 'botton'});
		sr.reveal('.reveal-efect-left',{ duration: 1000,origin: 'left' });
		sr.reveal('.reveal-efect-right',{ duration: 1000 ,origin: 'right'});
		sr.reveal('#container-grid-img li a img',{ duration: 1500});
	}

	$(function(){
		skillbar('skills');
		goToTop();
		loaderPage();
		parallaxWindow();
		slideOut();
		grid_img();
		scrollreveal()
	});


}());


