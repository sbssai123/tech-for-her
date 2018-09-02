$(document).ready(function(){
    $("#first").fadeIn(1000, function(){
        $("#first").fadeOut(2000, function(){
            $("#hacker").fadeIn();
            $("#second").fadeIn(function(){
                $("#second").fadeOut(2000);
                $("#hacker").fadeOut(2000, function(){
                    $("#heading").fadeIn(1000, function(){
                        $("#head-description").fadeIn();
                        $("#explore").fadeIn(1000);
                        $("#three-girls").fadeIn(1000);
                        $("#show").fadeIn(1000);
                    });
                });
            });
        });
    });
});