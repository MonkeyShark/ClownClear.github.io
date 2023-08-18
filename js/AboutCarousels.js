$(document).ready(function() {
    $('#character-carousel').slick({
        dots: true, // Show navigation dots
        arrows: true, // Show navigation arrows
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        responsive:[
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('#clown-carousel').slick({
        dots: true, // Show navigation dots
        arrows: true, // Show navigation arrows
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        responsive:[
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('#gamemodes-carousel').slick({
        dots: true, // Show navigation dots
        arrows: true, // Show navigation arrows
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        responsive:[
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('#campaigns-carousel').slick({
        dots: true, // Show navigation dots
        arrows: true, // Show navigation arrows
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 3, // Number of slides to scroll at a time
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }]
    });

    $(document).ready(function() {
    $('.read-more-btn').click(function() {
        var description = $(this).siblings('.character-description');
        var buttonText = $(this).text();

        description.slideToggle();

        if (buttonText === 'Read More') {
            $(this).text('Read Less');
        } else {
            $(this).text('Read More');
        }
        });
    });
});