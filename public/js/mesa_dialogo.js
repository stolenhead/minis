
var template_acuerdos = '<div class="tab-pane fade show active" id="pills-mesa" role="tabpanel" aria-labelledby="pills-mesa-tab">'+
				           '<div id="accordion" role="tablist">'+
				                '<div class="card">'+
					                '<div class="card-header" role="tab" id="headingOne">'+
					                    +'<h5 class="mb-0">'+
					                        '<a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">{{compromiso1}}<span class="pull-right">{{estado_cumplimiento}}</span> <span class="pull-right">{{fecha_restante }}</span></a>'+
					                    '</h5>'+
					                '</div>'+
					                '<div id="{{collaps_compromiso}}" class="collapse " role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">'+
					                    '<div class="card-body">'+
						                    '<div class="row">'+
						                        '<div class="col-lg-6 col-md-6 col-sm-12 form-group">'+
							                        '<label>Fecha de Inicio</label>'+
							                        '<input type="number" name="fecha" value="{{ fecha_inicio }}">'+
						                        '</div>'+
							                    '<div class="col-lg-6 col-md-6 col-sm-12 form-group">'+
							                        '<label>Fecha cumplida</label>'+
							                        '<input type="number" name="fecha" value="{{ fecha_cumplida }}">'+
							                    '</div>'+
						                    '</div>'+
						                    '<div class="row">'+
							                    '<div class="col-lg-4 col-md-4 col-sm-12 form-group">'+
							                        '<label>Tiempo</label>'+
							                        '<input type="number" name="fecha" value="{{ fecha_inicio }}">'+
							                    '</div>'+
							                    '<div class="col-lg-4 col-md-4 col-sm-12 form-group">'+
							                        '<label>Plazo</label>'+
							                        '<input type="number" name="fecha" value="{{ fecha_cumplida }}">'+
							                    '</div>'
							                    '<div class="col-lg-4 col-md-4 col-sm-12 form-group">'+
							                        '<label>Riesgo</label>'+
							                        '<input type="text" name="fecha" value="{{ estado_cumplimiento }}">'+
							                    '</div>'+
							                '</div>'+
						                '<div>'+
					                        '<button type= "button" class="btn btn-primary" data-toggle="modal" data-target="#detalle_compromiso" id="detalle"> Más detalle</button>'+
					                    '</div>'+
					                '</div>'+
					            '</div>'+
				            '</div>'+
				        '</div>';          

var template_detalles=   '<div class="modal fade" id="detalle_compromiso" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
					        '<div class="modal-dialog modal-lg" role="document">'+
					          '<div class="modal-content">'+
					            '<div class="modal-header">'+
					              '<h5 class="modal-title" id="situacion_compromiso">Situación Actual</h5>'+
					              '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
					                '<span aria-hidden="true">&times;</span>'
					              '</button>'+
					            '</div>'+
					            '<div class="modal-body">'+
					              '<div class="container">'+
					                '<div class="row">'+
					                  '<div class="col-md-6 col-lg-6 col-sm-12">'+
					                    '<div class="row form-group">'+
					                      '<label>Prioridad</label>'
					                      '<input type="text" name="prioridad" class="form-control" value="{{prioridad}}">'
					                    '</div>'+
					                    '<div class="row form-group">'+
					                      '<label>Fecha de Compromiso</label>'
					                      '<div class="detalle_descripcion">{{descripcion}}</div>'
					                    '</div>'+
					                    '<div class="row form-group">'+
					                      '<label>Tiempo a Cumplir</label>'
					                      '<div class="detalle_descripcion">{{tiempo_umplir}}</div>'
					                    '</div>'+
					                  '</div>'+
					                  '<div class="col-md-6 col-lg-6 col-sm-12">'+
					                    '<div class="row form-group">'
					                      '<label>Inversión</label>'
					                      '<input type="number" name="inversion" class="form-control" value="{{inversion}}">'
					                    '</div>'+
					                    '<div class="row form-group">'+
					                      '<label>Riesgo</label>'+
					                      '<input type="text" name="riesgo" class="form-control" value="{{riesgo}}">'
					                    '</div>'+
					                    '<div class="row form-group ">'+
					                      '<label>Tiempo a Cumplir</label>'
					                      '<div class="row">'+
					                        '<input type="text" name="iestado"  value="{{estado_cumplimiento}}" class="col-lg-6 col-md-6 col-sm-12 form-control">'
					                        '<input type="text" name=""  value="{{fecha_cunplir}}" class="col-lg-6 col-md-6 col-sm-12 form-control">'
					                      '</div>'+
					                    '</div>'+
					                    '<div class="row form-group">'+
					                      '<label>Plazo Faltante</label>'
					                      '<input type="text" name="iestado" class="form-control" value="{{plazo_faltante}}">'
					                    '</div>'+
					                  '</div>'+
					                '</div>'+
					              '</div>'+
					            '</div>'+
					          '</div>'+
					        '</div>'
					      '</div>';

