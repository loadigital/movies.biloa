/*
---© Proyecto B!LOA. All rights reserved
---Autor:Ober Hernandez
---Proyecto de aprendizaje
---info.biloa@gmail.com
*/
//BASE DE DATOS PELICULAS

const  db =[

     {
        id:"A464",
        id_POST:"888479",
        title:"Juego del amor: El tiempo es ahora 2",
        genero:"Romance",
        genres:"Romance, Drama",
        tipo:"Pelicula",
        año:"2023",
        imgLink:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4Dfm8TQV58ajQKQOBZh9XsCVb1q.jpg",
        posterLink:"https://infobiloa.github.io/BD.BILOA.COM/posterPeliculas/A464 Juego del amor El tiempo es ahora 2.html",
        LINK_MOVIES:"https://mega.nz/embed/dGIhnbCa#VyfmGgR22NcN5ix-NpROH3pPmSrTHoVJQzCgqRNvv40!1a",
        LINK_DESCARGA:"https://mega.nz/file/dGIhnbCa#VyfmGgR22NcN5ix-NpROH3pPmSrTHoVJQzCgqRNvv40",
        TRAILER:"https://www.youtube.com/embed/8y-lAFOzIgY",
    
    },
  {
        id:"A463",
        id_POST:"713704",
        title:"Posesión infernal: El despertar",
        genero:"Terror",
        genres:"Terror",
        tipo:"Pelicula",
        año:"2023",
        imgLink:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ioMtng0qHbwNjR1fuxYZsRf1kjm.jpg",
        posterLink:"https://infobiloa.github.io/BD.BILOA.COM/posterPeliculas/A463 Posesión infernal El despertar.html",
        LINK_MOVIES:"https://mega.nz/embed/VCojWJRY#-h3mPxdYSqgH208-vGKi2OsgH1atKd8zFhkenTxcKro",
        LINK_DESCARGA:"https://mega.nz/file/VCojWJRY#-h3mPxdYSqgH208-vGKi2OsgH1atKd8zFhkenTxcKro",
        TRAILER:"https://www.youtube.com/embed/_ZCw9V09kt4",
    
    },  
  {
        id:"A462",
        id_POST:"917300",
        title:"Crimen imperfecto",
        genero:"Suspenso",
        genres:"Suspense, Crimen",
        tipo:"Pelicula",
        año:"2022",
        imgLink:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/tisFwDMXgqIevuSMftHGILPDJOI.jpg",
        posterLink:"https://infobiloa.github.io/BD.BILOA.COM/posterPeliculas/A462 Crimen imperfecto.html",
        LINK_MOVIES:"https://mega.nz/embed/cfJ2BQoA#iCPSYE9AQKZvx9fz9BUgExprFe1wToumAvuBLEXXDGg",
        LINK_DESCARGA:"https://mega.nz/file/cfJ2BQoA#iCPSYE9AQKZvx9fz9BUgExprFe1wToumAvuBLEXXDGg",
        TRAILER:"https://www.youtube.com/embed/4GOwEJe86U8",
    
    },
     {
        id:"A461",
        id_POST:"283995",
        title:"Guardianes de la Galaxia vol. 2",
        genero:"Aventura",
        genres:"Aventura, Acción, Ciencia ficción",
        tipo:"Pelicula",
        marvel:"Marvel",
        año:"2017",
        imgLink:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kdg6Y06jfq9FV7qknWNcKLYtBJn.jpg",
        posterLink:"https://infobiloa.github.io/BD.BILOA.COM/posterPeliculas/A461 Guardianes de la Galaxia 2.html",
        LINK_MOVIES:"http://moviesbiloa.byethost16.com/stream/720/Q5kFXR8ikWfhIbI/__001",
        LINK_DESCARGA:"https://drive.google.com/u/7/uc?id=1uHma8BJKndNKSKAUpOc7BinVliIoXDn5&export=download",
        TRAILER:"https://www.youtube.com/embed/bLHMFhtYnXw",
    
    },
  {
        id:"A460",
        id_POST:"493529",
        title:"Dungeons & Dragons: Honor entre ladrones",
        genero:"Aventura",
        genres:"Aventura, Fantasía, Comedia",
        tipo:"Pelicula",
        año:"2023",
        imgLink:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/77XBzUUFX5aHI3Jz3ipJTtsDWzk.jpg",
        posterLink:"https://infobiloa.github.io/BD.BILOA.COM/posterPeliculas/A460 Dungeons & Dragons Honor entre ladrones.html",
        LINK_MOVIES:"http://ober.byethost31.com/v/ufBvzL9WmHIzCGD",
        LINK_DESCARGA:"http://ober.byethost31.com/stream/720/ZDFoUWNrcDRVWE5VYVV0R2RUVnRRMVJHV2xadmNXRlFkRXR0TDNWNVZHWnJhSFJ4VlhaQ1R6QkdRVWRqWkRGbFJtMTJZWGxHTVhoamVXbEtOMFZ2V2sxS1owOUpieTkzTTFGWFZVOXJTekZTTXpkeFpHaDBWVlZNWTJOV0wyVkRRMHRFV0hKaGJtMXphM2x4WjFwWlVuTkxWVWhTUXpWNGVrZEpVRUp6U1dWS2QyaEdhMVpUYVZreVRuQmpRWEJqV1N0dkx6aGtZUzgzYjNvM2FXeG1lRnBsY0RKSlIyRlBRbTlHWmsxa1RrbExjVzFYZEdGblJsZE1XVU5YTTBNM05GWjRUMEVyYjNsWU1YSkVSRk5ZUkcxbE1uaEtjak5hTDBaSVJVOXJjRWxqYlhveFdXZHVWVGx6YW1FeVNtUldUMXBCVDBsa2MybDNhWGRJSzNKak5XUnhSVTR5VkUxYVNuZFRUMnBFTldSRmVuQldiemN5ZUZGbVVqVlJXblJ4ZVZkWFZuTXJjM2xWWVhodFQzcFpSM05FUTB0T2FrUlljRFIzUm5wRlZqWnRMekJGTkc5WlRHb3hjMnh1V0hFd2JIWkhjRzR2VkhSeFJVWnNNRnBQWTBVcksxWmtVRWRWUkVOdlBRPT0=/__006?t=1683507211",
        TRAILER:"https://www.youtube.com/embed/Q6nCZDpvA9k",
    
    },
  {
        id:"A433",
        id_POST:"638974",
        title:"Misterio a la vista",
        genero:"Comedia",
        genres:"Comedia, Misterio, Acción",
        tipo:"Pelicula",
        año:"2023",
        imgLink:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3jce1QvM2sma0TKYckNmIKzjhHC.jpg",
        posterLink:"https://infobiloa.github.io/BD.BILOA.COM/posterPeliculas/A433 Misterio a la vista.html",
        LINK_MOVIES:"http://moviesbiloa.byethost16.com/stream/720/3lkxwE8ETvinQ8p/__001",
        LINK_DESCARGA:"https://drive.google.com/u/2/uc?id=1XhwoOXXnHjwg0wQ_Ce0CMDY9-5Niejsx&export=download",
        TRAILER:"https://www.youtube.com/embed/8ppKGvTbLlw",
    
    },
  {
        id:"A435",
        id_POST:"816904",
        title:"Momias",
        genero:"Animación",
        genres:"Animación, Comedia, Familia, Aventura, Fantasía",
        tipo:"Pelicula",
        año:"2023",
        imgLink:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/g5vkJAPj4XFlaOXZMYE97LZ7lns.jpg",
        posterLink:"https://infobiloa.github.io/BD.BILOA.COM/posterPeliculas/A435 Momias.html",
        LINK_MOVIES:"http://moviesbiloa.byethost16.com/stream/720/R5WlRpLwsXjaj9a/__001",
        LINK_DESCARGA:"https://drive.google.com/u/2/uc?id=1m_xzlSCTChcBBLXpPx35INx0SCABvU-j&export=download",
        TRAILER:"https://www.youtube.com/embed/xct8u3qXWkc",
    
    },
  {
        id:"A459",
        id_POST:"758323",
        title:"El exorcista del papa ",
        genero:"Terror",
        genres:"Terror, Misterio, Suspense",
        tipo:"Pelicula",
        año:"2023",
        imgLink:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qcknZEeD71byJ3XSalDDZ5iHpNr.jpg",
        posterLink:"https://infobiloa.github.io/BD.BILOA.COM/posterPeliculas/A459 El exorcista del papa.html",
        LINK_MOVIES:"http://ober.byethost31.com/v/9GbzvZRBlrQ4YLP",
        LINK_DESCARGA:"http://ober.byethost31.com//stream/1080/ZDFoUWNrcDRVWE5VYVV0R2RUVnRRMVJHV2xadmRTdFVVMXBaS3pCVmNuUmFUbkpEUzNGa1YyTmFWVWRqWkRGbFJtMTJZWGxHTVhoamVXbEtOMFZ2V21OYU5WcFhNblpDZVcxM1VIUmthRmd3TTA0NGNuaDBWVlZNWTJOV0wyVkRRMHRFV0hKaGJtMXphM2x4WjFwWlVuTkxWVWhTUXpWNGVrZEpVRUp6U1dWS2QyaEdhMVpUYVZreVRuQmpRWEJqV1N0dkx6aGtZUzgzYjNvM2FXeG1lRnBsY0RKSlIyRlBRbTlIVTJOb2VVRnBWak5LZFUxNVRFZHVlVVp5YmxVcmVXTTFRMWxvU1ZGaFJqbDZLMnMzVWpORGJIbEpSVnBpWlZCVmNHdzVPR2hhZG14elJsRkRhRWs1UXl0TlRWUkRaRVZKU3l0dmVYbG9MM0ZsUm0xNVpXUmtWRVE0Vm1kT1QyUnBjR1J0VG14WlJqWjFhVWhDTUVGbVdHRnZOR1p5U0daTk1qaGhNRFJhYkhRNVdWRlBVM2hxYlVkcFozWnBTV05XUjBrMFJUZFVSVXByTjBGcGJWUTFNa2g1YWpaU2VXd3lUR3RGV25CemEwUTRiMlJxTjJwalJXSkNLM0JMUmpoSlBRPT0=/__006?t=1683493014",
        TRAILER:"https://www.youtube.com/embed/a-Cx7IE04sA",
    
    },
  {
        id:"A458",
        id_POST:"502356",
        title:"Súper Mario Bros. La película",
        genero:"Animación",
        genres:"Animación, Aventura, Familia, Fantasía, Comedia",
        tipo:"Pelicula",
        año:"2023",
        imgLink:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/zNKs1T0VZuJiVuhuL5GSCNkGdxf.jpg",
        posterLink:"https://infobiloa.github.io/BD.BILOA.COM/posterPeliculas/A458 Súper Mario Bros.html",
        LINK_MOVIES:"http://moviesbiloa.byethost16.com/stream/720/4cm6UGTNvC1G1TS/__001",
        LINK_DESCARGA:"https://drive.google.com/u/2/uc?id=1jzOoZiN4e8KQaU-NmUQ7VIV12VwRWGGC&export=download",
        TRAILER:"https://www.youtube.com/embed/SvJwEiy2Wok",
    
    },
  {
        id:"A453",
        id_POST:"640146",
        title:"Ant-Man y la Avispa: Quantumanía",
        genero:"Acción",
        genres:"Acción, Aventura, Ciencia ficción",
        tipo:"Pelicula",
        año:"2023",
        imgLink:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jTNYlTEijZ6c8Mn4gvINOeB2HWM.jpg",
        posterLink:"https://infobiloa.github.io/BD.BILOA.COM/posterPeliculas/A453 Ant-Man y la Avispa Quantumanía.html",
        LINK_MOVIES:"http://moviesbiloa.byethost16.com/v/ZunU95Dsmj5PzAv",
        LINK_DESCARGA:"https://drive.google.com/u/2/uc?id=1LAwJSVCxNu5sn1JWfBzLgqtHu67hY3UP&export=download",
        TRAILER:"https://www.youtube.com/embed/BaLJ044I2HI",
    
    },
     {
        id : "A003" ,
        id_POST : "451048" ,
        titulo : "Jungle Cruise" ,
        genero : "Acción" ,
        géneros : "Acción, Aventura, Fantasía" ,
        tipo : "Pelicula" ,
        año : "2021" ,
        imgLink : "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/HPEXPFY5B2TWyC1mKoUtz4fNsB.jpg" ,
        posterLink : "https://infobiloa.github.io/BD.BILOA.COM/posterPeliculas/A003 Jungle Cruise.html" ,
        LINK_MOVIES : "http://moviesbiloa.byethost16.com/stream/720/rnL4AJOQp704QQk/__001" ,
        LINK_DESCARGA : "https://drive.google.com/u/1/uc?id=1nfGZyeKqC8mG01nsNWt1LDVrGHGE1vSG&export=download" ,
        TRÁILER : "https://www.youtube.com/embed/Lwp-7NXFu_g" ,
    
    } ,   
    
    
] 
