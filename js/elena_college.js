$(document).ready(function(){
    $("#first").fadeIn(2000, function(){
        $("#second").fadeIn(5000, function(){
            $("#third").fadeIn(5000);
            $("#fourth").fadeIn(5000, function(){
                $("#arrow").show();
                $("#continue").show();
            });
        });
    });
});