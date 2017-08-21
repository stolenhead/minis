$(document).ready(function () {
  var eessnombre = '';
  var departamentos = (function () {
    var json_data = null;
    $.ajax({
      'async': false,
      'global': false,
      'url': '/api/v1/ubigeo/',
      'dataType': "json",
      'success': function (data) {
        json_data = data.data;
      }
    });
    return json_data;
  })();

  $("#id_distrito").select2({
    placeholder: "Seleccione", disabled: true
  }).on("change", function () {
    $("#loading").removeClass('hidden');
    $("#establecimientos").empty();
    $("#total-estab").empty();
    $.ajax({
      'async': false,
      'global': false,
      'url': "/api/v1/establecimientos/" + $(this).val() + "/?eessnombre=" + eessnombre,
      'dataType': "json",
      'success': function (data) {
        json_data = data.data;
        $("#loading").addClass('hidden');
        var items = "<div class='list-group'>";
        var i = 0;
        $.each(data.data, function (key, val) {
          i += 1;
          var direccion = '-';
          if (val.attributes.direccion !== 'ACTUALIZAR') {
            direccion = val.attributes.direccion;
          }
          items += "<button type='button' class='list-group-item'>" +
            '<span class="text-primary">' + val.attributes.nombre + '</span>' +
            "<br>" +
            "<span>" + direccion + "</span>" +
            "</button>";
        });
        items += "</ul>";
        $("#establecimientos").removeClass('hidden').append(items);
        $("#total-estab").html("Total establecimientos: <strong>" + i + "</strong>");
      }
    });
  });

  $("#id_departamento").select2({
    placeholder: "Seleccione", data: departamentos
  }).on("change", function () {
    var dep = $(this).val();
    var url = "/api/v1/ubigeo/" + dep + "/";
    $.get(url, function (data) {
      $("#id_distrito").empty().prop("disabled", true);
      var idp = $("#id_provincia").empty();
      idp.select2({data: data.data, placeholder: "Seleccione", disabled: false}).trigger("change");
    }, "json")
  }).val('15').trigger('change');

  $("#id_provincia").select2({
    placeholder: "Seleccione", disabled: true
  }).on("change", function () {
    var prov = $(this).val();
    var url = "/api/v1/ubigeo/" + prov + "/";
    $.get(url, function (data) {
      var idd = $("#id_distrito").empty();
      idd.select2({data: data.data, placeholder: "Seleccione", disabled: false}).trigger("change");
    }, "json")
  });

  $("#eessnombre").on("change", function () {
    eessnombre = $(this).val();
    $("#id_distrito").trigger("change");
  });
});
