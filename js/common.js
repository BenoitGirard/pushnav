$(function() {
    $.pushnav();


    $("#replaceState1").click(function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        History.replaceState(null,null,"?isAjax=true&expander1=true");
    });

    $("#replaceState2").click(function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        History.replaceState(null,null,"?isAjax=true&expander2=true");
    });

  /*  $(".tab2").click(function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        console.log("=== Test disable preventDefault");
    });*/
});