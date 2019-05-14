 // CREATE OBJECTS

 var floorGeometry = new THREE.PlaneBufferGeometry( 300, 300, 50, 50 );

 var floorMaterial = new THREE.MeshPhongMaterial({ color: 0xD3D3D3, specular:0xffffff, side: THREE.DoubleSide })
 var ceilingGeometry = new THREE.PlaneBufferGeometry( 300, 250, 50, 50 );

 var southWall = new THREE.PlaneBufferGeometry( 300, 200, 1 );
 var northWall = new THREE.PlaneBufferGeometry( 300, 200, 1 );
 var westWall = new THREE.PlaneBufferGeometry( 200, 200, 1 );
 var eastWall = new THREE.PlaneBufferGeometry( 200, 200, 1 );
 var dividerOne = new THREE.PlaneBufferGeometry( 130, 50, 1);
 var dividerTwo = new THREE.PlaneBufferGeometry( 130, 50, 1);

 var artOne = new THREE.BoxBufferGeometry( 48, 27, 0.5);
 var artTwo = new THREE.BoxBufferGeometry( 48, 27, 0.5);
 var artThree = new THREE.BoxBufferGeometry( 48, 27, 0.5);
 var artShader = new THREE.BoxBufferGeometry( 20, 10, 0.5);

 var cylinderGeometry = new THREE.CylinderGeometry( 2, 2, 5, 15 );

 var screenGeometry = new THREE.BoxBufferGeometry( 8, 4.5, 0.5);
 var boxGeometry = new THREE.BoxBufferGeometry( 10, 5, 15);

 var testGeometry = new THREE.BoxBufferGeometry(4,4,4);


//  var testBox = new THREE.Mesh(testGeometry, testMaterial);
//  var testBox2 = new THREE.Mesh(testGeometry, testMaterial2);
//  var mesh = new THREE.Mesh(testGeometry, testMaterial);

