$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip({outDuration:43});
    $('.modal').modal();
});

$(function(){
    $("#login_btn").click(function(){
        $("#login_btn").hide();

        var username = $("#name").val();
        var password = $("#pass").val();

        if(username=="admin" && password=='1234'){
            window.location = "datos.html"
        }else{
            $("#login_message").text("Datos Inválidos");
        }
            
    });
});
