$("body")
	.append('<div>this is the div</div>');
$( "div" ).hover(
  function() {
    $( this ).append( $( "<span> over</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);