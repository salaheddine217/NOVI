$(".header .header__bars").on('click', function () {

    var selector = $(".header .header__nav")

    if (selector.hasClass('shown')) {
        selector.css('right', "100%");
        selector.removeClass('shown');
    } else {
        selector.css('right', "0");
        selector.addClass('shown');
    }
});

$(".header .header__nav span").on('click', function () {

    var selector = $(".header .header__nav")

    if (selector.hasClass('shown')) {
        selector.css('right', "100%");
        selector.removeClass('shown');
    } else {
        selector.css('right', "0");
        selector.addClass('shown');
    }
});

var testimonial_slider = new Swiper(".testimonial-slider", {
    loop: true,
    speed: 800,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.testimonial-nav-right',
        prevEl: '.testimonial-nav-left',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        767.98: {
            slidesPerView: 1,
        },
        1150: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    }
});

var client_slider = new Swiper(".client-slider", {
    loop: true,
    speed: 800,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
        },
        767.98: {
            slidesPerView: 2,
        },
        991.98: {
            slidesPerView: 4,
        },
    }
});

$(".text-link").on("click", function (e) {
    e.preventDefault();
    WorkRequestFunc();
    $(e.target).addClass("hidden");
    $(e.target).parent().addClass("row-hidden");
});

function WorkRequestFunc() {
    var WorkRequest = new XMLHttpRequest();
    WorkRequest.open("GET", "assets/js/work.json");
    WorkRequest.onload = function () {
        var WorkData = JSON.parse(WorkRequest.responseText);
        var WorkStr = "";
        for (i = 0; i < WorkData.length; i++) {
            WorkStr +=
                "<a href=" + WorkData[i]["src"] + " data-effect=" + "\"mfp-zoom-in\"" + " title=\"" + WorkData[i]["name"] + "\">"
                + "<div class=\"projects__single\">" + "<div class=\"projects__single-img\">"
                + "<img src=\"" + WorkData[i]["src"] + "\" " + "alt=\"" + WorkData[i]["alt"] + "\">"
                + "</div>"
                + "<div class=\"projects__single-info\">"
                + "<h3 class=\"h3-heading dark\">" + WorkData[i]["name"] + "</h3>"
                + "<p class=\"paragraph light\">" + WorkData[i]["category"] + "</p>"
                + "</div></div></a>";

        }
        $(".projects__wrapper").append(WorkStr);
    }
    WorkRequest.send();
}