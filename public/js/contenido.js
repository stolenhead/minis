var mesa_template_pendientes = '<p>Pendientes : <strong>{{pendientes_mesadialogos}}</strong></p>';
var mesa_template_cumplido = '<p>Cumplidos : <strong>{{cumplidos_mesadialogos}}</strong></p>';

var gore_template_pendientes = '<p>Pendientes : <strong>{{pendientes_gore}} </strong></p>';
var gore_template_cumplido = '<p>Cumplidos :<strong>{{cumplidos_gore}}</strong></p>';

var muni_template_pendientes = '<p>Pendientes : {{pendientes_muni}} </p>';
var muni_template_cumplido = '<p>Cumplidos :<trong>{{cumplidos_muni}} </strong></p>';

var convenio_template_pendientes = '<p>Pendientes : {{pendientes_conveniosgestion}} </p>';
var convenio_template_cumplido = '<p>Cumplidos :{{cumplidos_conveniosgestion}}</p>';

var total_pendientes = '<p class="align">Pendientes Totales: {{totalpendientes}}</p>';
var total_cumplidos = '<p class="align"> Cumplidos Totales:{{totalcumplidos}}</p>';

var template_compromisos = '<div class="card"><div class="card-header" role="tab" id="headingOne"><h5 class="mb-0"><a data-toggle="collapse" href="#{{id_container_compromiso}}" aria-expanded="true">{{compromiso1}}<span class="pull-right {{color}}">{{Prioridad}}</span><span class="pull-right" style="margin-right: 4rem">{{plazo_faltante}}</span></a></h5></div> <div id="{{id_container_compromiso}}" class="collapse " role="tabpanel"  data-parent="#accordion"><div class="card-body"><div class="row form-group"><div class="col-lg-12 col-md-12 col-sm-12"><label>Decripción</label><div class="detalle_descripcion">{{descripcion}}</div></div></div><div class="row"><div class="col-lg-6 col-md-6 col-sm-12 form-group"><label>Dirección Responsable</label><div class="detalle_descripcion">{{direccion_responsable}}"></div></div><div class="col-lg-6 col-md-6 col-sm-12 form-group"><label>Plazo Total</label><div class="detalle_descripcion">{{situacion_actual}}"></div></div></div><div class="row"><div class="col-lg-6 col-md-6 col-sm-12 form-group"><label>Término de Plazo</label><div class="detalle_descripcion">{{termino_plazo}}"</div> </div><div class="col-lg-6 col-md-6 col-sm-12 form-group"><label>Plazo Faltante</label><div class="detalle_descripcion">{{plazo_faltante}}</div></div> </div> <div class="row"><div class="col-lg-6 col-md-6 col-sm-12 form-group"><label>Estado</label> <div class="detalle_descripcion">{{estado}}</div></div><div class="col-lg-6 col-md-6 col-sm-12 form-group"><label>Prioridad</label><div class="detalle_descripcion">{{prioridad}}"</div></div> </div> <div><button type= "button" class="btn btn-primary" data-toggle="modal" data-target="#1{{id_container_compromiso}}" id="detalle">Información Ampliada</button></div></div> </div></div>divdivdiv <div class="modal fade" id="1{{id_container_compromiso}}" tabindex="-1" role="dialog"  aria-hidden="true"><div class="modal-dialog modal-lg" role="document"> <div class="modal-content"><div class="modal-body"> <div class="container"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 form-group"><label>Situacion Actual</label><div class="detalle_descripcion">{{situacion_actual}}</div></div></div><div class="row"><div class="col-md-6 col-lg-6 col-sm-12  form-group"><label>Documento Fuente</label><div class="detalle_descripcion">{{documento_fuente}}</div></div><div class="col-md-6 col-lg-6 col-sm-12  form-group"><label>Prioridad</label><div class="detalle_descripcion">{{prioridad}}</div></div></div><div class="row"><div class="col-md-6 col-lg-6 col-sm-12  form-group"><label>Fecha de Compromiso</label><div class="detalle_descripcion">{{fecha_compromiso}}</div></div><div class="col-md-6 col-lg-6 col-sm-12  form-group"><label>Termino Plazo</label><div class="detalle_descripcion">{{termino_plazo}}</div></div></div><div class="row form-group"> <div class="col-md-4 col-lg-4 col-sm-12  "><label>Tipo de Moneda</label><div class="detalle_descripcion">{{tipo_moneda}}</div></div><div class="col-md-4 col-lg-4 col-sm-12"><label>Inversion</label><div class="detalle_descripcion">{{inversion}}</div></div> </div><div class="col-md-12 col-lg-12 col-sm-12 "><label>Termino Plazo</label><div class="detalle_descripcion">{{termino_plazo}}</div></div></div><div class="row"><div class="col-md-6 col-lg-6 col-sm-12  form-group"><label>Tipo de Plazo</label><div class="detalle_descripcion">{{Tipo de Plazo}}</div></div><div class="col-md-6 col-lg-6 col-sm-12  form-group"><label>Plazo Faltante</label><div class="detalle_descripcion">{{Plazo_faltante}}</div></div></div></div></div></div></div>'

