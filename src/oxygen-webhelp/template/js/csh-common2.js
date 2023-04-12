 
  	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false; 
	isMobile = true;
	if( isMobile && $(window).width() < 640 ){
	var objLink = document.createElement( "link" );
		objLink.rel = "stylesheet";
		objLink.type = "text/css";
		objLink.href = "oxygen-webhelp/template/csh-main_m.css"; 
		document.head.appendChild(objLink);
		objLink = document.createElement( "link" );
		objLink.rel = "stylesheet";
		objLink.type = "text/css";
		objLink.href = "oxygen-webhelp/template/csh-fonts_m.css"; 
		document.head.appendChild(objLink);
 
   } 

