$(document).ready(inicializar);

function inicializar(){
	$speed = 200; //velocidad en milisegundos
	$margin = 20; //tamaño zona activa en px

	$(".animals").mouseenter(function(e){//el ratón entra
		var ancho = $(this).width(); //esta función me devuelve el ancho
		var alto = $(this).height(); //y ésta el alto

		var offset = $(this).offset();//devuelve un objeto con offset x la izquierda y x arriba
		var x = e.pageX; //posición x del cursos absoluta cuando e (evento definido en la función), entra en el elemento
		var y = e.pageY; //lo mismo pero con la y
		var diferenciaX = x - offset.left; //posición de la x por donde entra menos el margen izquierdo del elemento al que entra, que es lo que nos devuelve el offset.left
		var diferenciaY = y - offset.top; //lo mismo pero por arriba

		var tapa = $(this).find(".tapa"); //guardo en una variable todos los elementos de clase tapa con los que esté entrando con el ratón

		if (diferenciaX < $margin){//entra por la izquierda
			tapa.css("margin-top", "0px");
			tapa.css("margin-left", "-"+ancho+"px"); //si el ancho es 180 le estoy diciendo que cuando entre el ratón el margén se coloque a -180px a la izquierda de donde debería estar

			tapa.animate(
			{"margin-left": "0px"}, //propiedad que quiero modificar, quiero que el margen se ponga en 0, por lo que la tapa volverá a estar justo encima de la imagen
			$speed, //lo hará con esta velocidad indicada anteriormente
			"linear"); //y con este tipo de animación (hay que cargar tb jQueryUI para que funcione)
		
			tapa.css("visibility", "visible"); //ahora cambio la propiedad css a visible para que se vea. 

		} else if (diferenciaX > ancho - $margin){//entra por la derecha
			tapa.css("margin-top", "0px");
			tapa.css("margin-left", ancho+"px"); //si el ancho es 180 le estoy diciendo que cuando entre el ratón el margén se coloque a +180px a la derecha de donde debería estar

			tapa.animate(
			{"margin-left": "0px"}, //propiedad que quiero modificar, quiero que el margen se ponga en 0, por lo que la tapa volverá a estar justo encima de la imagen
			$speed, //lo hará con esta velocidad indicada anteriormente
			"linear"); //y con este tipo de animación (hay que cargar tb jQueryUI para que funcione)
		
			tapa.css("visibility", "visible"); //ahora cambio la propiedad css a visible para que se vea. 

		} else if (diferenciaY < $margin){//entra por arriba
			tapa.css("margin-left", "0px");
			tapa.css("margin-top", "-"+alto+"px"); //le estoy diciendo que el margen superior se coloque a menos la altura del objeto, o sea, justo encima de donde debería estar

			tapa.animate(
			{"margin-top": "0px"}, //propiedad que quiero modificar, quiero que el margen se ponga en 0, por lo que la tapa volverá a estar justo encima de la imagen
			$speed, //lo hará con esta velocidad indicada anteriormente
			"linear"); //y con este tipo de animación (hay que cargar tb jQueryUI para que funcione)

		} else if (diferenciaY > alto - $margin){//entra por abajo
			tapa.css("margin-left", "0px");
			tapa.css("margin-top", alto+"px"); //el div se colocará justo debajo de donde debería estar para que pueda entrar por debajo

			tapa.animate(
			{"margin-top": "0px"}, //propiedad que quiero modificar, quiero que el margen se ponga en 0, por lo que la tapa volverá a estar justo encima de la imagen
			$speed, //lo hará con esta velocidad indicada anteriormente
			"linear"); //y con este tipo de animación (hay que cargar tb jQueryUI para que funcione)

		};

		
	});

	$(".animals").mouseleave(function(e){//el ratón sale
		var ancho = $(this).width(); //esta función me devuelve el ancho
		var alto = $(this).height(); //y ésta el alto

		var offset = $(this).offset();//devuelve un objeto con offset por la izquierda y por arriba
		var x = e.pageX; //posición x del cursos absoluta cuando e (evento definido en la función), entra en el elemento
		var y = e.pageY; //lo mismo pero con la y
		var diferenciaX = x - offset.left; //posición de la x por donde entra menos el margen izquierdo del elemento al que entra, que es lo que nos devuelve el offset.left
		var diferenciaY = y - offset.top; //lo mismo por por arriba

		var tapa = $(this).find(".tapa"); //guardo en una variable todos los elementos de clase tapa con los que esté entrando con el ratón

		if (diferenciaX < $margin){//sale por la izquierda

			tapa.animate(//le digo q me anime otra vez y me lo coloque en la posición negativa de su ancho. No hace falta que lo coloque fuera para que entre como lo hice en el mouseenter, ahora ya está colocado y queremos que se vaya fuera.
			{"margin-left": "-"+ancho+"px"}, //propiedad que quiero modificar, quiero que el margen se ponga en de nuevo a menos el ancho
			$speed, //lo hará con esta velocidad indicada anteriormente
			"linear"); //y con este tipo de animación (hay que cargar tb jQueryUI para que funcione)

			//no necesito que se vuelva a hacer invisible porque el overflow ya está hidden y si le digo que se ponga la visibilidad hidden desaparecería instantáneamente

		} else if (diferenciaX > ancho - $margin){//sale por la derecha

			tapa.animate(
			{"margin-left": ancho+"px"}, 
			$speed, 
			"linear");

		} else if (diferenciaY < $margin){//sale por arriba

			tapa.animate(
			{"margin-top": "-"+alto+"px"}, 
			$speed, 
			"linear");

		} else if (diferenciaY > alto - $margin){//sale por abajo

			tapa.animate(
			{"margin-top": alto+"px"}, 
			$speed, 
			"linear");

		}

	});
}



