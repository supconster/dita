/*서치박스 크기 계산*/
var width = 0;
var total = 0;
var setTextfield = function(){
			
			$(".wh_header").children(".wh_main_page_search").each(function(){
					total = $(this).outerWidth(); 
			});
			$(".wh_search_input").children(".header-left").each(function(){
					width += $(this).outerWidth(); 
			});
		    $(".wh_search_input").children(".header-right-container").each(function(){
					width += $(this).outerWidth(); 
			});
			total -= 5; 
 };
/*
 * topic_page pagination - number version
 */
var showCustomNavigationLinks = function() {
	var hide_csh_nav = false;
	var csh_naviation_links = $(".csh_naviation_links div");
	var csh_nav_html;
	var listItems = $(".wh_publication_toc li.active").parent().children('li');
	//토픽 한개는 보여지지 않음
	if (listItems && listItems.length > 1) { 
		var aNum = 0;
		var prevHref="";
		var nextHref="";
		var lastPage=false; 
		var firstPage=false;
		listItems.each(function(idx, li) {
			var liobj = $(li);
			if (liobj.attr('class') === 'active') {
				aNum = idx + 1;
			}
			if( aNum == idx ){
				nextHref = liobj.find('a').attr('href');
			}				
			if( aNum == 0 ){
				prevHref=liobj.find('a').attr('href')
				
			} 
			if (aNum == listItems.length) {
				lastPage = true; 
			}else if(aNum == 1){
				firstPage = true;
				
			}
		}); 
	
		$( csh_naviation_links ).append("<a href='"+prevHref+"'></a><span>"+"<font>" +aNum+ "</font><font>" + " / "+ "</font><font>"+listItems.length + "</font>" + "</span><a href='"+nextHref+"'></a>"); 
		$('.csh_naviation_links > div > span').addClass('span_nav');
		$('.csh_naviation_links>div a:first-child').addClass('arrowBack');
		$('.csh_naviation_links>div a:last-child').addClass('arrowForward');
		if(lastPage){
			$('.csh_naviation_links>div a:last-child').addClass('disable_forward');
			$('.arrowForward').on('click', function(e) {
				e.preventDefault(); // 기본 동작 막기
			});
		}else if(firstPage){
			$('.csh_naviation_links>div a:first-child').addClass('disable_back');
			$('.arrowBack').on('click', function(e) {
				e.preventDefault(); // 기본 동작 막기
			});
		}
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
	showCustomChildLinks();
	showCustomNavigationLinks();	
	setTextfield();
 
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
	
	
	/*wh_tile 클릭 이벤트*/
	$('.wh_content_area .wh_tile').on('click', function(){
		window.location.href = $(this).find('.topicref a').attr('href');
		window.location.href = $(this).find('span a').attr('href');
	});

	$('.wh_main_page_toc_accordion_entries > .wh_main_page_toc_entry').on('click', function(){
		window.location.href = $(this).find('.topicref a').attr('href');
	});	
	$('.wh_main_page_toc > .wh_main_page_toc_entry:not(:first-child)').on('click', function(){
			window.location.href = $(this).find('span > a').attr('href');
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
	
	/* navigation_links 첫,마지막 페이지 클릭 막기*/
	$(".wh_navigation_links .navprev").on('mouseover', function(){
		if ($('.wh_navigation_links .navprev').children().length !== 0){
			$('.wh_navigation_links .navprev').toggleClass('hover'); 	
		}
	});
	$(".wh_navigation_links .navprev").on('mouseout', function(){
		if ($('.wh_navigation_links .navprev').children().length !== 0){
			$('.wh_navigation_links .navprev').toggleClass('hover'); 	
		}
	});
	$(".wh_navigation_links .navnext").on('mouseover', function(){
		if ($('.wh_navigation_links .navnext').children().length !== 0){
			$('.wh_navigation_links .navnext').toggleClass('hover'); 	
		}
	});
	$(".wh_navigation_links .navnext").on('mouseout', function(){
		if ($('.wh_navigation_links .navnext').children().length !== 0){
			$('.wh_navigation_links .navnext').toggleClass('hover'); 	
		}
	});
	
	/*wh_tile 이미지 반전*/
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
			
		if( activeVal != ""){
			$('#searchForm').submit(); 
		}else {
			$(".wh_search_textfield").css("width",  "calc( "+total+"px - "+width+"px )");
			$(".wh_search_textfield").addClass("show"); 
			$(".wh_search_textfield").focus(); 
		} 
	}); 

	$(".wh_search_textfield").on('focus', function(){  
		$(".wh_search_textfield").css("width",  "calc( "+total+"px - "+width+"px )");
		$(this).css("transition", "0.2s");
		$("#searchForm .wh_search_rm_button").show();
	});
		
	$(".wh_search_textfield").on('blur', function(evData){ 
		if (evData.relatedTarget) {
			var evOrigin = $(evData.relatedTarget);
			if (evOrigin.attr('class') == 'wh_search_button' || evOrigin.attr('class') == 'wh_search_rm_button') {
				return;
			}
		}
		$("#searchForm .wh_search_rm_button").hide();
		if( !$(this).hasClass("activeTextfield")){ 
			$('.wh_search_textfield').css("width", "0px");
			$('.wh_search_textfield').val('');  
			$(".wh_search_textfield").removeClass("show");  
		}
	});

	/* 검색 후 back 클릭하여 topic 페이지로 넘어올 경우 검색어 제거 */
 
	$(".wh_topic_page .wh_search_textfield").val("");
	if(total - width > 300 && $(window).width() > 600){
		$('.wh_search_page  .wh_search_textfield').css("width", "220px");
	}else {
		$('.wh_search_page  .wh_search_textfield').css("width", "calc( "+total+"px - "+width+"px )");  
	}
	
	/*영역별 높이 조절*/	
	var breadcrumb = document.querySelector(".breadcrumb-sticky");
	if(breadcrumb){
		$(".breadcrumb-sticky").next().css("overflow-y", "auto");
		$("html").css("visibility", "visible"); 
	}else {
		$(".container-fluid").css("overflow-y", "auto");
		$("html").css("visibility", "visible"); 
	}
			
}); 

