function ponleFocus(){
    document.getElementById("inp").focus();
}

ponleFocus();


//db
const contentCards = document.getElementById("co-cards")
	
db.forEach(function(numero) {
    console.log(numero);

    const cards = document.createElement("div");
  
    cards.innerHTML=`
    <div class="cards">
    <div class="img-cards"><img src="${numero.nombre}" alt=""></div>
    <div class="title-cards"><p>${numero.title}</p></div>
    </div>
       
	`

	contentCards.appendChild(cards)
});


//buscador

$(document).ready(function(){
    $("#inp").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".include-main .co-cards .cards").filter(function() {    
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });

    const inp = document.getElementById("inp");
    console.log(inp)
