var about;

about = function() {
	var init, showSection, setupFragmentChart;
	var sections, fragmentChart, fragmentData, fragmentCtx;
	
	// public initialization method
	init = function() {
		sections = $('section');

		sections.on('inview', function(event, isInView) {
			if (isInView) {
				showSection($(this))
			}
		})

		fragmentData = [
			{ value: 30, color: '#a6e22e'},
			{ value: 30, color: '#B16200'},
			{ value: 40, color: '#00557f'}
		]
	}

	showSection = function(section) {
		section.off('inview').find('.hidden').removeClass('hidden');
		setupFragmentChart(fragmentData);
	}

	setupFragmentChart = function(data) {
		fragmentCtx = $("#fragmentChart").get(0).getContext("2d");
		fragmentChart = new Chart(fragmentCtx).Pie(data, {
			segmentStrokeColor: '#d7d7d7'
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
			autoplay: 3000,
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
