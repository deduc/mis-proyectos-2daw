function detectar_scroll(){
    // Obtengo la posición absoluta de la barra de scroll y la convierto en posición
    // relativa dividiéndola entre el tamaño del body y multiplicando por 100
    // para que funcione en monitores de distintas dimensiones VERTICALES.
    $posicion_barra_scroll_vertical = document.documentElement.scrollTop;
    $posicion_scroll_actual = $posicion_barra_scroll_vertical / $tamanio_body * 100;

    // VARIABLE IMPORTANTE que detecta cuándo el usuario hace scroll hasta un punto determinado
    $posicion_clave_para_invocar_funcion_n1 = 10;


    console.log($posicion_scroll_actual);
    
    if($posicion_scroll_actual > $posicion_clave_para_invocar_funcion_n1){
        // console.log($posicion_scroll_actual);
        cambiar_color_nav_blanco();
    }
    else if($posicion_scroll_actual < $posicion_clave_para_invocar_funcion_n1){
        // console.log($posicion_scroll_actual);
        cambiar_color_nav_negro();
    }
}

function cambiar_color_nav_blanco(){
    $nav = document.getElementById("nav_bar_header");
    
    $nav.style.backgroundColor = "white";
    $nav.style.position = "fixed";
    $nav.style.top = "0px";

    document.getElementById("enlace1").style.color = "black";
    document.getElementById("enlace2").style.color = "black";
    document.getElementById("enlace3").style.color = "black";
    $enlace4.style.backgroundColor = "yellow";
    $enlace4.style.color = "black";
    
}

function cambiar_color_nav_negro(){
    $nav = document.getElementById("nav_bar_header");
    
    $nav.style.backgroundColor = "black";
    $nav.style.position = "fixed";
    $nav.style.top = "0px";


    document.getElementById("enlace1").style.color = "white";
    document.getElementById("enlace2").style.color = "white";
    document.getElementById("enlace3").style.color = "white";
    $enlace4.style.backgroundColor = "black";
    $enlace4.style.color = "yellow";
}

function mostrar_o_esconder_desplegable(){
    if($desplegable){
        $lista_desplegable_discos.style.opacity = 0;
        $desplegable = false;
    }
    else if(!$desplegable){
        $lista_desplegable_discos.style.opacity = 1;
        $desplegable = true;
    }
}


var $tamanio_body = document.body.offsetHeight;
document.addEventListener("scroll", () => detectar_scroll());

$nav = document.getElementById("nav_bar_header");
$nav.style.position = "fixed";
$nav.style.top = "0px";

var $desplegable = false;
$lista_desplegable_discos = document.getElementById("contenedor_enlaces_discos");
$enlace4 = document.getElementById("enlace4");

$enlace4.addEventListener("click", mostrar_o_esconder_desplegable);

document.getElementById("disco1").addEventListener("click", () => {window.open("../html/disco 1 hybrid theory.html", "_blank")});
document.getElementById("disco2").addEventListener("click", () => {window.open("../html/disco 2 meteora.html", "_blank")});
document.getElementById("disco3").addEventListener("click", () => {window.open("../html/disco 3 minutes to midnight.html	", "_blank")});
document.getElementById("disco4").addEventListener("click", () => {window.open("../html/disco 4 a thousand suns.html", "_blank")});
document.getElementById("disco5").addEventListener("click", () => {window.open("../html/disco 5 living things.html", "_blank")});
document.getElementById("disco6").addEventListener("click", () => {window.open("../html/disco 6 one more light.html", "_blank")});
