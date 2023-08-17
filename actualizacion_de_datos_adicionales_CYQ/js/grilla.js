function initGrillas(){
    $("#main_grid").jqGrid({
        colNames: main_grid.colNames(),
        colModel: main_grid.colModel(),
        pager: $('#main_grid_pager'),
        caption: "Datos adicionales de Gestión Judicial",
        postData: main_grid.postData(),
        autowidth: false,
        width: 940,
        shrinkToFit: true
    }).navGrid('#main_grid_pager',
        {add:false, edit:false, del:false}, //options
        {}, // edit options
        {}, // add options
        {}, // del options
        {} // search options
    );

    $("#observaciones_grid").jqGrid({
        colNames: observaciones_grid.colNames(),
        colModel: observaciones_grid.colModel(),
        pager: $('#observaciones_grid_pager'),
        caption: "Datos adicionales de Gestión Judicial",
        postData: observaciones_grid.postData(),
        autowidth: false,
        width: 940,
        shrinkToFit: true
    }).navGrid('#observaciones_grid_pager',
        {add:false, edit:false, del:false}, //options
        {}, // edit options
        {}, // add options
        {}, // del options
        {} // search options
    );
}