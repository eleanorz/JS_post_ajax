var a = ['meep', 'moop', 'beep']
		var b = [11, 22, 33]

		function thru_array(array)
		{
			var l = array.length;
			for (var i = 0; i < l; i++)
			{
				console.log(array[i]);
				console.log(typeof(array[i]));
			}

		}


		function push_array(array, newbie)
		{
			array.push(newbie);
		}

		push_array(a, 'flowers');

		a.push(b);

		thru_array(a);

		function sumfivehundred()
		{
			var s = 0;
			for (var i = 500; i >= 0; i--) {
				s += i;
			};
			alert(s + ' is the total of one to 500');
		}

		function sumnum(x)
		{
			var s = 0; //total sum
			var t1 = new Date();
			for (var i = x; i >= 0; i--)
			{
				s += i;
			}

			var t2 = new Date() - t1;
			alert(s + ' is the total of 1 to '+ x + ' and that took ' + t2 + ' millisecs to calculate');


		}

		sumnum(1000000);