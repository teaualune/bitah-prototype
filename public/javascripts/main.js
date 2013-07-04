/*global $, people */

(function () {

    var expandIndex = -1;

    $('.main-panel').click(function (event) {
        if (!$('.tags').hasClass('reveal')) {
            $('body').toggleClass('reveal-panel');
            $('.card-class').toggleClass('reveal');
            event.stopPropagation();
        }
    });

    $('.tag-panel').click(function (event) {
        if (!$('.card-class').hasClass('reveal')) {
            $('body').toggleClass('reveal-panel');
            $('.tags').toggleClass('reveal');
            event.stopPropagation();
        }
    });

    $('.cards').delegate('div', 'click', function (event) {
        if (!$('body').hasClass('reveal-panel')) {
            var div = $(event.currentTarget),
                p = $('.cards p').eq(0),
                arrow = $('.cards i'),
                y = div.position().top + div.height() + 25,
                x = div.position().left + div.width() / 2 + 5,
                newIndex = $('.cards div').index(div);

            arrow.removeClass('trans');
            div.addClass('trans');

            if (expandIndex !== newIndex && p.hasClass('expand')) {
                var prevDIV = $('.cards div').eq(expandIndex);
                div.removeClass('trans');
                prevDIV.removeClass('trans');
                if (div.position().top === prevDIV.position().top) {
                    // horizontal move
                    arrow.addClass('trans');
                } else if (div.position().top >= prevDIV.position().top) {
                    // move down
                    y = y - p.height();
                    p.css('top', y);
                } else {
                    // move up
                    p.css('top', y);
                }
                prevDIV.toggleClass('active');
            } else {
                p.css('top', y);
                p.toggleClass('expand');
            }

            arrow.css('left', x);
            div.toggleClass('active');
            expandIndex = newIndex;

            if (p.hasClass('expand')) {
                var content = p.children('.content');
                content.children('.name').html(people[expandIndex].name);
                content.children('.company').html(people[expandIndex].company);
                content.children('.position').html(people[expandIndex].position);
            }

            event.stopPropagation();
        }
    });

    $(window).resize(function (event) {
        console.log(event);
    });

    $('.page').click(function () {
        // console.log('click page');
        if ($('body').hasClass('reveal-panel')) {
            // console.log('has reveal-panel');
            $('body').removeClass('reveal-panel');
            $('.card-class').removeClass('reveal');
            $('.tags').removeClass('reveal');
        }
    });

}());