$(document).ready(function(){
    $("#header").show(1000, function(){
        $("#one").fadeIn(1000, function(){
            $("#two").fadeIn(500, function(){
                $("#three").fadeIn(500, function(){
                    $("#four").fadeIn(500);
                    $("#finish").fadeIn(1000);
                });
            });
        });
    });
});