/*스크롤바 있는 페이지에 양옆 간격 css적용*/
var htmlTag = document.documentElement; 
var hasVerticalScrollbar = false;

$(document).ready(function () {
      hasVerticalScrollbar = $(".container-fluid").prop("scrollHeight") > $(".container-fluid").prop("clientHeight");
});
$(function(){
	if(hasVerticalScrollbar ===  true){
		if(htmlTag.hasAttribute("dir")){
			$('.wh_content_area').css('padding-left', '10px');
			$('.wh_content_area').css('padding-right', '20px');	
		}else{
			$('.wh_content_area').css('padding-left', '20px');
			$('.wh_content_area').css('padding-right', '10px');	
		}
	};
});
/* 모바일용 높이 계산 */
var documentHeight = () => {
var doc = document.documentElement;
doc.style.setProperty('--doc-height', `${window.innerHeight}px`);

}
window.addEventListener('resize', () => documentHeight());
documentHeight();

/*사파리 브라우저에서 뒤로가기 오류 수정 */
function checkBrowser(){
	if(navigator.vendor.match(/google/i)) return 'Chrome'; 
	if(navigator.vendor.match(/apple/i)) return 'Safari';
	if(navigator.vendor.match(/^$/)) return 'FireFox';
};

var browser = checkBrowser();

$(function(){ 
	
	if(browser === 'Safari' || browser === 'FireFox'){
		window.addEventListener('pageshow', function (event) {
			if (event.persisted || window.performance && window.performance.navigation.type == 2) {
				location.reload();
			}
		}, false);
	}
	
	/* 로드 시 searchBox의 속성제거 */
	var inputElement = document.getElementById("textToSearch");
	inputElement.removeAttribute("required");
	inputElement.type = 'text';
	
	/*모바일 스와이프*/
	if($('html').attr("dir") === "ltr" || !$('html').is("[dir]")){
		if ($('body').hasClass('wh_topic_page')) {
			$('body.wh_topic_page').swipe({
				swipeStatus:function(event, phase, direction, distance, fingerCount) {
					var parentDIV = event.target.closest('div.table-container');
					if (parentDIV) {
						var scrollBar = parentDIV.scrollWidth > parentDIV.clientWidth;
						if (scrollBar) {return false;}
					}
					return true;
				},
				tap:function(event, target) {
					if (target) {
						var evOrigin = $(target);
						if (evOrigin.attr('class') == 'wh_search_button' || evOrigin.attr('class') == 'wh_search_rm_button') {
							return;
						}
					}
                    $(".wh_search_textfield").blur();
				},
				swipeLeft:function() {
					if ($('.wh_navigation_links .navnext').children().length !== 0){
						window.location.href = $(".navnext a").attr('href');
					}
				},
				swipeRight:function() {
					if ($('.wh_navigation_links .navprev').children().length !== 0){
						window.location.href = $(".navprev a").attr('href');
					}
				}
			});
		};
	}else if($('html').attr("dir") === "rtl"){
		if ($('body').hasClass('wh_topic_page')) {
			$('body.wh_topic_page').swipe({
				swipeStatus:function(event, phase, direction, distance, fingerCount) {
					var parentDIV = event.target.closest('div.table-container');
					if (parentDIV) {
						var scrollBar = parentDIV.scrollWidth > parentDIV.clientWidth;
						if (scrollBar) {return false;}
					}
					return true;
				},
				swipeRight:function() {
					if ($('.wh_navigation_links .navnext').children().length !== 0){
						window.location.href = $(".navnext a").attr('href');
					}
				},
				swipeLeft:function() {
					if ($('.wh_navigation_links .navprev').children().length !== 0){
						window.location.href = $(".navprev a").attr('href');
					}
				}
			});
		};	
	};
	/*
	 * append "X" icon before search icon
	 */
	$('#searchForm .wh_search_button').before('<button type="button" class="wh_search_rm_button" style="display: none;"/>');
	$("#searchForm .wh_search_rm_button").on('click', function(){
		$(".wh_search_textfield").focus(); 
		$(".wh_search_textfield").val('');	
	});
	
	// WebHelp 페이지 로딩 시 
	// 로컬스토리지에 저장된 webhelp_embeded 설정값을 읽어
	// CSS에서 참조할 webhelp_embeded 변수 설정 적용
	let webhelp_embeded = window.localStorage.getItem("webhelp_embeded");
	if (webhelp_embeded) {
		document.documentElement.setAttribute("webhelp_embeded", webhelp_embeded);
		// 메뉴 아이콘 복사 => breadcrumb 라인
		if (webhelp_embeded === "true") {
			$('.breadcrumb-sticky > nav').append($('.btn_nav'));
		}
	}
});