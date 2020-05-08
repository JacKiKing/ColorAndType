//dropdown visiters
	function plus(b) {
		var a = document.getElementsByClassName("tablo")[b].innerHTML;
		a++;
		if(a == 1){
			document.getElementsByClassName("minus")[b].style.color = 'rgba(31, 32, 65, 0.5)';
			document.getElementsByClassName("minus")[b].style.border = '1px solid rgba(31, 32, 65, 0.5)';
			
			if(b < 2){
				document.getElementsByClassName("button__reset")[0].style.display = 'inline-block';
			}else{
				document.getElementsByClassName("button__reset")[1].style.display = 'inline-block';
			}
		}
		document.getElementsByClassName("tablo")[b].innerHTML= a;
	}

	function minus(b) {
		var a = document.getElementsByClassName("tablo")[b].innerHTML;
		if(a > 0){
			a--;
		}
		if(a == 0){
			document.getElementsByClassName("minus")[b].style.color = 'rgba(31, 32, 65, 0.25)';
			document.getElementsByClassName("minus")[b].style.border = '1px solid rgba(31, 32, 65, 0.25)';
			if(b < 2){
				document.getElementsByClassName("button__reset")[0].style.display = 'none';
			}else{
				document.getElementsByClassName("button__reset")[1].style.display = 'none';
			}

		}
		document.getElementsByClassName("tablo")[b].innerHTML= a;
	}

	function showDropdown_visiters(){
		var item = document.getElementsByClassName('input__list_visiters')[0];
		if (item.style.display == "none"){
			item.style.display = "inline-block";
		}else{
			item.style.display = "none";
		}
	}

	function apply(){
	var num_one = Number(document.getElementsByClassName('tablo')[0].innerHTML);
	var num_two = Number(document.getElementsByClassName('tablo')[1].innerHTML);
	var num_three = Number(document.getElementsByClassName('tablo')[2].innerHTML);
	var name;
	var number = num_one + num_two + num_three;
	if (number == 0){
		name = "гостей"
	}else if(number == 1){
		name = "гость"
	}else{
		name = "гостя"
	}
	document.getElementsByClassName('dropdown__list_visiters')[0].innerHTML = number + " " + name;
}

function clears(){
	document.getElementsByClassName('tablo')[0].innerHTML = "0";
	document.getElementsByClassName('tablo')[1].innerHTML = "0";
	document.getElementsByClassName('tablo')[2].innerHTML = "0";
	document.getElementsByClassName('dropdown__list_visiters')[0].innerHTML = "0";
}


//dropdown visiters 2


function showDropdown_visiters2(){
	var item = document.getElementsByClassName('input__list_visiters')[1];
	if (item.style.display == "none"){
		item.style.display = "inline-block";
	}else{
		item.style.display = "none";
	}
}

function apply2(){
var num_one = Number(document.getElementsByClassName('tablo')[3].innerHTML);
var num_two = Number(document.getElementsByClassName('tablo')[4].innerHTML);
var num_three = Number(document.getElementsByClassName('tablo')[5].innerHTML);
var name;
var number = num_one + num_two + num_three;
if (number == 0){
	name = "гостей"
}else if(number == 1){
	name = "гость"
}else{
	name = "гостя"
}
document.getElementsByClassName('dropdown__list_visiters')[1].innerHTML = number + " " + name;

}

function clears2(){
	document.getElementsByClassName('tablo')[3].innerHTML = "0";
	document.getElementsByClassName('tablo')[4].innerHTML = "0";
	document.getElementsByClassName('tablo')[5].innerHTML = "0";
	document.getElementsByClassName('dropdown__list_visiters')[1].innerHTML = "0";
}
