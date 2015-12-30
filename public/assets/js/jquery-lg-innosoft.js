$(document).on('ready', function(){
	$('.demo').on('click', function(){
		alert("Este modulo se encuentra en desarrollo ...");
	});

	//Modulo de Compras
	$.datepicker.setDefaults($.datepicker.regional["es"]);
	$('#dateModal').datepicker({
        dateFormat: "dd/mm/yy",
        dayNames: [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ],
        dayNamesMin: [ "Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa" ],
        firstDay: 1,
        gotoCurrent: true,
        monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre" ]
    });
	$('#dateInicial').datepicker({
        dateFormat: "dd/mm/yy",
        dayNames: [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ],
        dayNamesMin: [ "Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa" ],
        firstDay: 1,
        gotoCurrent: true,
        monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre" ]
    });
	$('#dateFinal').datepicker({
        dateFormat: "dd/mm/yy",
        dayNames: [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ],
        dayNamesMin: [ "Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa" ],
        firstDay: 1,
        gotoCurrent: true,
        monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre" ]
    });
    $('.close').on('click', function(){
    	$('#altaModal').hide();
    });
    $('.btnClose').on('click', function(){
    	$('#altaModal').hide();
    });
});


//Funciones    
function agregarCompras() {
	var ruta = "compra";
	var url = $('#alta').attr("data-link");

	$.ajax({
		url: 'compra',
		type: 'POST',
		data: {datos: 'misDAtos', _token: $('#alta').data('token')},		
		send: function() {
			alert('Lo estoy enviando');
		},
		error: function(error){
			alert(error);
		},
		success: function(response){
			console.log(response);			
			$('#altaModal').show();
		}
	});
}