//  testBox.position.set(-43, 9, -6);
//  testBox2.position.set(-43, 9, -14)
//  mesh.position.set(10,10,10);


 // CREATE MATERIALS
 var wallMaterial = new THREE.MeshPhongMaterial({ color: 0xE6E6FA, specular:0x000000, side: THREE.DoubleSide })
 var artMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, specular:0xffffff, side: THREE.DoubleSide })
 var ceilingMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, specular:0xffffff, side: THREE.DoubleSide })
 var cylinderMaterial = new THREE.MeshPhongMaterial( {color: 0xffffff} );
 var screenMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, specular:0xffffff, side: THREE.DoubleSide })
 var boxMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0xffffff, side: THREE.DoubleSide })
 var testMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, specular:0x0000ff, wireframe: true })

 var testMaterial2 = new THREE.MeshPhongMaterial({ color: 0xffffff, specular:0xffffff })


 // CREATE MESH

 var floor = new THREE.Mesh( floorGeometry, floorMaterial );
 var Ceiling = new THREE.Mesh( ceilingGeometry, ceilingMaterial);


 var S_Wall = new THREE.Mesh( southWall, wallMaterial );
 var N_Wall = new THREE.Mesh( northWall, wallMaterial );
 var W_Wall = new THREE.Mesh( westWall, wallMaterial );
 var E_Wall = new THREE.Mesh( eastWall, wallMaterial );
 var Divider1 = new THREE.Mesh( dividerOne, wallMaterial);
 var Divider2 = new THREE.Mesh( dividerTwo, wallMaterial);

 var ArtOne = new THREE.Mesh( artOne, artMaterial );
 var ArtTwo = new THREE.Mesh( artTwo, artMaterial );
 var ArtThree = new THREE.Mesh( artThree, artMaterial );
 var ArtShader = new THREE.Mesh( artShader, artMaterial );

 var Cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
 var WelcomeScreen = new THREE.Mesh( screenGeometry, screenMaterial);

 var DisplayBoxSquare = new THREE.Mesh( boxGeometry, boxMaterial );
 var DisplayBoxEffect1 = new THREE.Mesh( boxGeometry, boxMaterial );
 var DisplayBoxEffect2 = new THREE.Mesh( boxGeometry, boxMaterial );
 var DisplayBoxKinect = new THREE.Mesh( boxGeometry, boxMaterial );
 var DisplayBoxMaterials = new THREE.Mesh( boxGeometry, boxMaterial );
 var DisplayBoxMorph = new THREE.Mesh( boxGeometry, boxMaterial );
 var DisplayBoxSit = new THREE.Mesh( boxGeometry, boxMaterial );
 var DisplayBoxCloth = new THREE.Mesh( boxGeometry, boxMaterial );

 var testBox = new THREE.Mesh(testGeometry, testMaterial);
 var testBox2 = new THREE.Mesh(testGeometry, testMaterial2);
 var mesh = new THREE.Mesh(testGeometry, testMaterial);


 // REPOSITION

 S_Wall.position.set(0,10,50);
 N_Wall.position.set(0, 10, -150);
 W_Wall.position.set(-150, 10, -50);
 W_Wall.rotation.y = Math.PI / 2;
 E_Wall.position.set(150, 10, -50);
 E_Wall.rotation.y = Math.PI / 2;
 
 Divider1.position.set(50, 20, -15);
 Divider1.rotation.y = Math.PI / 2;
 Divider2.position.set(-50, 20, -15);
 Divider2.rotation.y = Math.PI / 2;

 ArtOne.position.set(0,25,-149.2);
 ArtTwo.position.set(100,25,-149.3);
 ArtThree.position.set(-100,25,-149.5);
 ArtShader.position.set(49.5, 15, 0);
 ArtShader.rotation.y = Math.PI / 2;

 Ceiling.position.set(0, 110, -50)
 Ceiling.rotateX( - Math.PI / 2 );

 Cylinder.position.set(15,3,-20);
 WelcomeScreen.position.set(15,8,-20);
 WelcomeScreen.rotateX( -Math.PI / 6);

 floorGeometry.rotateX( - Math.PI / 2 );


 testBox.position.set(-43, 9, -6);
 testBox2.position.set(-43, 9, -14)
 mesh.position.set(10,10,10);


 DisplayBoxSquare.position.set(-44,3,-10)
 DisplayBoxEffect1.position.set(56,3,-25) 
 DisplayBoxEffect2.position.set(144,3,-80)
 DisplayBoxKinect.rotateY( - Math.PI / 2); 
 DisplayBoxKinect.position.set(100,3,44)  
 DisplayBoxMaterials.position.set(-56,3,-35)
 DisplayBoxMorph.position.set(-144,3,-90)
 DisplayBoxSit.position.set(-144,3,-20)
 DisplayBoxCloth.position.set(-100, 3, 44)
 DisplayBoxCloth.rotateY( - Math.PI / 2); 

 // SCENE ADD
 
 scene.add(DisplayBoxSquare);
 scene.add(DisplayBoxEffect1);
 scene.add(DisplayBoxEffect2);
 scene.add(DisplayBoxKinect);
 scene.add(DisplayBoxMaterials);
 scene.add(DisplayBoxMorph);
 scene.add(DisplayBoxSit);
 scene.add(DisplayBoxCloth);

 scene.add( floor );
 scene.add( S_Wall );
 scene.add( N_Wall );
 scene.add( W_Wall );
 scene.add( E_Wall );
 scene.add( Divider1 );
 scene.add( Divider2 );
 scene.add( ArtOne );
 scene.add( ArtTwo );
 scene.add( ArtThree );
 scene.add( ArtShader );
 scene.add( Ceiling );
 scene.add( Cylinder );
 scene.add( WelcomeScreen );

 scene.add(testBox);
 scene.add(testBox2);

 var helper = new THREE.GridHelper( 10, 10, 0x303030, 0x303030 );
    helper.position.set( -56, 6, -35);
    scene.add( helper );