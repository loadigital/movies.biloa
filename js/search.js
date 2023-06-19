function ponleFocus(){
    document.getElementById("inp").focus();
}

ponleFocus();


//db
const contentCards = document.getElementById("co-cards")
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});
const fetchData = async () => {
    try{
        const res = await fetch('https://loadigital.github.io/movies.biloa/js/api_db.json');
        const data = await res.json();
        movies(data);
    }catch (error) {
        console.log(error);
    };
};
const movies = data =>{
	
data.forEach(function(data) {
    console.log(data);

    const cards = document.createElement("div");
  
    cards.innerHTML=`
    <div class="cards">
    <div class="img-cards"><a href="${data.posterLink.link_web}"><img src="${data.imgLink}" alt=""></a></div>
    <div class="title-cards"><p>${data.title}</p></div>
    </div>
       
	`

	contentCards.appendChild(cards)
});
};

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
