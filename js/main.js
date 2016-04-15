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

        function changeone () {
            var education = $( '#education' );
            education.css( {
                'background-color': 'rgba(189, 223, 161, 0.7)'
            } );
        }
        education.addEventListener( 'mouseover', changeone );

        function changetwo () {
            var work = $( '#work' );
            work.css( {
                'background-color': 'rgba(147, 194, 232, 0.6)'
            } );
        }
        work.addEventListener( 'mouseover', changetwo );

        function changethree () {
            var skills = $( '#skills' );
            skills.css( {
                'background-color': 'rgba(237, 168, 206, 0.6)'
            } );
        }
        skills.addEventListener( 'mouseover', changethree );

        function changefour () {
            var volunteer = $( '#volunteer' );
            volunteer.css( {
                'background-color': 'rgba(252, 203, 184, 0.7)'
            } );
        }
        volunteer.addEventListener( 'mouseover', changefour );
} );
