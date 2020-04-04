$(document).ready(function(){
    $(" a").hover(function() {
        $(this).next("em").animate({opacity: "show", top: "-70px"}, "slow");
    }, function() {
        $(this).next("em").animate({opacity: "hide", top: "-85px"}, "fast");
    });
});