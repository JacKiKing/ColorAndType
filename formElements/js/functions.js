	function plus_0() { 
		var a = document.getElementById("quantityBadroom_0").innerHTML;
		a++;
		document.getElementById("quantityBadroom_0").innerHTML= a;
	}

	function plus_1() { 
		var b = document.getElementById("quantityBadroom_1").innerHTML;
		b++;
		document.getElementById("quantityBadroom_1").innerHTML= b;
	}

	function plus_2() { 
		var c = document.getElementById("quantityBadroom_2").innerHTML;
		c++;
		document.getElementById("quantityBadroom_2").innerHTML= c;
	}    

	function minus_0() { 
		var a = document.getElementById("quantityBadroom_0").innerHTML;
		if(a > 0){
			a--;
		}
	}
		document.getElementById("quantityBadroom_0").innerHTML= a;
	}

	function minus_1() { 
		var b = document.getElementById("quantityBadroom_1").innerHTML;
		b--;
		document.getElementById("quantityBadroom_1").innerHTML= b;
	}

	function minus_2() { 
		var c = document.getElementById("quantityBadroom_2").innerHTML;
		c--;
		document.getElementById("quantityBadroom_2").innerHTML= c;
	}