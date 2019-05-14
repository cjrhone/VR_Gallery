


//TEXTURE LOADER

    var textureLoader = new THREE.TextureLoader();
    
    textureLoader.load( 'textures/crate.gif', function ( map ) {
        testMaterial2.map = map; 
    });
    textureLoader.load( "textures/hardwood2_diffuse.jpg", function ( map ) {
        map.wrapS = THREE.RepeatWrapping;
        map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 4;
        map.repeat.set( 10, 24 );
        floorMaterial.map = map;
        floorMaterial.needsUpdate = true;
    } );


    
