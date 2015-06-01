require([
  './pro'
], function(){
    function initMonthList() {
        htmlText1 = "<li class='date-list-item month-item no-click'>";
        htmlText2 = "</li>"
        for (var i = 1; i <= 12; i++) {
            htmlText = htmlText1 + i + htmlText2;
            $('.month-list').append(htmlText);
        }

        monthItem = $('.month-item');
        for (var i = 0; i < monthItem.length; i++) {
            monthItem[i].onclick = function(i) {
                return function() {
                    $('.month').text(i+1);
                    $('#month-button').removeClass('is-click');
                    $('#month-button').addClass('no-click');
                    $('.month-list').css('display', 'none');
                    clickMonth = 0;
                };
            }(i);
        }
    }

    function initYearList() {
        yearItem = $('.year-item');
        for (var i = 0; i < yearItem.length; i++) {
            yearItem[i].onclick = function(i) {
                return function() {
                    $('.year').text(yearItem[i].innerHTML);
                    $('#year-button').removeClass('is-click');
                    $('#year-button').addClass('no-click');
                    $('.year-list').css('display', 'none');
                    clickYear = 0;
                };
            }(i);
        }
    }

    initMonthList();
    initYearList();

    var clickYear = 0, clickMonth = 0;
    $('#year-button').on('click', function() {
        if (clickYear == 0) {
            $('#year-button').removeClass('no-click');
            $('#year-button').addClass('is-click');
            $('.year-list').css('display', 'block');
            clickYear = 1;
        } else {
            $('#year-button').removeClass('is-click');
            $('#year-button').addClass('no-click');
            $('.year-list').css('display', 'none');
            clickYear = 0;
        }
    });

    $('#month-button').on('click', function() {
        if (clickMonth == 0) {
            $('#month-button').removeClass('no-click');
            $('#month-button').addClass('is-click');
            $('.month-list').css('display', 'block');
            clickMonth = 1;
        } else {
            $('#month-button').removeClass('is-click');
            $('#month-button').addClass('no-click');
            $('.month-list').css('display', 'none');
            clickMonth = 0;
        }
    });

    function addReset() {
        inputBox = $('.info-input');
        for (var i = 0; i < inputBox.length; i++) {
            inputBox[i].onkeydown = function(i) {
                return function() {
                    reset = $('.reset');
                    if (reset[i].value != '')
                        reset[i].style.display='inherit';
                }
            }(i);
        }

        reset = $('.reset');
        for (var i = 0; i < reset.length; i++) {
            reset[i].onclick = function(i) {
                return function() {
                    $('.info-input')[i].value='';
                    reset[i].style.display='none';
                }
            }(i);
        }
    }

    addReset();
});
