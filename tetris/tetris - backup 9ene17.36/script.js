function crear_cuadricula($cuadricula){
    for(x=0; x<120; x++){
        $cuadrado = document.createElement("div");
        $cuadrado.className = "cuadrado_cuadricula";

        $cuadricula.appendChild($cuadrado);
    }
}


function jugar($panel_piezas){
    console.log("Comienza el juego");

    crear_piezas($panel_piezas);
}


function crear_piezas($panel_piezas){
    $pieza = document.createElement("div");
    $pieza.className = "pieza";
    $pieza.style.position = "absolute";
    $pieza.style.top = "0vw";
    $pieza.style.left = "0vw";
    $pieza.style.color = "yellow";
    
    $panel_piezas.appendChild($pieza)
    console.log("Creada pieza cuadrada");
}


function main(){
    var $cuadricula = document.getElementById("cuadricula");
    var $panel_piezas = document.getElementById("panel_piezas");

    crear_cuadricula($cuadricula);

    $boton_iniciar_partida = document.getElementById("boton_inicio");
    $boton_iniciar_partida.addEventListener("click", () => jugar($panel_piezas));
}


main();