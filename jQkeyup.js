$('body')
	.append('<input></input>');
$('input').keyup(function(event) {
	alert($('input').val());
});