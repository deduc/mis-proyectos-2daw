<?php

// Uso la clase Exception para la gestión de errores
use Exception;
use mysqli;

// Constantes de conexión a la base de datos
define("HOST_BDD", "localhost");
define("USUARIO_BDD", "usuarios");
define("PASSWORD_BDD", "alumno");
define("TABLA", "usuarios");

class conexion_mysql{
    private $direccion_servidor_bdd;
    private $username;
    private $password;
    private $tabla;


    public function __construct(string $base_de_datos = null, string $nombre_usuario = null, string $contrasenia = null, string $nombre_tabla = null){
        $this->direccion_servidor_bdd = $base_de_datos;
        $this->username = $nombre_usuario;
        $this->password = $contrasenia;
        $this->tabla = $nombre_tabla;
    }


    public function conectar_base_de_datos(): conexion_mysql{
        /*  Función que ejecuta un try catch que gestiona posibles errores en el momento que 
            el usuario intenta establecer conexión con la base de datos.
            
            En caso de haber error o no, la función retorna el propio objeto.
        */

        try{
            @ $conexion = new mysqli($this->direccion_servidor_bdd, $this->username, $this->password, $this->tabla);

            if($conexion->connect_errno){
                throw new Exception("ERROR de tipo excepción: La dirección de la base de datos, el usuario de la base de datos, contraseña o tabla están mal escritos.");
            }
            // Bloque opcional, se puede borrar tranquilamente
            else{
                echo "<p>Conexión con la base de datos establecida</p>";
            }
        }
        catch(Exception $e){
            echo "<p>". $e->getMessage(). "</p>";
        }
        finally{
            return $this;
        }
    }
}