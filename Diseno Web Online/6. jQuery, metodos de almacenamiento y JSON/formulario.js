var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();

if(localStorage.getItem('autosave')){
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
}, 1000);

function mostrarFormulario(){
	$form.slideToggle();
	$list.slideToggle();
	return false; //Para quitar el scroll automatico al dar click al boton por el href="#"
}

function agregarPost(e){
	console.log(e);
	e.preventDefault();
	return;

	var url = $url.val(),
		titulo = $titulo.val(),
		clone = $post.clone();

	clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	clone.hide();

	$list.prepend(clone);
	mostrarFormulario();
	$titulo.val('');
	$url.val('');
	clone.slideDown();

	//Hace lo mismo que e.preventDefault
	//return false;
}

//Eventos

$button.click( mostrarFormulario );
$form.on('submit', agregarPost);

//Agrega dinamicamente http:// en la seccion de URL
/*$button.click( mostrarFormulario );
$form
	.on('submit', agregarPost)
	.find('#url')
	.on('focus', function(){
		$('#url').val('http://');
	})
	.on('blur', function(){
		$('#url').val('');
	});*/