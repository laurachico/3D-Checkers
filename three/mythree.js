(function ( mythree) {

mythree.init = function(hook) {

	var checkersBoard = undefined;

	var WIDTH = 500,
	  HEIGHT = 500;
	//alpha set to true to have the background transparent
	var renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setSize(WIDTH, HEIGHT);
	hook.append(renderer.domElement);
	//Camera variables
	var VIEW_ANGLE = 65, //65 FOV is most 'natural' FOV
	  ASPECT = WIDTH / HEIGHT,
	  NEAR = 0.1,		//these elements are needed for cameras to
	  FAR = 10000;		//partition space correctly
	var camera =
	  new THREE.PerspectiveCamera(
		VIEW_ANGLE,
		ASPECT,
		NEAR,
		FAR);
	camera.position.z = 400;
	var controls = new THREE.TrackballControls( camera );
	controls.target.set( 0, 0, 0 )

	var scene = new THREE.Scene();
	scene.add(camera);

	//Create the board 

	var board = new THREE.CubeGeometry( 480, 480, 25,8,8,0 );

	//Define the texture passing an checkers board image

	texture = THREE.ImageUtils.loadTexture('checkersboard.jpeg');
	material= new THREE.MeshBasicMaterial( {map: texture} ) ;
	
	// Define the mesh (the board mesh) and put the material on the board
	boardmesh = new THREE.Mesh(board,  material );
	
	scene.add( boardmesh );

	
	//Initial positions for the black pieces 
    positionblack=[];
    //all white squares in the board
    allwhiteboardpositions=[];
    //all black squares in the board
     allblackboardpositions=[];
    //First line
    allwhiteboardpositions.push(new THREE.Vector3(-210, 210, 25));
    positionblack.push( new THREE.Vector3(-150, 210, 25));
    allblackboardpositions.push( new THREE.Vector3(-150, 210, 25));

    allwhiteboardpositions.push(new THREE.Vector3(-90, 210, 25));
    positionblack.push( new THREE.Vector3(-30, 210, 25)); 
    allblackboardpositions.push( new THREE.Vector3(-30, 210, 25));

    allwhiteboardpositions.push(new THREE.Vector3(30, 210, 25));
    positionblack.push( new THREE.Vector3(90, 210, 25));
    allblackboardpositions.push( new THREE.Vector3(90, 210, 25));

    allwhiteboardpositions.push(new THREE.Vector3(150, 210, 25));
    positionblack.push( new THREE.Vector3(210, 210, 25));
    allblackboardpositions.push( new THREE.Vector3(210, 210, 25));

    //Second line
    positionblack.push( new THREE.Vector3(-210, 150, 25)); 
    allblackboardpositions.push( new THREE.Vector3(-210, 150, 25));
    allwhiteboardpositions.push(new THREE.Vector3(-150, 150, 25));

    positionblack.push( new THREE.Vector3(-90, 150, 25)); 
    allblackboardpositions.push( new THREE.Vector3(-90, 150, 25)); 
	allwhiteboardpositions.push(new THREE.Vector3(-30, 150, 25));

    positionblack.push( new THREE.Vector3(30, 150, 25)); 
    allblackboardpositions.push( new THREE.Vector3(30, 150, 25));
    allwhiteboardpositions.push(new THREE.Vector3(90, 150, 25));

    positionblack.push( new THREE.Vector3(150, 150, 25));
    allblackboardpositions.push( new THREE.Vector3(150, 150, 25));
    allwhiteboardpositions.push(new THREE.Vector3(210, 150, 25));
    //Third line
    allwhiteboardpositions.push(new THREE.Vector3(-210, 90, 25));
    positionblack.push( new THREE.Vector3(-150, 90, 25)); 
    allblackboardpositions.push( new THREE.Vector3(-150, 90, 25));

    allwhiteboardpositions.push(new THREE.Vector3(-90, 90, 25));
  	positionblack.push( new THREE.Vector3(-30, 90, 25));
  	allblackboardpositions.push( new THREE.Vector3(-30, 90, 25));

  	allwhiteboardpositions.push(new THREE.Vector3(30, 90, 25)); 
    positionblack.push( new THREE.Vector3(90, 90, 25));
    allblackboardpositions.push( new THREE.Vector3(90, 90, 25));

    allwhiteboardpositions.push(new THREE.Vector3(150, 90, 25));
    positionblack.push( new THREE.Vector3(210, 90, 25)); 
    allblackboardpositions.push( new THREE.Vector3(210, 90, 25));

	//Initial positions for the white pieces 
    positionwhites=[];
    //First line
    positionwhites.push( new THREE.Vector3(-210, -90, 25));
    allblackboardpositions.push( new THREE.Vector3(-210, -90, 25));
    allwhiteboardpositions.push( new THREE.Vector3(-150, -90, 25));

    positionwhites.push( new THREE.Vector3(-90, -90, 25)); 
    allblackboardpositions.push( new THREE.Vector3(-90, -90, 25)); 
    allwhiteboardpositions.push( new THREE.Vector3(-30, -90, 25));

    positionwhites.push( new THREE.Vector3(30, -90, 25));
    allblackboardpositions.push( new THREE.Vector3(30, -90, 25));
    allwhiteboardpositions.push( new THREE.Vector3(90, -90, 25));

    positionwhites.push( new THREE.Vector3(150, -90, 25));
    allblackboardpositions.push( new THREE.Vector3(150, -90, 25));
    allwhiteboardpositions.push( new THREE.Vector3(210, -90, 25));
    //Second line
    allwhiteboardpositions.push( new THREE.Vector3(-210, -150, 25));
    positionwhites.push( new THREE.Vector3(-150, -150, 25)); 
    allblackboardpositions.push( new THREE.Vector3(-150, -150, 25));

    allwhiteboardpositions.push( new THREE.Vector3(-90, -150, 25)); 
    positionwhites.push( new THREE.Vector3(-30, -150, 25)); 
    allblackboardpositions.push( new THREE.Vector3(-30, -150, 25));

    allwhiteboardpositions.push( new THREE.Vector3(30, -150, 25));
    positionwhites.push( new THREE.Vector3(90, -150, 25)); 
    allblackboardpositions.push( new THREE.Vector3(90, -150, 25));

    allwhiteboardpositions.push( new THREE.Vector3(150, -150, 25));
    positionwhites.push( new THREE.Vector3(210, -150, 25));
    allblackboardpositions.push( new THREE.Vector3(210, -150, 25));
    //Third line
    positionwhites.push( new THREE.Vector3(-210, -210, 25)); 
    allblackboardpositions.push( new THREE.Vector3(-210, -210, 25));
    allwhiteboardpositions.push( new THREE.Vector3(-150, -210, 25));

  	positionwhites.push( new THREE.Vector3(-90, -210, 25)); 
  	allblackboardpositions.push( new THREE.Vector3(-90, -210, 25)); 
  	allwhiteboardpositions.push( new THREE.Vector3(-30, -210, 25));

    positionwhites.push( new THREE.Vector3(30, -210, 25));
    allblackboardpositions.push( new THREE.Vector3(30, -210, 25));
    allwhiteboardpositions.push( new THREE.Vector3(90, -210, 25));

    positionwhites.push( new THREE.Vector3(150, -210, 25)); 
    allblackboardpositions.push( new THREE.Vector3(150, -210, 25)); 
    allwhiteboardpositions.push( new THREE.Vector3(210, -210, 25));
    
    

    //Others positions (middle positions)
    allblackboardpositions.push( new THREE.Vector3(-210, 30, 25)); 
    allwhiteboardpositions.push( new THREE.Vector3(-150, 30, 25)); 
    allblackboardpositions.push( new THREE.Vector3(-90, 30, 25)); 
    allwhiteboardpositions.push( new THREE.Vector3(-30, 30, 25));
    allblackboardpositions.push( new THREE.Vector3(30, 30, 25)); 
    allwhiteboardpositions.push( new THREE.Vector3(90, 30, 25));
    allblackboardpositions.push( new THREE.Vector3(150, 30, 25));
    allwhiteboardpositions.push( new THREE.Vector3(210, 30, 25));

    allwhiteboardpositions.push( new THREE.Vector3(-210, -30, 25));
    allblackboardpositions.push( new THREE.Vector3(-150, -30, 25)); 
    allwhiteboardpositions.push( new THREE.Vector3(-90, -30, 25));
    allblackboardpositions.push( new THREE.Vector3(-30, -30, 25));
    allwhiteboardpositions.push( new THREE.Vector3(30, -30, 25)); 
    allblackboardpositions.push( new THREE.Vector3(90, -30, 25)); 
    allwhiteboardpositions.push( new THREE.Vector3(150, -30, 25));
    allblackboardpositions.push( new THREE.Vector3(210, -30, 25));

    
	//array to save all the loaded pieces
    whitepieces=[];
    blackpieces=[];

	//Load the JSON

	loader = new THREE.JSONLoader();
   
	loader.load( "data/piece.json", function( geometry ) {

		//For each initial positionwhites put a white piece on it
   		
		for(var i=0;i<positionwhites.length;i++){

   			//color white to white pieces

   			var material=new THREE.MeshBasicMaterial( { color: 0xe5e5e5 });

   			//create the piece geometry

    		whitepiecesmesh = new THREE.Mesh( geometry, material);
		
			//scale, position and rotate to place the piece over the board
        	whitepiecesmesh.scale.set( 60, 60, 60 );
			whitepiecesmesh.rotation.y += Math.PI/2;
			whitepiecesmesh.rotation.z += Math.PI/2;

			//Position, taking from the positionwhites array

			whitepiecesmesh.position= positionwhites[i];

			//save the piece into the whitepieces array
			whitepieces.push(whitepiecesmesh);

			//add it to the scene
			scene.add(whitepiecesmesh);

		}//for i

		//Black pieces 

		//for each initial positionblack put a black piece on it

		for(var j=0;j<positionblack.length;j++){

			//Black color to black pieces

			var material=new THREE.MeshBasicMaterial( { color: 0x666666 });

   			//create the piece geometry

    		blackpiecesmesh = new THREE.Mesh( geometry, material);
		
			//scale, position and rotate to place the piece over the board
        	blackpiecesmesh.scale.set( 60, 60, 60 );
        	//mesh.setColor(0xFFFFFF);
			blackpiecesmesh.rotation.y += Math.PI/2;
			blackpiecesmesh.rotation.z += Math.PI/2;

			//Position, taking from the positionwhites array

			blackpiecesmesh.position= positionblack[j];

			//console.log(blackpiecesmesh.position);

			//save the piece into the blackpieces array
			blackpieces.push(blackpiecesmesh);


			//add it to the scene
			scene.add(blackpiecesmesh);

		}//for j

		//Button to randomize the pieces in the board
		var buttonRandomize=document.createElement("button");
		buttonRandomize.setAttribute ("id","randomize");
		buttonRandomize.innerText="Randomize";
		hook.append(buttonRandomize);

		buttonRandomize.onclick=function(){

			//randomize the allblackboardpositions array (32 positions)
			shuffle(allblackboardpositions);
			//randomize the allwhiteboardpositions array (32 positions)
			shuffle(allwhiteboardpositions);
			//console.log(allblackboardpositions);

			//take the 12 black pieces from the blackpieces array and change their position to 12 
			//positions taken from the allwhitepositions array
			$.each (blackpieces, function(key, piece){
				//smoothy move the blackpieces from the original initial position
				var tween = new TWEEN.Tween( { x: piece.position.x, y: piece.position.y } )
					//to the target (allwhitepositions[key])
            		.to( { x: allwhiteboardpositions[key].x,y:allwhiteboardpositions[key].y }, 500 )
            		.onUpdate( function () {
            			piece.position.x=this.x;
            			piece.position.y=this.y;
                
				} ).start();

				})//each

			//take the 12 white pieces from the whitepieces array and change their position to 12 
			//positions taken from the allblackpositions array
			$.each (whitepieces, function(key, piece){
				//smoothy move the whitepieces from the original initial position
				var tween = new TWEEN.Tween( { x: piece.position.x, y: piece.position.y } )
					//to the target (allblackpositions[key])
            		.to( { x: allblackboardpositions[key].x,y:allblackboardpositions[key].y }, 500 )
            		.onUpdate( function () {
            			piece.position.x=this.x;
            			piece.position.y=this.y;
                
				} ).start();

				})//each

				
		};//onclick	

	} );//loader


	//function to randomize array elements (Fisher–Yates shuffle algorithm)
	function shuffle(array) {	

    	for (var i = array.length-1; i >0; i--) {
        	var j = Math.floor(Math.random() * (i + 1));
        	var temp = array[i];
        	array[i] = array[j];
        	array[j] = temp;
    	}
    	return array;
	}
	
	//Change color onclick event

	//First, we have to create the button 
	var buttonChangeColor=document.createElement("button");
	buttonChangeColor.setAttribute ("id","changeColor");
	buttonChangeColor.innerText="Change Board Color";
	hook.append(buttonChangeColor);

	buttonChangeColor.onclick=function(){

		//console.log(boardmesh.material);

		boardmesh.material.map=THREE.ImageUtils.loadTexture( 'checkersblue.jpeg');
		boardmesh.material.needsUpdate=true;
		//console.log(boardmesh.material);

	};

	
	function renderLoop() {
	
		renderer.render(scene, camera);
		controls.update();
		window.requestAnimationFrame(renderLoop);
		TWEEN.update();
	}
	
	window.requestAnimationFrame(renderLoop);
}

})(window.mythree = window.mythree || {} , jQuery)
