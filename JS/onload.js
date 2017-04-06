$.ajax("../navbar.txt").done(function (data) {
    $(".navbar").html(data);
})
jQuery(document).ready(function () {
    jQuery('a.gallery').colorbox({
        height: "75%",
        width: "75%"
    });
});
