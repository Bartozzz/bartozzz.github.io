jQuery( document ).ready( function () {
    jQuery( ".l-contact-field" ).keyup( function () {
        var id = jQuery( this ).attr( "id" );

        jQuery( ".l-contact-" + id ).addClass( "l-contact-typing" );

        if ( jQuery( this ).val().length == 0 ) {
            jQuery( ".l-contact-" + id ).removeClass( "l-contact-typing" );
        }
    } );
} );