var template_navPills = '<ul class="nav nav-pills nav_pills mb-3" id="pills-tab" role="tablist"> <li class="nav-item"> <a class="nav-link " id="pills_{{id}}_tab" data-toggle="pill" href="#pills_{{id}}" role="tab" aria-expanded="true"> {{pill_Nav}}</a> </li> </ul> <div class="tab-content tab_content " id="pills-tabContent"> <div class="tab-pane fade show " id="pills_{{id}}" role="tabpanel"> <div class="col-lg-12 col-md-12 col-sm-12 " style="margin-bottom: 1rem"> <div class="list-group_mesa"> <li class="list-group-item list-group-item-action " id="list_{{id.list_group_pills}}"  aria-controls="home">{{mesa_info}}<a href="compromisos.html" class="compromisos float-right">Compromisos</a> </li> </div> </div> </div> </div>';

var titulos_mesas = '<div class="col-lg-12 col-md-12 col-sm-12 " style="margin-bottom: 1rem"> <div class="list-group_mesa"> <li class="list-group-item list-group-item-action " id="list_{{id.list_group_pills}}"  aria-controls="home"> {{mesa_info}} <button class="btn btn-sm btn-success compromisos float-right" data-compromisos="compromisos" data-mesa="{{mesa_info}}"> Compromisos</button> </li> </div> </div>';

var datos_json = null;
var compromisos_mesa_actual = {};

for (var i = 0; i < regions.length; i++) {
  regions[i].click(function (e) {
    $(".compromisos_container").empty();
    $("#pillls").empty();
    llenarDatos(this.data('region'))
  });
}

function llenarDatos(id_region) {
  $.getJSON( "http://dscompromisos.minsa.gob.pe/compromiso", {
    format: "json"
  })
    .done(function( data ) {
      datos_json = data;
      llenarDatosMesas(id_region);
    });
  
}

function llenarCompromisos(mesa_nombre) {
  var compromiso_html = "";
  var compromiso_plazos = "";
  var compromisos = compromisos_mesa_actual[mesa_nombre];
  $(compromisos).each(function (i, compromiso) {
    var reemp_nombre_compromiso =
    compromiso_html += template_compromisos.replace(/{{compromiso1}}/g , compromiso['nombre']).replace(/{{plazo_faltante}}/g ,compromiso['plazos']).replace(/{{pendiente}}/g , compromiso['pendiente']).replace(/{{descripcion}}/g,compromiso['descripcion']).replace(/{{id_container_compromiso}}/g,compromiso['nombre']).replace(/{{direccion_responsable}}/g, compromiso['direccion_responsable']).replace(/{{situacion_actual}}/g ,compromiso['situacion_actual']).replace(/{{termino_plazo}}/g,compromiso['termino_plazo']).replace(/{{estado}}/g,compromiso['estado']).replace(/{{inversion}}/g,compromiso['inversion']).replace(/{{tipo_de_Plazo}}/g,compromiso['tipo_de_Plazo']).replace(/{{documento_fuente}}/g,compromiso['documento_fuente']);
  });
  $(".compromisos_container").empty().removeClass("hidden").append(compromiso_html ,compromiso_plazos);
  
  $("#pillls").empty().addClass("hidden");
}

