function crear_bola_de_nieve($posicion_inicial_x, $posicion_inicial_y, $contador_id){
    $bola = document.createElement("div");
    $bola.setAttribute("class", "bola_nieve");
    $bola.id = "bola" + $contador_id;

    $bola.style.top = $posicion_inicial_y + "px";
    $bola.style.left = $posicion_inicial_x + "px";

    document.body.appendChild($bola);
}


function mover_bolas(){
    // Obtengo de forma aleatoria el id de la bola de nieve que quiero mover
    var $id_bola = parseInt(Math.random() * $cantidad_bolas_de_nieve);
    // Obtendo el html de la bola en funcion de su id
    var $bola = document.getElementById("bola" + $id_bola);

    // Defino los movimientos que tomarán las bolas, tanto en horizontal como en vertical
    var $movimiento_vertical = parseInt(Math.random() * 30); 
    var $movimiento_lateral = parseInt(Math.random() * 10);

    // Saco las coordenadas actuales de la bola a analizar y las convierto a número con parseInt
    var $posicion_vertical_bola = parseInt($bola.style.top);
    var $posicion_horizontal_bola = parseInt($bola.style.left);

    var $movimiento_neto_vertical = $posicion_vertical_bola + $movimiento_vertical;

    // Mover la bola verticalmente hacia abajo
    $bola.style.top = $movimiento_neto_vertical + "px";

    // Mover la bola lateralmente
    if($interruptor_movimiento_lateral){
        // Mover bola a la derecha

        $interruptor_movimiento_lateral = false;
        let $movimiento_neto_horizontal = $posicion_horizontal_bola + $movimiento_lateral;
        $bola.style.left = $movimiento_neto_horizontal + "px";
    }
    else{
        // Mover bola a la izquierda
        
        $interruptor_movimiento_lateral = true;
        let $movimiento_neto_horizontal = $posicion_horizontal_bola - $movimiento_lateral;
        $bola.style.left = $movimiento_neto_horizontal + "px";
    }


    // En caso que la bola de nieve se mueva hacia abajo del todo de la pantalla, reiniciará su
    // posicion del eje vertical
    if(parseInt($bola.style.top) >= outerHeight){
        $bola.style.top = 0 + "px";
    }

    document.body.appendChild($bola);
}


// Variable donde indico las bolas de nieve que quiero generar y añadir a la página
var $cantidad_bolas_de_nieve = 100;
var $espacio_entre_bolas = outerWidth / $cantidad_bolas_de_nieve;

// Inicializo las coordenadas de la primera bola de nieve para modificarla más adelante
// para las restantes bolas de nieve
var $posicion_inicial_horizontal = 0;
var $posicion_inicial_vertical = -100;

// contador de id's para los divs que contendrán las bolas de nieve
var $contador_id = 0;

// Variable que determinará si la bola se mueve a la izq o a la derecha, usado en la función mover_bolas()
var $interruptor_movimiento_lateral = true;

// Creo las bolas de nieve e inicializo sus posiciones
for(x=0; x<$cantidad_bolas_de_nieve; x++){
    crear_bola_de_nieve($posicion_inicial_horizontal, $posicion_inicial_vertical, $contador_id);
    $posicion_inicial_horizontal += $espacio_entre_bolas;
    $contador_id++;
}

// Hago que cada milisegundo se muevan 2 bolas de nieve
setInterval(mover_bolas, 1);
setInterval(mover_bolas, 1);