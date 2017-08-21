var menu_template=  '<div class="lista-container ">'+
							        '<div class="row">'+
							          '<div class="col-lg-6 col-md-6 col-sm-12 tipos">'+
							            '<a href="vistas/mesa_dialogo.html"><h2  class="azul">MESA DE DIÀLOGO</h2>'+
							            '<p>Pendientes : {{pendientes_mesadialogos}} </p>'+
							            '<p>Cumplidos :{{cumplidos_mesadialogos}}</p></a>'+         
							          '</div>'+
							          '<div class="col-lg-6 col-md-6 col-sm-12 tipos">'+
							            '<a href="vistas/gore.html"><h2  class="azul">GORE EJECUTIVO</h2>'+
							            '<p>Pendientes : {{pendientes_gore}} </p>'+
							            '<p>Cumplidos :{{cumplidos_gore}}</p></a>'+
							          '</div>'+
							        '</div>'
							        '<div class="row">'+
							          '<div class="col-lg-6 col-md-6 col-sm-12 tipos">'+
							            '<a href="vistas/mui.html"><h2  class="azul">MUNI EJECUTIVO</h2>'+
							            '<p>Pendientes : {{pendientes_muni} </p>'+
							            '<p>Cumplidos :{{cumplidos_muni}}</p></a>'+
							          '</div>'+
							          '<div class="col-lg-6 col-md-6 col-sm-12 tipos">'+
							            '<a href="vistas/convenios"><h2  class="azul">CONVENIOS DE GESTION</h2>'+
							            '<p>Pendientes : {{pendientes_conveniosgestion} </p>'+
							            '<p>Cumplidos :{{cumplidos_coneniosgestion}}</p></a>'+
							          '</div>'+
							        '</div>';

var mostrar=function(data){
  $("#tipo").empty();
  $.ajax({
    url: window.location.href +"json/datos.json",
    type:'GET',
    success: function(response){
        var data=response.mesa;
        var gestas=data.length;
        console.log(data);
    },
    error:function(error){
      console.log(error);
    }
  });    
}

for (var i = 0; i < regions.length; i++) {
  regions[i].click(function (e) {
    var region_data = this.data('region');
    console.log(region_data);
    $('#id_departamento').val(region_data).trigger("change");
    mostrar(this);
  });
  // Showing off
  regions[i].mouseover(function (e) {
    this.attr("fill", "#1c7dcc");
  });

  regions[i].mouseout(function (e) {
    this.attr("fill", "#43b5bf");
  });
}