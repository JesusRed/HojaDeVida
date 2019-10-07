$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip({outDuration:43});
    $('.modal').modal();
    $('.parallax').parallax();
});

$(function(){
    $("#login_btn").click(function(){
        

        var username = $("#name").val();
        var password = $("#pass").val();

        if(username=="admin" && password=='1234'){
            window.location = "datos.html"
        }else{
            $("#login_message").text("Datos Inválidos");
            $("#login_btn").show();
        }
            
    });
});
