
// Scroller

$(document).ready(function() {
	$('a.panel').click(function () {
		$('a.panel').removeClass('selected');
		$(this).addClass('selected');
		current = $(this);
		$('#wrapper').scrollTo($(this).attr('href'), 1200);		
		return false;
	});
	$(window).resize(function () {
		if (!($('#wrapper').hasClass("left_aligned")))
		resizePanel();
	});
});
function resizePanel() {  
	 //get the browser width and height  
     width = $(window).width();  
     height = $(window).height();  
     //get the mask width: width * total of items  
     mask_width = width * $('.item').length;  
     //set the dimension   
     $('#wrapper, .item').css({width: width, height: height});  
     $('#mask').css({width: mask_width, height: height});  
     //if the item is displayed incorrectly, set it to the corrent pos  
     $('#wrapper').scrollTo($('a.selected').attr('href'), 0);  
}  



// Navigation Highlighting

jQuery(function( $ ){
	$('#menu li:first').addClass('active');
	$('a.panel').click(function(){
		$('#menu').find('li').removeClass('active');
		$(this).parent().addClass('active');
		var fragment = this.getAttribute('href');
		$('#menu a[href=' + fragment + ']').parentsUntil('#menu').children('li').toggleClass('active');
	});
});



// Tabs

$(document).ready(function() {
	//When page loads...
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("current").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content
	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("current"); //Remove any "active" class
		$(this).addClass("current"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
});
