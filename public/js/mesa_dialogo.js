
$(document).ready(function(){
	var source   = $("#pillls-template").html();
	var template = Handlebars.compile(source);
	var context  = {
	  nav_pills: [
              {
                id: 'mesa',
                pill_Nav :'Mesa de Trabajo',
                list_group_pills:[
                  {
                    id: 'compromiso1',
                    mesa_info:'MESA DE TRABAJO PARA EL DESARROLLO DEL DPTO.AMAZONAS'
                  },
                  {
                    id: 'compromiso2',
                    mesa_info:'MESA DE TUNDUZA'
                  }
                ]
              },
              {
                id: 'gore',
                pill_Nav :'Gore Ejeutivo',
                list_group_pills:[
                  {
                    id: 'compromiso11',
                    mesa_info:'mesañlkjklj1'
                  },
                  {
                    id: 'compromiso12',
                    mesa_info:'meshujkhjka2'
                  },
                  {
                    id: 'compromiso13',
                    mesa_info:'mesajhgj hjg3'
                  },
                  {
                    id: 'compromiso14',
                    mesa_info:'mdfg fgdsa4'
                  }

                ]
              },
              {
                id: 'muni',
                pill_Nav :'Muni Ejecutivo'
              },
              {
                id: 'muni',
                pill_Nav :'Convenio de Gestion'
              }              
            ]
	};
	$('#pillls').html(template(context));
	var primer_pills=$("#pills-tab").children().first().children();
	var primer_div=$("#pills-tabContent").children().first();
	console.log(primer_div);
	$(primer_pills).toggleClass("active");
	$(primer_div).toggleClass("active");
})
					      

