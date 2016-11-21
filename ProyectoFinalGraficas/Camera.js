  //Camera 
            var scene = new THREE.Scene(); 
            var camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight, 0.01, 3000); 
            var renderer = new THREE.WebGLRenderer(); 
            renderer.setSize(window.innerWidth, window.innerHeight); 
            document.body.appendChild(renderer.domElement); 
            camera.position.set(0,0,15);

   //Event listener
            //z = 10 * cos ø
            //x = 10 * sin ø
            var angle = 0.0; //Angle for camera
          

      			/*W -> up in Y
      			S -> down in Y
      			A -> left in X
      			D -> right in X

      			UpArrow -> Forward where it is Looking
      			DownArrow -> Backwards where it is Looking
      			Left -> Rotate camera. Increase angle.
      			Right -> Rotate camera. Decrease angle.*/

            //Define the eventListener for the camera to work
            window.addEventListener('keydown',doKeyDown,true);
            function doKeyDown(evt){
                switch (evt.keyCode) {
                    case 87:  //W
                        camera.position.y+=5;
                        break;
                    case 65:  //A                      
                    	angle+=90;
						camera.position.z -= (5*Math.cos( (angle*(Math.PI/180))  ));
                        camera.position.x -= (5*Math.sin( (angle*(Math.PI/180))  ));
                        angle-=90;
                        break;
                    case 83:  //S      
                        camera.position.y-=5;
                        break;
                    case 68:  //D  
						angle-=90;
						camera.position.z -= (5*Math.cos( (angle*(Math.PI/180))  ));
                        camera.position.x -= (5*Math.sin( (angle*(Math.PI/180))  ));
                        angle+=90;
                        break;
                  
                    case 38://Up
                        camera.position.z -= (5*Math.cos( (angle*(Math.PI/180))  ));
                        camera.position.x -= (5*Math.sin( (angle*(Math.PI/180))  ));
                        break;
                    case 37://Left
                        camera.rotation.y += (10 * Math.PI / 180  );
                        angle+=10;
                        break;
                    case 40://Down
                    	camera.position.z += (10*Math.cos( (angle*(Math.PI/180))  ));
                        camera.position.x += (10*Math.sin( (angle*(Math.PI/180))  ));
                        break;
                    case 39://Right
                    	camera.rotation.y -= (10 * Math.PI / 180  );
                        angle-=10;
                        break;


                }
            }
