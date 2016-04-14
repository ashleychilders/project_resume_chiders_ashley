$( document ).ready( function() {

    $.backstretch(
        [
            "img/renwickblack.jpg",
            "img/renwickstack.jpg",
            "img/renwickrainbow.jpg"
        ], {
            duration: 3900, fade: 850 }
        );

        $( '.anchor-scroll' ).anchorScroll(
            {
            scrollSpeed: 800,
            offsetTop: 0,
            onScroll: function() {

         // callback on scroll start
            },
            scrollEnd: function() {

         // callback on scroll end
            }
        } );
} );
