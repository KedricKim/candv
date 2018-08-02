<html>
<body>
<script>
    $( document ).ready( function() {
        var jbOffset = $( '.wrap_top' ).offset();
        $( window ).scroll( function() {
            if ( $( document ).scrollTop() > jbOffset.top ) {
                $( '.wrap_top' ).addClass( 'topFixed' );
            }
            else {
                $( '.wrap_top' ).removeClass( 'topFixed' );
            }
        });
    } );
</script>
</body>
</html>