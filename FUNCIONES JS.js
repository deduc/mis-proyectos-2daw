function detectar_scroll(){
    // Obtengo la posición absoluta de la barra de scroll y la convierto en posición
    // relativa dividiéndola entre el tamaño del body y multiplicando por 100
    // para que funcione en monitores de distintas dimensiones VERTICALES.
    $posicion_barra_scroll_vertical = document.documentElement.scrollTop;
    $posicion_scroll_actual = $posicion_barra_scroll_vertical / $tamanio_body * 100;

    // VARIABLES OPCIONALES que quiero que sean afectadas una vez 
    $id_div_a_modificar = "";
    $tamanio_elemento_sin_modificar = "";
    $tamanio_elemento_modificado = "";

    // VARIABLE IMPORTANTE que detecta cuándo el usuario hace scroll hasta un punto determinado
    $posicion_clave_para_invocar_funcion_n1 = 15;
    

    console.log($posicion_scroll_actual);
    
    if($posicion_scroll_actual > $posicion_clave_para_invocar_funcion_n1){
        // console.log($posicion_scroll_actual);
        
        // FUNCION()
    }
    else if($posicion_scroll_actual < $posicion_clave_para_invocar_funcion_n1){
        // console.log($posicion_scroll_actual);
        
        // FUNCION()
    }
}


function reducir_menu($id_div_a_modificar, $medidas_modificadas){
    // Una vez el usuario haga scroll-down hasta determinado punto, modifico el elemento necesario

    // VARIABLES que referencian a los elementos que van a ser modificados
}