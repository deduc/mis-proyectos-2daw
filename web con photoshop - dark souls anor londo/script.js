function detectar_scroll(){
    // Obtengo la posición absoluta de la barra de scroll y la convierto en posición
    // relativa dividiéndola entre el tamaño del body y multiplicando por 100
    // para que funcione en monitores de distintas dimensiones VERTICALES.
    $posicion_barra_scroll_vertical = document.documentElement.scrollTop;
    $posicion_scroll_actual = $posicion_barra_scroll_vertical / $tamanio_body * 100;

    // VARIABLE IMPORTANTE que detecta cuándo el usuario hace scroll hasta un punto determinado
    $posicion_clave_para_invocar_funcion_n1 = 6.4;


    console.log($posicion_scroll_actual);
    
    if($posicion_scroll_actual > $posicion_clave_para_invocar_funcion_n1){
        // console.log($posicion_scroll_actual);
        reducir_menu();
    }
    else if($posicion_scroll_actual < $posicion_clave_para_invocar_funcion_n1){
        // console.log($posicion_scroll_actual);
        ampliar_menu();
    }
}


function reducir_menu(){
    // Una vez el usuario haga scroll-down hasta determinado punto, modifico el elemento necesario

    document.getElementById("barra_navegacion").style.height = "2.5vw";
    document.getElementById("nav_icono").style.width = "5%";
    document.getElementById("contenedor_desplegable_texto").style.fontSize = "1vw";    
    document.getElementById("link1").style.fontSize = "0.8vw";
    document.getElementById("link2").style.fontSize = "0.8vw";
    document.getElementById("link3").style.fontSize = "0.8vw";
    document.getElementById("link4").style.fontSize = "0.8vw";
}


function ampliar_menu(){
    // Una vez el usuario haga scroll-up hasta determinado punto, despego el menu del inicio de la pantalla

    document.getElementById("barra_navegacion").style.height = "5vw";
    document.getElementById("nav_icono").style.width = "10%";
    document.getElementById("contenedor_desplegable_texto").style.fontSize = "2vw";
    document.getElementById("link1").style.fontSize = "1.2vw";
    document.getElementById("link2").style.fontSize = "1.2vw";
    document.getElementById("link3").style.fontSize = "1.2vw";
    document.getElementById("link4").style.fontSize = "1.2vw";
}


function mover_carrusel(){
    console.log(this.id)
    if(this.id == "boton_derecha"){
        // Mover para la izquierda
        $posicion_lista_imagenes++;
        
        if($posicion_lista_imagenes >= $lista_imagenes.length){
            $posicion_lista_imagenes = 0;
        }
        
        $imagen_carrusel.src = $lista_imagenes[$posicion_lista_imagenes];
        
    }
    else if(this.id == "boton_izquierda"){
        // Mover para la derecha
        $posicion_lista_imagenes--;
        
        if($posicion_lista_imagenes < 0){
            $posicion_lista_imagenes = $lista_imagenes.length - 1;
        }
        
        $imagen_carrusel.src = $lista_imagenes[$posicion_lista_imagenes];        
    }
}


function sacar_desplegable(){
    $div_desplegable.style.left = "0vw";
    $div_desplegable.style.opacity = 1;
}


function esconder_desplegable(){
    $div_desplegable.style.left = "-30vw";
}


var $tamanio_body = document.body.offsetHeight;

var $boton_izquierda = document.getElementById("boton_izquierda");
var $boton_derecha = document.getElementById("boton_derecha");

var $imagen_carrusel = document.getElementById("foto_enemigo");
var $posicion_lista_imagenes = 0;

// Array que contiene las rutas relativas de las imágenes
var $lista_imagenes = [
    "src/enemigos_gigante.png",
    "src/enemigos_mimic.png",
    "src/enemigos_ornstein.png",
    "src/enemigos_smough.png",
    "src/enemigos_femto.png",
    "src/enemigos_guts_berserker.png"
];

// Obtengo los iconos de las barras de navegación, la visible y la del div oculto
var $nav_icono = document.getElementById("nav_icono");
var $nav_icono_desplegable = document.getElementById("nav_icono_desplegable");
// Guardo en una variable el div desplegable que está escondido
var $div_desplegable = document.getElementById("desplegable");


// Procedo a añadir los eventos de la página
document.addEventListener("scroll", () => detectar_scroll());

$boton_izquierda.addEventListener("click", mover_carrusel);
$boton_derecha.addEventListener("click", mover_carrusel);

// Hago que la imagen del carrusel sea la primera imagen de la lista de imágenes
$imagen_carrusel.src = $lista_imagenes[$posicion_lista_imagenes];

$nav_icono.addEventListener("click", sacar_desplegable);
$nav_icono_desplegable.addEventListener("click", esconder_desplegable);