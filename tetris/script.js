function crear_pantalla_inicio(){
    var $titulo = document.createElement("h1");
    $titulo.setAttribute("id", "titulo_selecciona_dificultad")
    $titulo.innerText = "Selecciona la dificultad";

    var $div_contenedor = document.createElement("div");
    $div_contenedor.className = "contenedor"
    
    var $boton_facil = document.createElement("div");
    var $boton_normal = document.createElement("div");
    var $boton_dificil = document.createElement("div");

    $boton_facil.className = "boton";
    $boton_normal.className = "boton";
    $boton_dificil.className = "boton";

    $boton_facil.setAttribute("id", "boton_facil");
    $boton_normal.setAttribute("id", "boton_normal");
    $boton_dificil.setAttribute("id", "boton_dificil");

    $boton_facil.innerText = "Fácil";
    $boton_normal.innerText = "Normal";
    $boton_dificil.innerText = "Difícil";

    $div_contenedor.appendChild($boton_facil);
    $div_contenedor.appendChild($boton_normal);
    $div_contenedor.appendChild($boton_dificil);

    $div_controles = document.createElement("div");
    $div_controles.className = "contenedor_controles";
    $div_controles.setAttribute("id", "contenedor_controles");
    $div_controles.innerHTML = "<h2>Controles</h2>" +
                                "<p>← Para mover a la izquierda</p>" + 
                                "<p>→ Para mover a la derecha</p>" + 
                                "<p>↓ Para mover hacia abajo del todo</p>" + 
                                "<p>Espacio para guardarte una ficha o intercambiar la actual por una ficha guardada</p>";
    
    document.body.appendChild($titulo);
    document.body.appendChild($div_contenedor);
    document.body.appendChild($div_controles);
}


function seleccionar_dificultad($dificultad){
    // Cantidad de milisegundos necesarios para mover hacia abajo una ficha
    var $velocidad_fichas = 0;

    if($dificultad == 0){
        $velocidad_fichas = 1000;
        console.log("Dificultad Fácil");
    }
    else if($dificultad == 1){
        $velocidad_fichas = 700;
        console.log("Dificultad Normal");
    }
    else if($dificultad == 2){
        $velocidad_fichas = 500;
        console.log("Dificultad Difícil");
    }

    crear_tablero();
    
    return $velocidad_fichas;
}


function crear_tablero(){
    // Función donde creo un tablero de 10 filas x 30 columnas
    var $filas = 30;
    var $columnas = 10;

    // Vacío el contenido de la página
    document.getElementById("titulo_selecciona_dificultad").remove();
    document.getElementById("boton_facil").remove();
    document.getElementById("boton_normal").remove();
    document.getElementById("boton_dificil").remove();
    document.getElementById("contenedor_controles").remove();
    
    // Creo el div que contendrá el tablero
    $tablero = document.createElement("div");
    $tablero.className = "tablero";

    $contenedor_tablero = document.getElementById("contenedor");
    document.$contenedor_tablero.appendChild($tablero);
}


function main(){
    crear_pantalla_inicio();

    var $boton_facil = document.getElementById("boton_facil");
    var $boton_normal = document.getElementById("boton_normal");
    var $boton_dificil = document.getElementById("boton_dificil");

    
    var $velocidad_fichas = 0;
    
    $boton_facil.addEventListener("click", () => $velocidad_fichas = seleccionar_dificultad($dificultad = 0));
    $boton_normal.addEventListener("click", () => $velocidad_fichas = seleccionar_dificultad($dificultad = 1));
    $boton_dificil.addEventListener("click", () => $velocidad_fichas = seleccionar_dificultad($dificultad = 2));
    // Tras crear los listeners, dentro de la función seleccionar_dificultad() invoco la funcion crear_tablero()

}


main();
