var loader = new THREE.FontLoader();

loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
    var xMid, text;
    var color = 0x006699;
    var matDark = new THREE.LineBasicMaterial( {
        color: color,
        side: THREE.DoubleSide
    } );
    var matLite = new THREE.MeshBasicMaterial( {
        color: color,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
    } );
    var message = "Greetings, \n\nWe are under construction.\nDO NOT touch anything\nor we will call security\n\n -CJ";
    var shapes = font.generateShapes( message, 0.3 );
    var geometry = new THREE.ShapeBufferGeometry( shapes );
    geometry.computeBoundingBox();
    xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
    geometry.translate( xMid, 0, 0 );
    // make shape ( N.B. edge view not visible )
    text = new THREE.Mesh( geometry, matLite );
    text.position.set(15,9.5,-19.9)
    text.rotateX( -Math.PI / 6);
    scene.add( text );
})
