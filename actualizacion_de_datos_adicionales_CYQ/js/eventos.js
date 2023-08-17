function init_eventos(){

    $('#c_expediente_adm').click(function(){
        console.log("entro");
    })

    p_n_cuit_cq=null;

    $('#c_expediente_adm').change(function(){

        p_c_expediente_adm=$("#c_expediente_adm").val();

        console.log(p_c_expediente_adm);

        console.log($("#c_expediente_adm").val());

        datos_instancia(p_n_cuit_cq,
            p_d_denominacion_cq,
            p_c_expediente_adm,
            p_c_instancia,
            p_d_instancia);
    });
    console.log($("c_expediente_adm").val());

    $("c_instancia").val("p_c_instancia");
    $("d_instancia").val("p_d_instancia");
    $("d_denominacion_cq").val("p_d_denominacion_cq");
    $("n_cuit_cq").val("p_n_cuit_cq");

}