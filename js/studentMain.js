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

  // 显示红色气泡；没有未读消息则不显示
  $(".ui-red-counter").each(function() {
    if (this.innerText == "0") {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
  // 底部消息栏上的气泡；将所有类型的未读消息相加，显示在底部
  var messageCounter = 0;
  $(".page2-counter").each(function() {
    messageCounter += parseInt(this.innerText);
  });
  $("#page2-counter-sum").text(messageCounter);


});
