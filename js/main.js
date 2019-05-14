var camera, scene, renderer, controls;

			var objects = [];

			var raycaster;

			var moveForward = false;
			var moveBackward = false;
			var moveLeft = false;
			var moveRight = false;
			var canJump = false;

			var prevTime = performance.now();
			var velocity = new THREE.Vector3();
			var direction = new THREE.Vector3();
            

            camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

            scene = new THREE.Scene();
            scene.background = new THREE.Color( 0x000000 );
            scene.fog = new THREE.Fog( 0xffffff, 0, 750 );

            loadLeePerrySmith();

            function loadLeePerrySmith() {
                var loader = new THREE.GLTFLoader();
                loader.load( 'models/LeePerrySmith/LeePerrySmith.glb', function ( gltf ) {
                    mesh = gltf.scene.children[ 0 ];
                    mesh.material = new THREE.MeshPhongMaterial( {
                        specular: 0x111111,
                        map: textureLoader.load( 'models/LeePerrySmith/Map-COL.jpg' ),
                        specularMap: textureLoader.load( 'models/LeePerrySmith/Map-SPEC.jpg' ),
                        normalMap: textureLoader.load( 'models/LeePerrySmith/Infinite-Level_02_Tangent_SmoothUV.jpg' ),
                        shininess: 25
                    } );
                    scene.add( mesh );
                    mesh.scale.set( 2, 2, 2 );
                    mesh.position.set(-100, 13, 42)
                    mesh.rotateY( - Math.PI / 1)
                } );
            }
