(function ($) {
  'use strict';

  $(document).ready(function () {
  	
  	function tabs () {

  		// create global variable
  		var $tabWrapper = $('.tab-wrapper'),
  			$tabMenuLi = $tabWrapper.find('.tab-menu li'),
  			$thumbsRow = $tabWrapper.find('.thumbs-row');

  		// hide not first content
  		$thumbsRow.not(':first-of-type').hide();

  		// assignment tata-att
  		$tabMenuLi.each(function(i){
  			$(this).attr('data-tab', 'tab-' + i);
  		});
  		$thumbsRow.each(function(i){
  			$(this).attr('data-tab', 'tab-' + i);
  		});

  		// click function
  		$tabMenuLi.on('click', function(i){
  			i.preventDefault();

  			var $getWrapper = $(this).closest('.tab-wrapper'),
  				dataTab = $(this).attr('data-tab');

  				$getWrapper.find('.tab-menu a').removeClass('active');
  				$(this).find('a').addClass('active');

  				$getWrapper.find('.thumbs-row').hide();
  				$getWrapper.find('.thumbs-row').filter('[data-tab=' +dataTab+ ']').show();
  		});
  	}

  	tabs();
  }); //end ready

}(jQuery));