var home = function() {
	var dripHeight = 300;
	var delay = 300;
	
	// add elements to jquery cache
	var hash = window.location.hash;
	var navs = $('nav a');
	var content = $('#content');
	var pages = content.find('.page');
	var homePage = pages.filter('#home');
	var contentBoxes = homePage.find('div.content-box');
	var contentHeads = homePage.find('a.content-head');
	var contentBodies = homePage.find('p.content-body');
	var contentDrips = homePage.find('div[class^=drip]');	
	
	var contentTimer;
	
	// public initialization method
	var init = function() {
		var self = this;
		
		// blur all links on click	
		$('a').click(function() {
			$(this).blur();
		});
		
		// show active page content on page load
		$(function() {
			loadPage(navs.filter('[href=' + (hash !== "" ? hash : '#home') +']'));	
		});		
				
		// handle click on nav link
		navs.click(function() {
			loadPage($(this));
			return false;
		});
		
		// handle click event on content
		contentHeads.click(function() {
			toggleContent($(this).parent('div.content-box'), false);
			return false;
		});
		
		contentHeads.mouseenter(function() {
			var contentBox = $(this).parent('div.content-box');			
			
			if (contentTimer) {
				clearTimeout(contentTimer);
				contentTimer = null;
			}
			
			contentTimer = setTimeout(function() {
				toggleContent(contentBox, true);	
			}, delay);					
		});
	}
	
	var toggleContent = function(contentBox, keepSelected) {
		var self = this;
		
		// get the content body of the content that was activated
		var body = contentBox.find('p.content-body');
		
		// if the content is already in motion escape this function
		if (body.is(':animated')) return;
		
		// if the selected content was already visible set hideSelected to true so it doesn't re-show
		var hideSelected = body.is(':visible');
		
		// if the current content was selected but keepSelected is true then do not hide the current content 
		keepSelected = hideSelected && keepSelected;
		
		if (!keepSelected) {			
			contentBodies.filter(':visible').slideUp();
		}
		
		if (contentDrips.height() == dripHeight) {
			showContent(body, hideSelected, 0);
		} else if (!keepSelected) {			
			contentDrips.animate({ height: dripHeight }, { queue: false, complete: showContent(body, hideSelected, delay) });
		}
	}
	
	var showContent = function(body, hideSelected, delay) {
		if (!hideSelected) {
			// if hideSelected is false show the activated content
			setTimeout(function() {
				contentDrips.animate({ height: dripHeight * 2 });
			
				body.slideDown(function() {
					$(this).scrollTop($(this).height());	
				});				
			}, delay);
			
		}
	}
		
	var loadPage = function(nav) {
		var page = nav.attr('href');
		var hidePages = pages.not(page).filter(':visible');
		var showPage = pages.filter(page);
		
		navs.not(nav).removeClass('active');
		nav.addClass('active');
		
		window.location.hash = page;
		
		if (page == '#projects' && showPage.is(':empty')) {
			$.get('index.php/projects', function(data) {
				showPage.html(data).slideDown();
			});
		}
		
		if (hidePages.length > 0) {
			hidePages.slideUp(function() {
				showPage.slideDown();
			});
		} else {
			showPage.slideDown();
		}
	}
	
	return {
		// declare public methods here
		init: init
	}	
}();

var projects = function() {
	var init = function() {
		Galleria.run('[id^=slideshow]', {
			height: 1,
			lightbox: true,
			thumbnails: false
		});
	}

	return {
		// declare public methods here
		init: init
	}	
}();
