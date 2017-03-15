  var pages = [];

$(document).ready(function() {

    $("template").each(function(){ 
        pages.push($(this).html()); // Alle templates toevoegen aan de de pages array;
    });

    switchToPage(0); //Wanneer alle templates zijn toegevoegd de eerste pagina tonen.

});


function switchToPage(page) {

    $("nav").find("li").removeClass("selected"); //verwijder de selected class

    $(".container").html(pages[page]);

    $("nav").find("li").each(function(index) {
        if(index == page) {
            $(this).addClass("selected");
        }
    });
}
