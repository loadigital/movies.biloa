document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

const fetchData = async () => {
    try{
        const res = await fetch('js/db.json');
        const data = await res.json();
        productos(data);
    }catch (error) {
        console.log(error);
    }
}

const productos = data => {
    function product(data){
        return [...data].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 1)
      }
      product(data).forEach(content => {
        const insert = document.getElementById("insert-content");
        
        insert.innerHTML += `
        <div class="card">
            <div class="card-img col-12 flexrow-c">
                 <a href=""></a><img class="img-card" src="${content.img}" alt="">
            </div>
            <div class="card-body">
                <h2 class="title-card">${content.title}</h2>
                <p class="flexrow-c">Envío gratis a todo el país "Colombia"...</p>
                <a  target="_blank" href="https://wa.me/573175284010?text=Hola%20deseo%20mas%20información%20del%20siguiente%20producto  *${content.title}*" class="col-12 flexrow-c"><button class="bot-2 bi-whatsapp"> Mas Información</button></a>
                <p class="desc col-8 flexrow-c">${content.descripcion}</p>
            </div>
        </div> 
        `
        document.getElementById("video-").src = content.video;
       

    })}
