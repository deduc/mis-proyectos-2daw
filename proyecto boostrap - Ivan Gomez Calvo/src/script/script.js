function detectar_scroll(){
    // Obtengo la posición absoluta de la barra de scroll y la convierto en posición
    // relativa dividiéndola entre el tamaño del body y multiplicando por 100
    // para que funcione en monitores de distintas dimensiones VERTICALES.
    $posicion_barra_scroll_vertical = document.documentElement.scrollTop;
    $posicion_scroll_actual = $posicion_barra_scroll_vertical / $tamanio_body * 100;

    // VARIABLE IMPORTANTE que detecta cuándo el usuario hace scroll hasta un punto determinado
    $posicion_clave_para_invocar_funcion_n1 = 20;


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

    document.getElementById("enlace1").style.color = "black";
    document.getElementById("enlace2").style.color = "black";
    document.getElementById("enlace3").style.color = "black";
    document.getElementById("enlace4").style.color = "black";
    
}
function cambiar_color_nav_negro(){
    $nav = document.getElementById("nav_bar_header");
    
    $nav.style.backgroundColor = "black";
    $nav.style.position = "sticky";

    document.getElementById("enlace1").style.color = "white";
    document.getElementById("enlace2").style.color = "white";
    document.getElementById("enlace3").style.color = "white";
    document.getElementById("enlace4").style.color = "white";
}

var $tamanio_body = document.body.offsetHeight;
document.addEventListener("scroll", () => detectar_scroll());


document.getElementById("disco1").addEventListener("click", () => {window.open("src/html/disco 1 hybrid theory.html", "_blank")});
document.getElementById("disco2").addEventListener("click", () => {window.open("src/html/disco 2 meteora.html", "_blank")});
document.getElementById("disco3").addEventListener("click", () => {window.open("src/html/disco 3 minutes to midnight.html	", "_blank")});
document.getElementById("disco4").addEventListener("click", () => {window.open("src/html/disco 4 a thousand suns.html", "_blank")});
document.getElementById("disco5").addEventListener("click", () => {window.open("src/html/disco 5 living things.html", "_blank")});
document.getElementById("disco6").addEventListener("click", () => {window.open("src/html/disco 6 one more light.html", "_blank")});