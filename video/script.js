
function getparam(a,e){return e||(e=window.location.href),new URL(e).searchParams.get(a)}
let s=a=>document.getElementById(a);

let get=()=>{
  getbase();
}
let getbase=()=>{
    let ply = [];
  
  
    ply.id =  s('videourl').value;
      
   
    console.log(ply);
  
    var arr = JSON.stringify(Object.assign({}, ply))
    console.log(btoa(arr));
    window.base =btoa(arr);
    iframe();
    return btoa(arr);
}


let iframe=()=> {
    s('stream').src='stream.html?id='+base;

    var op = document.getElementById("codeframe")
    const div=document.createElement("div")
  
    div.innerHTML =`
    <p>Insertar URL</p>
    <textarea>stream.html?id=${base}</textarea>

    <p>Código de inserción</p>
    <textarea><iframe width="560" height="315" scrolling="no" src="stream.html?id=${base}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe></textarea>
    
  
    `
    op.appendChild(div)
  
  
}
