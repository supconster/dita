var showNavigationLinks = function() {
	$('.wh_navigation_links .navheader span').fadeIn(100, function(){
	  setTimeout(function() {
	   $('.wh_navigation_links .navheader span').fadeOut(1000);
	  }, 2000);
	});
};

var showCustomNavigationLinks = function() {
	var hide_csh_nav = false;
	var csh_naviation_links = $(".csh_naviation_links div");
	var csh_nav_html;
	var listItems = $(".wh_publication_toc li.active").parent().children('li');
	if (listItems && listItems.length > 0) {
		listItems.each(function(idx, li) {
			  var liobj = $(li);
			  if (liobj.children('div').attr('data-state') != 'leaf') {
			   hide_csh_nav = true;
			  }
			  var linkobj = $('<a>').appendTo(csh_naviation_links);
			  linkobj.attr('href', liobj.find('a').attr('href'));
			  var spanobj = $('<span>').appendTo(linkobj);
			  if (liobj.attr('class') === 'active') {
			   spanobj.attr('class', ' page-marker active ');
			  }else {
			   spanobj.attr('class', ' page-marker ');
			  }
		})
	}else {
		hide_csh_nav = true;
	}
 	if (!hide_csh_nav) {
		$('.csh_naviation_links').show();
 	}  	
}

var showCustomChildLinks = function() {
	var hide_csh_nav = false;
	var csh_naviation_links = $(".wh_child_links .ullinks");
	var csh_nav_html;
	var listItems = $(".wh_publication_toc li.active").children('ul');
	if (listItems && listItems.length > 0) {
		hide_csh_nav = false;
	}else {
		hide_csh_nav = true;
	}
 	if (!hide_csh_nav) {
		csh_naviation_links.html(listItems.html());
		$('.wh_child_links').show();
 	}  	
}

$(function(){
	showNavigationLinks();
	showCustomChildLinks();
	showCustomNavigationLinks();	
 
	$(document).on('touchStart click', '.container-fluid', function(){
	 showNavigationLinks();
	});
	
	$('.btn_nav').click(function() {
	 $('.wh_main_page_toc').toggleClass('show');
	 $(".close_bt_div").toggle();
	});
	
	$('.close_bt_div').click(function() {
	  $('.wh_main_page_toc').toggleClass('show');
	  $(".close_bt_div").toggle();
	}); 
});

/*wh_tile 클릭 이벤트*/
$(function(){
	$('.wh_content_area .wh_tile').on('click', function(){
		
		window.location.href = $(this).find('.topicref a').attr('href');
		
		
	});
	$('.wh_main_page_toc_entry').on('click', function(){
		
		window.location.href = $(this).find('.topicref a').attr('href');
	});
	
	/* wh_topic_page 네비게이션 버튼 애니매이션효과 */
	$(".navnext a").on('click', function(){
		$('.container-fluid').toggleClass('rightClass');  
		event.preventDefault();
		setTimeout(function(){
		window.location.href = $(".navnext a").attr('href');
		 }, 500);
	});
	$(".navprev a").on('click', function(){
		$('.container-fluid').toggleClass('leftClass'); 
		event.preventDefault();
		setTimeout(function(){
		window.location.href = $(".navprev a").attr('href');
		 }, 300);
	});	
	
});

