var mesa_template_pendientes = '<p>Pendientes : <strong>{{pendientes_mesadialogos}}</strong></p>';
var mesa_template_cumplido = '<p>Cumplidos : <strong>{{cumplidos_mesadialogos}}</strong></p>';

var gore_template_pendientes = '<p>Pendientes : <strong>{{pendientes_gore}} </strong></p>';
var gore_template_cumplido = '<p>Cumplidos :<strong>{{cumplidos_gore}}</strong></p>';

var muni_template_pendientes = '<p>Pendientes : {{pendientes_muni}} </p>';
var muni_template_cumplido = '<p>Cumplidos :<trong>{{cumplidos_muni}} </strong></p>';

var convenio_template_pendientes = '<p>Pendientes : {{pendientes_conveniosgestion}} </p>';
var convenio_template_cumplido = '<p>Cumplidos :{{cumplidos_conveniosgestion}}</p>';

var total_pendientes = '<p class="align">Pendientes Totales : {{totalpendientes}}</p>';
var total_cumplidos = '<p class="align">Compromisos Cumplidos :{{totalcumplidos}}</p>';

var template_compromisos = '<div id="accordion" role="tablist"> <div class="card"> <div class="card-header" role="tab" id="headingOne"> <h5 class="mb-0"> <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">{{compromiso1}} <span class="pull-right">SI</span> <span class="pull-right" style="margin-right: 4rem">10 meses </span></a> </h5> </div> <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion"> <div class="card-body"> <div class="row"> <div class="col-lg-6 col-md-6 col-sm-12 form-group"> <label>Fecha de Inicio</label> <input type="number" name="fecha" value="{{ fecha_inicio }}"> </div> <div class="col-lg-6 col-md-6 col-sm-12 form-group"> <label>Fecha cumplida</label> <input type="number" name="fecha" value="{{ fecha_cumplida }}"> </div> </div> <div class="row"> <div class="col-lg-4 col-md-4 col-sm-12 form-group"> <label>Tiempo</label> <input type="number" name="fecha" value="{{ fecha_inicio }}"> </div> <div class="col-lg-4 col-md-4 col-sm-12 form-group"> <label>Plazo</label> <input type="number" name="fecha" value="{{ fecha_cumplida }}"> </div> <div class="col-lg-4 col-md-4 col-sm-12 form-group"> <label>Riesgo</label> <input type="text" name="fecha" value="{{ estado_cumplimiento }}"> </div> </div> <div> <button type= "button" class="btn btn-primary" data-toggle="modal" data-target="#detalle_compromiso" id="detalle"> Más detalle</button> </div> </div> </div> </div> </div>';
var template_navPills = '<ul class="nav nav-pills nav_pills mb-3" id="pills-tab" role="tablist"> <li class="nav-item"> <a class="nav-link " id="pills_{{id}}_tab" data-toggle="pill" href="#pills_{{id}}" role="tab" aria-expanded="true"> {{pill_Nav}}</a> </li> </ul> <div class="tab-content tab_content " id="pills-tabContent"> <div class="tab-pane fade show " id="pills_{{id}}" role="tabpanel"> <div class="col-lg-12 col-md-12 col-sm-12 " style="margin-bottom: 1rem"> <div class="list-group_mesa"> <li class="list-group-item list-group-item-action " id="list_{{id.list_group_pills}}"  aria-controls="home">{{mesa_info}}<a href="compromisos.html" class="compromisos float-right">Compromisos</a> </li> </div> </div> </div> </div>';
var titulos_mesas = '<div class="col-lg-12 col-md-12 col-sm-12 " style="margin-bottom: 1rem"> <div class="list-group_mesa"> <li class="list-group-item list-group-item-action " id="list_{{id.list_group_pills}}"  aria-controls="home">{{mesa_info}}<div class="compromisos float-right" data-compromisos="compromisos">Compromisos</div> </li> </div> </div>';

$(".land").click(function (e) {
  console.log(e);
  console.log($(this).data);
});
for (var i = 0; i < regions.length; i++) {
  regions[i].click(function (e) {
    llenarDatos(this.data('region'))
  });
}

function llenarDatos(id_region) {
  $("#pills").empty().removeClass("aparece").addClass("hidden");
  $(".desaparece").removeClass("hidden");
  $("#mesa_dialogo_container").empty();
  $("#gore_container").empty();
  $("#muni_container").empty();
  $("#padre_totales").empty();
  $("#convenio_container").empty();

  $.ajax({
    url    : "/datos.json",
    type   : "GET",
    success: function (response) {
      var data = response.departamento;
      var data_tipo = (data[id_region]);
      var tipo = data_tipo.tipo;
      console.log(tipo["mesa_dialogo"]["pendientes"]);
      var reemplazarTotalPendientes = total_pendientes.replace("{{totalpendientes}}", data_tipo.pendientes_totales);
      var reemplazarTotalCumplidos = total_cumplidos.replace("{{totalcumplidos}}", data_tipo.cumplidos_totales);
      var reemplazarPendientes = mesa_template_pendientes.replace("{{pendientes_mesadialogos}}", tipo["mesa_dialogo"]["pendientes"]);
      var reemplazarCumplidos = mesa_template_cumplido.replace("{{cumplidos_mesadialogos}}", tipo["mesa_dialogo"]["cumplidos"]);
      var gorereemplazarPendientes = gore_template_pendientes.replace("{{pendientes_gore}}", tipo["mesa_gore"]["pendientes"]);
      var gorereemplazarCumplidos = gore_template_cumplido.replace("{{cumplidos_gore}}", tipo["mesa_gore"]["cumplidos"]);
      var munireemplazarPendientes = muni_template_pendientes.replace("{{pendientes_muni}}", tipo["mesa_muni"]["pendientes"]);
      var munireemplazarCumplidos = muni_template_cumplido.replace("{{cumplidos_muni}}", tipo["mesa_muni"]["cumplidos"]);
      var convenioreemplazarPendientes = convenio_template_pendientes.replace("{{pendientes_conveniosgestion}}", tipo["mesa_convenio"]["pendientes"]);
      var convenioreemplazarCumplidos = convenio_template_cumplido.replace("{{cumplidos_conveniosgestion}}", tipo["mesa_convenio"]["cumplidos"]);

      $("#mesa_dialogo_container").append(reemplazarCumplidos, reemplazarPendientes);
      $("#gore_container").append(gorereemplazarPendientes, gorereemplazarCumplidos);
      $("#muni_container").append(munireemplazarPendientes, munireemplazarCumplidos);
      $("#convenio_container").append(convenioreemplazarPendientes, convenioreemplazarCumplidos);
      $("#padre_totales").append(reemplazarTotalPendientes, reemplazarTotalCumplidos);

      var datos_array = [];
      $(".azul").click(function () {
        $("#pills").empty().removeClass("hidden").toggleClass("aparece");
        $(".desaparece").addClass("hidden");
        var data_mesa = tipo[$(this).data("tipo")]["mesas_de_trabajo"];
        var resultado = "";
        for (var i in data_mesa) {
          var reemplazarMesaTitulo = titulos_mesas.replace("{{mesa_info}}", data_mesa[i].nombre);
          $("#pillls").append(reemplazarMesaTitulo);
          $(".compromisos").click(function () {
            $("#compromisos").removeClass("hidden");
            $("#pillls").addClass("hidden");
            datos_array = data_mesa[i].compromisos;
            console.log("1", datos_array);
          });
        }
      });
    },
    error  : function (error) {
      console.log(error);
    }
  });
}
