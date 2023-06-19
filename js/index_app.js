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
                <div class="co-text"><p>Películas</p></div>
                <div class="bc1">
            
                <div class="bc-1"><a  href="go:web"><i class="bi-collection-play-fill icon"></i>Películas</a></div>
               <!-- <div class="bc-1"><a  href="page/series.html"><i class="bi-tv-fill icon"></i>Series</a></div>-->
                <div class="bc-1"><a  href="https://loadigital.github.io/movies.biloa/series B000.html"><i class="bi-tv-fill icon"></i>Series</a></div>
                <div class="bc-1"><a  href="#"><i class="bi-info-circle-fill icon"></i>Información</a></div>
                <div class="bc-1"><a  href="https://loadigital.github.io/descargar-Biloa/"><i class="bi-android2 icon"></i>Descargar App</a></div>
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
     <!--<div class="co-genre"><div class="genre"><p>Categorias</p></div></div>-->
   
    <div class="co-submenu">
    <li class="link"  data-category="all"><a href="#">Recientes</a></li>
    <li class="link"  data-category="Acción"><a href="#">Acción</a></li>
    <li class="link"  data-category="Animación"><a href="#">Animación</a></li>
    <li class="link"  data-category="Aventura"><a href="#">Aventura</a></li>
    <li class="link"  data-category="Belico"><a href="#">Bélicos</a></li>
    <li class="link"  data-category="Comedia"><a href="#">Comedia</a></li>
    <li class="link"  data-category="Documental"><a href="#">Documental</a></li>
    <li class="link"  data-category="Drama"><a href="#">Drama</a></li>
    <li class="link"  data-category="Historico"><a href="#">Histórico</a></li>
    <li class="link"  data-category="Marvel"><a href="#">Marvel</a></li>
    <li class="link"  data-category="Romance"><a href="#">Romance</a></li>
    <li class="link"  data-category="Suspenso"><a href="#">Suspenso</a></li>
    <li class="link"  data-category="Terror"><a href="#">Terror</a></li>

    </div> 
   
    <!--<div class="co-version"><div class="version"><a href="#">@B!LOA V.5.0.3</a></div></div>-->
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
                <div class="co-text-v"><p>Versión: 5.0.3</p></div>
            </div>
            <div class="bc">
            
                <div class="bc-1"><a href="https://loadigital.github.io/movies.biloa/index.html"><i class="bi-collection-play-fill icon"></i>Películas</a></div>
                <div class="bc-1"><a href="https://loadigital.github.io/movies.biloa/series B000.html"><i class="bi-tv-fill icon"></i>Series</a></div>
                <div class="bc-1"><a href="#"><i class="bi-info-circle-fill icon"></i>Información</a></div>
                <div class="bc-1"><a href="https://loadigital.github.io/descargar-Biloa/"><i class="bi-android2 icon"></i>Descargar App</a></div>
            </div>

`
nav.appendChild(co_menu_lateral);

const bList = document.querySelector(".bi-list");
bList.addEventListener("click", ()=>{document.querySelector(".co-menu-lateral").style.left="0"}); 
const bX = document.querySelector(".bi-x");
bX.addEventListener("click", ()=>{document.querySelector(".co-menu-lateral").style.left="-100%"}); 

const bSearch = document.querySelector(".bi-search");
bSearch.addEventListener("click", function(){
    window.open('https://loadigital.github.io/movies.biloa/page/search.html' , "_self");
});

const bFilter= document.querySelector(".bi-filter");
bFilter.addEventListener("click", function(){
    document.getElementById("nav-modal-año").style.right="0";
});



const reload = document.querySelector(".bi-arrow-clockwise");
reload.addEventListener("click", ()=>{location.reload(true);});



//F. categoria
$(document).ready(function(){
    $('.link[data-category="all"]').addClass('ct_item-active');

    $('.link').click(function(){
        var catMovies = $(this).attr('data-category');

        $('.link').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');
        
		$('.category').css('display', 'none');
		function hideMovies(){
			$('.category').hide();
		} setTimeout(hideMovies,400);
		function showMovies(){
			$('.category[data-category="'+catMovies+'"]').show();
			$('.category[data-category="'+catMovies+'"]').css('display', 'block');
		} setTimeout(showMovies,400);
	});
	$('.link[data-category="all"]').click(function(){
		function showAll(){
			$('.category').show();
			$('.category').css('display', 'block');
		} setTimeout(showAll,400);
	});
});

//F. año
$(document).ready(function(){
    $('.co-año .filtro[data-año="all"]').addClass('act-dos');

    $('.filtro').click(function(){
        var catAño = $(this).attr('data-año');

        $('.filtro').removeClass('act-dos');
        $(this).addClass('act-dos');
        
		$('.category').css('display', 'none');
		function hideMovies(){
			$('.category').hide();
		} setTimeout(hideMovies,400);
		function showMovies(){
			$('.category[data-año="'+catAño+'"]').show();
			$('.category[data-año="'+catAño+'"]').css('display', 'block');
		} setTimeout(showMovies,400);
	});
	$('.filtro[data-año="all"]').click(function(){
		function showAll(){
			$('.category').show();
			$('.category').css('display', 'block');
		} setTimeout(showAll,400);
	});
});


const next = document.querySelectorAll('.next a[data^="next"')
    next.forEach(next =>{
        next.addEventListener("click", function(){
            document.getElementById("nav-modal-año").style.right="-100%";
            
        })
    })