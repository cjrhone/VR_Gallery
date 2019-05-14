


//TEST GEOMETRY

    
    var testGeometry = new THREE.BoxBufferGeometry(4,4,4);
    var testMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, specular:0x0000ff, wireframe: true })

    // We're defining textureLoader to load textures, and then changing each texture with certain parameters to fit the designated material 
    var textureLoader = new THREE.TextureLoader();
    
    textureLoader.load( 'textures/crate.gif', function ( map ) {
        testMaterial2.map = map; 
    });

    var testMaterial2 = new THREE.MeshPhongMaterial({ color: 0xffffff, specular:0xffffff })

    var testBox = new THREE.Mesh(testGeometry, testMaterial);
    var testBox2 = new THREE.Mesh(testGeometry, testMaterial2);
    var mesh = new THREE.Mesh(testGeometry, testMaterial);

    testBox.position.set(-43, 9, -6);
    testBox2.position.set(-43, 9, -14)
    mesh.position.set(10,10,10);

    // scene.add(testBox);
    // scene.add(testBox2);
    // scene.add(mesh);
    
