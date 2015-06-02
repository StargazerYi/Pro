require([
  './pro'
], function(){

  // 消息页面顶部标签（公告，水电，快件这三个）；通过增减类名来确定显示哪个子页面
  $(".ui-top-bar .page2 .ui-button").each(function(i) {
    this.addEventListener("touchstart",function(){
      if (!$(this).hasClass("js-active")) {
        $(".page2 .ui-page-content .ui-tab").each(function() {
          $(this).removeClass("js-active");
        });
        $(".page2 .ui-page-content .ui-tab").eq(i).addClass("js-active");
      }
    }, false);
  });
});