function mostrarContenidoMesa(tipo_mesa, data_tipo) {
  $("#pills").empty().removeClass("hidden").toggleClass("aparece");
  $(".desaparece").addClass("hidden");
  var mesas_trabajo = tipo_mesa[data_tipo]["mesas_de_trabajo"];
  var contenido_mesas = "";
  $(mesas_trabajo).each(function (i, mesa) {
    contenido_mesas += "<br>" + titulos_mesas.replace(/{{mesa_info}}/g, mesa["nombre"]);
    $("#pillls").empty().removeClass("hidden").append(contenido_mesas);
    compromisos_mesa_actual[mesa["nombre"]] = mesa["compromisos"];
    $(".compromisos").click(function () {
      llenarCompromisos($(this).data('mesa'));
    });
  });
}

function llenarDatosMesas(id_region) {
  var data_tipo = datos_json.departamento[id_region];
  var tipo_mesa = data_tipo.tipo;
  var reemplazarTotalPendientes = total_pendientes.replace("{{totalpendientes}}", data_tipo.pendientes_totales);
  var reemplazarTotalCumplidos = total_cumplidos.replace("{{totalcumplidos}}", data_tipo.cumplidos_totales);
  var reemplazarPendientes = mesa_template_pendientes.replace("{{pendientes_mesadialogos}}", tipo_mesa["mesa_dialogo"].pendientes);
  var reemplazarCumplidos = mesa_template_cumplido.replace("{{cumplidos_mesadialogos}}", tipo_mesa["mesa_dialogo"]["cumplidos"]);
  var gorereemplazarPendientes = gore_template_pendientes.replace("{{pendientes_gore}}", tipo_mesa["mesa_gore"]["pendientes"]);
  var gorereemplazarCumplidos = gore_template_cumplido.replace("{{cumplidos_gore}}", tipo_mesa["mesa_gore"]["cumplidos"]);
  var munireemplazarPendientes = muni_template_pendientes.replace("{{pendientes_muni}}", tipo_mesa["mesa_muni"].pendientes);
  var munireemplazarCumplidos = muni_template_cumplido.replace("{{cumplidos_muni}}", tipo_mesa["mesa_muni"]["cumplidos"]);
  var convenioreemplazarPendientes = convenio_template_pendientes.replace("{{pendientes_conveniosgestion}}", tipo_mesa["mesa_convenio"].pendientes);
  var convenioreemplazarCumplidos = convenio_template_cumplido.replace("{{cumplidos_conveniosgestion}}", tipo_mesa["mesa_convenio"]["cumplidos"]);
  $("#pills").empty().removeClass("aparece").addClass("hidden");
  $(".desaparece").removeClass("hidden");
  $("#mesa_dialogo_container").empty().append(reemplazarCumplidos, reemplazarPendientes);
  $("#gore_container").empty().append(gorereemplazarPendientes, gorereemplazarCumplidos);
  $("#muni_container").empty().append(munireemplazarPendientes, munireemplazarCumplidos);
  $("#convenio_container").empty().append(convenioreemplazarPendientes, convenioreemplazarCumplidos);
  $("#padre_totales").empty().append(reemplazarTotalPendientes, reemplazarTotalCumplidos);

  $(".azul").click(function () {
    mostrarContenidoMesa(tipo_mesa, $(this).data('tipo'));
  });
}
