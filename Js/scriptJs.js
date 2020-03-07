
$(function()
{
 //   var estado = 1;
    $(".logoMenu").click(function(){

        $("#navegacao > ul").toggleClass("mostraMenu");
        $("#navegacao > ul li").toggleClass("mostraMenu-lista");
        $(this).css({
            "position": "absolute",
            "width": "70px",
        });
        /*
        if(estado !=0){  
        $("#navegacao > ul").addClass("mostraMenu");
        $("#navegacao > ul li").addClass("mostraMenu-lista");
           
            estado = 0;
        }else {
            $("#navegacao > ul").removeClass("mostraMenu");
            $("#navegacao > ul li").removeClass("mostraMenu-lista");
            estado = 1;
        } */
    });
})
/* EVENTO PRONTO 
$(document).ready(function()
{
    script ();
})
 */
/*
$(function(){
   
    var estado = 0;

    $("#titulo").click(function(){
        if(estado !=0)
        {
            $("*").css("color","#069");
            estado = 0;
        }else {
            $("*").css("color","yellow");
            estado = 1;
        }
    });
});
*/


/*
function script ()
{
var texto = "ARTISAN SCHOOL";
//var id = document.getElementById("titulo");
//id.innerText = texto;
var id  = $("#titulo");

id.text(texto);
}
*/

