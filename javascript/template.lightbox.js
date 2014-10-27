jQuery( document ).ready( function () {
    var element = jQuery( ".l-container-box" );

    element.each( function( id, object ) {
        var object = jQuery( object );
        var file   = object.data( "file" );

        object.lightbox( {
            templateFile: file
        } );
    });
} );
