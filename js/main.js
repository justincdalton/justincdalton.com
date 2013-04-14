// add site-wide elements to jquery cache
var hash = window.location.hash;
var navs = $('nav a');
var container = $('#container');
var pages = container.find('.page');

$('a').click(function() {
	$(this).blur();
});

var home = function() {
	var dripHeight = 300;
	var delay = 300;
	
	// add elements to jquery cache
	var contentBoxes = homeContent.find('div.homeContent-box');
	var contentHeads = homeContent.find('a.homeContent-head');
	var contentBodies = homeContent.find('p.homeContent-body');
	var contentDrips = homeContent.find('div[class^=drip]');	
	
	var contentTimer;
	
	// public initialization method
	var init = function() {
		var self = this;
		
		// onload events
		// show content on page load
		if (hash == '#contact') {
			switchNav(contactNav, contactContent);
		} else {
			switchNav(homeNav, homeContent);
		}
		
		
				
		// handle click on home nav link
		homeNav.click(function() {
			switchNav($(this), homeContent, contactContent);
			return false;
		});
		
		// handle click on contactContent nav link
		contactNav.click(function() {
			switchNav($(this), contactContent, homeContent);
			return false;
		});
		
		// handle click event on 
		contentHeads.click(function() {
			toggleContent($(this).parent('div.homeContent-box'), false);
			return false;
		});
		
		contentHeads.mouseenter(function() {
			var contentBox = $(this).parent('div.homeContent-box');			
			
			if (contentTimer) {
				clearTimeout(contentTimer);
				contentTimer = null;
			}
			
			contentTimer = setTimeout(function() {
				toggleContent(contentBox, true);	
			}, delay);					
		});
	}
	
	var toggleContent = function(homeContent, keepSelected) {
		var self = this;
		
		// get the homeContent body of the homeContent that was activated
		var body = homeContent.find('p.homeContent-body');
		
		// if the selected homeContent was already visible set hideSelected to true so it doesn't re-show
		var hideSelected = body.is(':visible');
		
		// if the current homeContent was selected but keepSelected is true then do not hide the current homeContent 
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
			// if hideSelected is false show the activated homeContent
			setTimeout(function() {
				contentDrips.animate({ height: dripHeight * 2 });
			
				body.slideDown(function() {
					$(this).scrollTop($(this).height());	
				});				
			}, delay);
			
		}
	}
		
	var switchNav = function(nav, showContent, hideContent) {
		if ()
		
		if (hideContent) {
			hideContent.slideUp(function() {
				showContent.slideDown();
			});
		} else if (showContent) {
			showContent.slideDown();
		}
		
		navs.not(nav).removeClass('active');
		nav.addClass('active');
	}
	
	var showProjects = function() {
		
	}
	
	return {
		// declare public methods here
		init: init
	}	
}();
