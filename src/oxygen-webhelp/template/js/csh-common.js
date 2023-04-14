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
	$('.wh_main_page_toc_entry.home .close_toc_icon').click(function() {
	  $('.close_bt_div').click();
	}); 	
});

/*wh_tile 클릭 이벤트*/
$(function(){
	$('.wh_content_area .wh_tile').on('click', function(){
		window.location.href = $(this).find('.topicref a').attr('href');
	});
	$('.wh_content_area .wh_tile:last-child').on('click', function(){
		window.location.href = $(this).find('a').attr('href');
	});
	
	
	$('.wh_main_page_toc_entry.home .topicref').on('click', function(){
		window.location.href = $('.wh_main_page_toc_entry.home').find('.topicref a').attr('href');
	});
	$('.wh_main_page_toc_accordion_entries > .wh_main_page_toc_entry').on('click', function(){
		window.location.href = $(this).find('.topicref a').attr('href');
	});	
	$('.wh_main_page_toc > .wh_main_page_toc_entry:last-child').on('click', function(){
			window.location.href = $(this).find('.abbr a').attr('href');
	});
	/*홈	버튼*/
	$('.kia-logo').on('click', function(){
		window.location.href = $(this).attr('href');
	});
	
	
	
	/* wh_topic_page 네비게이션 버튼 트렌지션효과 */
	$(".navnext a").on('click', function(){
		$('.wh_content_area').toggleClass('rightClass');  
		event.preventDefault();
		setTimeout(function(){
			window.location.href = $(".navnext a").attr('href');
		 }, 300);
	});
	$(".navprev a").on('click', function(){
		$('.wh_content_area').toggleClass('leftClass'); 
		event.preventDefault();
		setTimeout(function(){
			window.location.href = $(".navprev a").attr('href');
		 }, 300);
	});	
	
	$(".wh_main_page .wh_tile").on("mouseover", function(){ 
		var img = $(this).find("img"); 
		img.attr("src", img.attr("src").substr(0, img.attr("src").lastIndexOf(".")) + "_hover" + img.attr("src").substr(img.attr("src").lastIndexOf(".")));
	});
	$(".wh_main_page .wh_tile").on("mouseout", function(){
		var img = $(this).find("img");
		img.attr("src", img.attr("src").replace("_hover.", "."));
	});
	
	/*사이드 toc 플러스 기호 반전효과*/
	$(".wh_main_page_toc .wh_main_page_toc_accordion_header").on("mouseover", function(){ 
		$(this).toggleClass('imgReverse');
	});
	$(".wh_main_page_toc .wh_main_page_toc_accordion_header").on("mouseout", function(){
		$(this).toggleClass('imgReverse');
	});
	
	/* 검색 버튼 + 검색어 입력창 show/hide 처리 */
	$(".wh_search_button").on('click', function(){
		var activeVal = $('.wh_search_textfield').val(); 
		
		if($('.wh_search_textfield').hasClass('activeTextfield') && activeVal != ""){
			$('#searchForm').submit(); 
		}else {
			$(".wh_search_textfield").addClass('activeTextfield');
			$(".wh_search_textfield").focus();
		}
	}); //검색버튼 끝 
	$(".wh_search_textfield").on('focusout', function(){
		setTimeout(function() {
			if ($(".wh_search_textfield").is(":focus")) {
				return false;
			}
			$('.wh_search_textfield').val('');
			$(".wh_search_textfield").removeClass('activeTextfield');
		}, 300);
	});

	/* 검색 후 back 클릭하여 topic 페이지로 넘어올 경우 검색어 제거 */
	$(".wh_topic_page .wh_search_textfield").val("");
	/* 검색 페이지 : 검색어 입력창 show + focus */
	$(".wh_search_page .wh_search_textfield").addClass("activeTextfield");
	$(".wh_search_page .wh_search_textfield").focus();
}); 
$(function(){
/*영역별 높이 조절*/	
	   $(".breadcrumb-sticky").next().css("overflow-y", "auto");
	   $("html").css("visibility", "visible"); 
});
/*스크롤바 있는 페이지에 다른 css적용*/
var bodyId = document.body.id;  
var myDiv = document.getElementById(bodyId); 
var hasVerticalScrollbar = myDiv.scrollHeight > myDiv.clientHeight;
console.log("hasVerticalScrollbar: ", hasVerticalScrollbar); 

$(function(){
	if(hasVerticalScrollbar ===  true){
		$('.wh_content_area').css('padding-left', '20px');
		$('.wh_content_area').css('padding-right', '10px');	
	};
});


