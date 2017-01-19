/*蓝科企业网站系统PHP版
http://www.lankecms.com*/

//导航
var timeout         = 500;
var closetimer    = 0;
var ddmenuitem      = 0;

function dropmenu_open(){
  dropmenu_canceltimer();
  dropmenu_close();
  ddmenuitem = $(this).find('ul').eq(0).css('visibility', 'visible');
}

function dropmenu_close(){ 
  if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');
}

function dropmenu_timer(){ 
  closetimer = window.setTimeout(dropmenu_close, timeout);
}

function dropmenu_canceltimer(){ 
  if(closetimer){ 
    window.clearTimeout(closetimer);
    closetimer = null;
  }
}

$(document).ready(function(){
  $('#nav_ul_big > li').bind('mouseover', dropmenu_open);
  $('#nav_ul_big > li').bind('mouseout',  dropmenu_timer);
   $('#nav_ul_big > li a:last').css("border","none");
});

document.onclick = dropmenu_close;