<html>
<head>
	<title>JS Typing</title>
	<style>
		body 
		{
			background-color:#142C54;
			font-family: monospace;
			color:#57C40F;
			font-size:50px;
		}
	</style>
	<script>
	 	function random_num(x)
	 	{
	 		var n = Math.floor((Math.random()*x) + 1); //generates a random number between 1 and x
	 		return n;
	 	}

	</script>
</head>
<body>
	<?php 

	 ?>

	<div id='stage'>
		<svg width='100' height='100'>
	  		<circle cx = '50' cy='50' r='40' stroke = 'green' fill = 'yellow' />
		</svg>
	</div>

	<script>
		el = document.getElementById('stage');

		function drawCircle()
		{
			var cx = random_num(50);
			var cy = random_num(50);
			var r = random_num(40);
			var thing = 
				"<svg width='100' height='100'>" +
	  				"<circle cx = '"+cx+"' cy='50' r='40' stroke = 'green' fill = 'pink' />" +
				"</svg>";

				// "<div id='test'>hi</div>";
				
			el.innerHTML += thing;
		}

		// document.onclick = function(e) {console.log(e); };


		//e probably represents a mouse event?
		//MouseEvent {dataTransfer: null, toElement: body, fromElement: null, y: 41, x: 345…}

		document.onclick = function()
		{
			drawCircle();
		}

	</script>

</body>

</html>