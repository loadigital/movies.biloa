function ponleFocus(){
    document.getElementById("inp").focus();
}

ponleFocus();

const inp = document.getElementById("inp");
//const boton = document.getElementById("boton");
const cont_cards = document.getElementById("cont-cards")

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
const filtrar = ()=>{
    //console.log(inp.value)
    cont_cards.innerHTML = '';
    const texto = inp.value.toLowerCase();

    for (let producto of data) {
    let nombre = producto.title.toLowerCase();

    if(nombre.indexOf(texto) !== -1){
        cont_cards.innerHTML += `
        <div class="co-cards">
        <div class="cards">
         <div class="img-cards"><a href="${producto.posterLink.link_app}"><img src="${producto.imgLink}" alt=""></a></div>
         <div class="title-cards"><p>${producto.title}</p></div>
        </div>
        </div>
        
        `
    }  
    }

    if(cont_cards.innerHTML === ''){
        cont_cards.innerHTML += `
        <div class="cards_no" style="margin-top:100px">
         <p>No hay resultados para tu busqueda...</p>
        </div>
        
        `

    }
}
//boton.addEventListener("click", filtrar)
inp.addEventListener("keyup", filtrar)
//filtrar()

}