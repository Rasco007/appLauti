function recuperar_datos_relacionales(p_d_provincia, p_c_provincia, p_d_departamento, p_c_departamento, p_c_localidad, p_d_localidad){
    $.ajax({
        type:'POST',
        url: FUNCIONES_BASEPATH+'maestro_abm.php',
        data:{      
         "id_menu":100080,
         "n_orden":0,
         "p_d_provincia":p_d_provincia,
         "p_c_provincia":p_c_provincia,
         "p_d_departamento":p_d_departamento,
         "p_c_departamento":p_c_departamento,
         "p_c_localidad":p_c_localidad,
         "p_d_localidad":p_d_localidad
        },
        dataType:'json',
        success: function( data ) {
            if(data.resultado == 'OK'){
                setea_parametros('#main_grid',{'d_provincia': data.p_d_provincia,
                ':d_departamento': data.p_d_departamento,
                ':d_localidad': data.p_d_localidad});
              
            }
            else{
                mostrar_cuadro('E', 'Error', data.resultado);
                return;
            }
        }
    }); 


}

function datos_instancia(p_n_cuit_cq,
    p_d_denominacion_cq,
    p_c_expediente_adm,
    p_c_instancia,
    p_d_instancia){
        console.log("entro a la funcion");
        $.ajax({
            type:'POST',
            url: FUNCIONES_BASEPATH+'maestro_abm.php',
            data:{
                "p_n_cuit_cq":p_n_cuit_cq,
                "p_d_denominacion_cq":p_d_denominacion_cq,
                "p_c_expediente_adm":p_c_expediente_adm,
                "p_c_instancia":p_c_instancia,
                "p_d_instancia":p_d_instancia,
                "id_menu":100080,
                "n_orden":2
            },
            dataType:'json',
            success: function( data ) {
                if(data.resultado == 'OK'){
                  console.log("Ta todo bien loco no pasa nada");
                }
                else{
                    mostrar_cuadro('E', 'Error', data.resultado);
                    return;
                }
            }
        }); 

}