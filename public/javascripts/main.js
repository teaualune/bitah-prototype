/*global $, people */

(function () {

    var expandIndex = -1,
        div = null;

    $('.main-panel').click(function (event) {
        if (!$('.tags').hasClass('reveal')) {
            $('.body').toggleClass('reveal-panel');
            $('.card-class').toggleClass('reveal');
            event.stopPropagation();
        }
    });

    $('.tag-panel').click(function (event) {
        if (!$('.card-class').hasClass('reveal')) {
            $('.body').toggleClass('reveal-panel');
            $('.tags').toggleClass('reveal');
            event.stopPropagation();
        }
    });

    $('.cards').delegate('div', 'click', function (event) {
        if (!$('.body').hasClass('reveal-panel')) {
            div = $(event.currentTarget);

            var p = $('.cards p').eq(0),
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
        if (div && div.hasClass('active')) {
            var p = $('.cards p').eq(0),
                y = div.position().top + div.height() + 25,
                x = div.position().left + div.width() / 2 + 5,
                arrow = $('.cards i');

            if (Math.abs(p.position().top - y) > 1) {
                p.css('top', y);
            }
            if (Math.abs(arrow.position().left - x) > 1) {
                arrow.css('left', x);
            }
        }
    });

    $('.page').click(function () {
        if ($('.body').hasClass('reveal-panel')) {
            $('.body').removeClass('reveal-panel');
            $('.card-class').removeClass('reveal');
            $('.tags').removeClass('reveal');
        }
    });

}());