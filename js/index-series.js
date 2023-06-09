const menu = document.createElement("div");
const subMenu = document.createElement("div");
const includeHeader= document.getElementById("include-header");

menu.className = "content-menu";
menu.innerHTML = `

        <div class="content-header" id="content-header">
            <div class="co-icon-1">
                <div class="icon-menu icons-style"><i class="bi-list"></i></div>
                <div class="co-logo-2"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIcl_Aw2611bC9UWhKHC7O1PKnvUWR3B6oATFG0b4iAVF1S9Klv-FMLde3DQno56WXIINX1BVejaFxfCwucf3eduX80ARWh3QREsHuQ6Npql4MiKCvnX4eVwU5P7rV6oXWx0N74VE_0_LwLDOTZ_HbvsQgDHbLU0blEc5Hu7_7GrbBaN0jUS2f7I2g/s166/LOGO1.png"></div>
            </div>
            <div class="co-icon-2">
                <div class="co-text"><p>Series</p></div>
                <div class="bc1">
            
                <div class="bc-1"><a href="https://loadigital.github.io/movies.biloa/index.html"><i class="bi-collection-play-fill icon"></i>Películas</a></div>
               <!-- <div class="bc-1"><a href="page/series.html"><i class="bi-tv-fill icon"></i>Series</a></div>-->
                <div class="bc-1"><a href="go:B000"><i class="bi-tv-fill icon"></i>Series</a></div>
                <div class="bc-1"><a href="#"><i class="bi-info-circle-fill icon"></i>Información</a></div>
            </div>
            </div>
            
            <div class="co-icon-3">
                <div class="icon-search icons-style"><i class="bi-search"></i></div>
                <div class="icons-style"><i class="bi-filter"></i></div>
                <div class="icons-style"><i class="bi-arrow-clockwise"></i></div>
            
            </div>
        </div>


`
subMenu.className="content-submenu"
subMenu.innerHTML = `
    <div class="co-submenu">
    <li class="link act_recientes"><a href="https://loadigital.github.io/movies.biloa/page/series.html">Recientes</a></li>
    <li class="link act_accion" ><a href="https://loadigital.github.io/movies.biloa/page/pageSeries/accion.html">Acción</a></li>
    <li class="link act_animacion" ><a href="https://loadigital.github.io/movies.biloa/page/pageSeries/animacion.html">Animación</a></li>
    <li class="link act_aventura" ><a href="https://loadigital.github.io/movies.biloa/page/pageSeries/aventura.html">Aventura</a></li>
    <li class="link act_belicos" ><a href="https://loadigital.github.io/movies.biloa/page/pageSeries/belicos.html">Bélicos</a></li>
    <li class="link act_comedia" ><a href="https://loadigital.github.io/movies.biloa/page/pageSeries/comedia.html">Comedia</a></li>
    <li class="link act_documental" ><a href="https://loadigital.github.io/movies.biloa/page/pageSeries/documental.html">Documental</a></li>
    <li class="link act_historico" ><a href="https://loadigital.github.io/movies.biloa/page/pageSeries/historico.html">Histórico</a></li>
    <li class="link act_romance" ><a href="https://loadigital.github.io/movies.biloa/page/pageSeries/romance.html">Romance</a></li>
    <li class="link act_terror" ><a href="https://loadigital.github.io/movies.biloa/page/pageSeries/terror.html">Terror</a></li>
    </div>
       

`
includeHeader.appendChild(menu);
includeHeader.appendChild(subMenu);


//menu lateral

const nav = document.getElementById("nav");
const co_menu_lateral = document.createElement("div");

co_menu_lateral.className="co-menu-lateral";
co_menu_lateral.innerHTML = `
            <div class="bx">
                <div class="bx-1"><i class="bi-x"></i></div>
                <div class="co-logo-1"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIcl_Aw2611bC9UWhKHC7O1PKnvUWR3B6oATFG0b4iAVF1S9Klv-FMLde3DQno56WXIINX1BVejaFxfCwucf3eduX80ARWh3QREsHuQ6Npql4MiKCvnX4eVwU5P7rV6oXWx0N74VE_0_LwLDOTZ_HbvsQgDHbLU0blEc5Hu7_7GrbBaN0jUS2f7I2g/s166/LOGO1.png"></div>
                <div class="co-text-v"><p>Versión: 5.0.2</p></div>
            </div>
            <div class="bc">
            
                <div class="bc-1"><a href="../index.html"><i class="bi-collection-play-fill icon"></i>Películas</a></div>
                <div class="bc-1"><a href="#"><i class="bi-tv-fill icon"></i>Series</a></div>
                <div class="bc-1"><a href="#"><i class="bi-info-circle-fill icon"></i>Información</a></div>
            </div>

`
nav.appendChild(co_menu_lateral);

const bList = document.querySelector(".bi-list");
bList.addEventListener("click", ()=>{document.querySelector(".co-menu-lateral").style.left="0"}); 
const bX = document.querySelector(".bi-x");
bX.addEventListener("click", ()=>{document.querySelector(".co-menu-lateral").style.left="-100%"}); 

const bSearch = document.querySelector(".bi-search");
bSearch.addEventListener("click", function(){
    window.open('page/search.html' , "_self");
})


const reload = document.querySelector(".bi-arrow-clockwise");
reload.addEventListener("click", ()=>{location.reload(true);});
    
