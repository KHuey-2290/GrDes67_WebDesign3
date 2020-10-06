$(document).ready(function() {
    $(".carousel").carousel({
        interval : 1000,
        keyboard : false
    });

    let carouselPaused = false;

    $(".js-carousel-pause").click(function() {
        if (carouselPaused) {
            $(".carousel").carousel("cycle");
            $(this).text("Pause");
        }

        else {
            $(".carousel").carousel("pause");
            $(this).text("Run");
        }

        carouselPaused = !carouselPaused;
    });

    $(".js-button-modal").click(function() {
        $('#myModal').modal({
            backdrop: "static"
        });

    });
});