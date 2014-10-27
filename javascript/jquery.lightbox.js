/**
 * Lightbox - ultra slim jQuery lightbox.
 *
 * @version     0.1
 * @author      Bartosz Łaniewski {@link http://laniewski.me}
 * @copyright   Copyright 2014, Bartosz Łaniewski (@link http://laniewski.me)
 * @license     MIT License {@link http://creativecommons.org/licenses/MIT/}
 **/

(function ( $ ) {
    /**
     * Declare our plugin.
     *
     * @param   json    options
     * @return  null
     */
    $.fn.lightbox = function ( options ) {
        var options = $.extend( {
            animationSpeed: 700,

            templateFile: null,
            templateCode: "<div id='lightbox'><div id='close'>×</div><div id='content'></div></div>"
        }, options );

        /**
         * Initializes our lightbox.
         */
        function init() {
            $( "#lightbox" ).remove();

            $( "body" ).append( options.templateCode );
            $( "body" ).css( "overflow", "hidden" );
            $( "#lightbox" ).hide();

            $( "#close" ).on( "click", close );
        };

        /**
         * Shows our lightbox with it's content or an error message.
         */
        function show() {
            if ( options.templateFile === null ) {
                error();
            } else {
                $.ajax( options.templateFile )
                   .done( function ( content ) {
                        success( content );
                   } )
                   .fail( function () {
                        error();
                   } );
            }
        };

        /**
         * Closes then removes our lightbox.
         */
        function close() {
            $( "body" ).css( "overflow", "auto" );

            $( "#lightbox" ).fadeOut( options.animationSpeed, function () {
                $( this ).remove();
            } );
        };

        /**
         * When content has succesfully been loaded.
         *
         * @param   string  content
         */
        function success( content ) {
            $( "#content" ).append( content );
            $( "#lightbox" ).fadeIn( options.animationSpeed );
        };

        /**
         * When content has not been loaded.
         */
        function error() {
            $( "#content" ).load( "template/404.html" );
            $( "#lightbox" ).fadeIn( options.animationSpeed );

            console.log( "Nie można otworzyć pliku." );
        };

        $( this ).on( "click", function () {
            init();
            show();
        } );
    };
}( jQuery ));
