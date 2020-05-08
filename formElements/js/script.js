// calendar date-date
(function ($) {
			    $.fn.daterange = function () {
			        // опции
			        var opts = $.extend({
			        		"monthNames": ['Января','Февраля','Марта','Апреля','Майя','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'],
			            "monthNamesShort": ['Янв','Фев','Мар','Апр','Май','Июн',
			                    'Июл','Авг','Сен','Окт','Ноя','Дек'],
			            "dayNames": ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
									"dayNamesShort": ['вск','пнд','втр','срд','чтв','птн','сбт'],
			            "dayNamesMin": ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			            "dateFormat": "d M",
			            "changeMonth": false,
			            "changeYear": false,
			            "numberOfMonths": 2,
			            "rangeSeparator": "-"
			        }, arguments[0] || {}, {
			            // обработчики событий datepicker
			            // закрытие
			            "onClose": function (dateText, inst) {
			                if ($.isFunction(opts.callback)) {
			                    opts.callback.apply(this, arguments);
			                }
			            },
			            // выбор даты
			            "onSelect": function (dateText, inst) {
			                var textStart;
			                if (!inst.rangeStart) {
			                    inst.inline = true;
			                    inst.rangeStart = dateText;
			                } else {
			                    inst.inline = false;
			                    textStart = inst.rangeStart;
			                    if (textStart !== dateText) {
			                        $(this).val(textStart + " " + opts.rangeSeparator + " " + dateText);
			                        inst.rangeStart = null;
			                    }
			                }
			            }
			        });

			        return this.each(function () {
			            var input = $(this);
			            if (input.is("input")) {
			                input.datepicker(opts);
			            }
			        });
			    };

			}(jQuery));

			$("#d").daterange({
			    callback: function (range) { 
			    }
			});



	//Button dropdown plus, sub

	function plus_0() { 
		var a = document.getElementById("quantityBadroom_0").innerHTML;
		a++;
		document.getElementById("quantityBadroom_0").innerHTML= a;
		if(a == 1){
				document.getElementById("minus_0").style.color = 'rgba(31, 32, 65, 0.5)';
				document.getElementById("minus_0").style.border = '1px solid rgba(31, 32, 65, 0.5)';
			}
		 bedroom(a);
		 
	}

	function plus_1() { 
		var b = document.getElementById("quantityBadroom_1").innerHTML;
		b++;
		document.getElementById("quantityBadroom_1").innerHTML= b;
		if(b == 1){
			document.getElementById("minus_1").style.color = 'rgba(31, 32, 65, 0.5)';
			document.getElementById("minus_1").style.border = '1px solid rgba(31, 32, 65, 0.5)';
		}
		bed(b);
	}

	function plus_2() { 
		var c = document.getElementById("quantityBadroom_2").innerHTML;
		c++;
		document.getElementById("quantityBadroom_2").innerHTML= c;
		if(c == 1){
			document.getElementById("minus_2").style.color = 'rgba(31, 32, 65, 0.5)';
			document.getElementById("minus_2").style.border = '1px solid rgba(31, 32, 65, 0.5)';
		}	
		document.getElementById('costil_3').innerHTML= c + " ВК";
	}    

	function minus_0() { 
		var a = document.getElementById("quantityBadroom_0").innerHTML;
		if(a == 1) {
			document.getElementById("minus_0").style.color = 'rgba(31, 32, 65, 0.25)';
			document.getElementById("minus_0").style.border = '1px solid rgba(31, 32, 65, 0.25)';
		}
		if(a > 0){
			a--;
		}
		document.getElementById("quantityBadroom_0").innerHTML= a;
		bedroom(a);
	}

	function minus_1() { 
		var b = document.getElementById("quantityBadroom_1").innerHTML;
		if(b == 1) {
			document.getElementById("minus_1").style.color = 'rgba(31, 32, 65, 0.25)';
			document.getElementById("minus_1").style.border = '1px solid rgba(31, 32, 65, 0.25)';
		}		
		if(b > 0){
			b--;
		}
		document.getElementById("quantityBadroom_1").innerHTML= b;
		bed(b);
	}

	function minus_2() { 
		var c = document.getElementById("quantityBadroom_2").innerHTML;
		if(c == 1) {
			document.getElementById("minus_2").style.color = 'rgba(31, 32, 65, 0.25)';
			document.getElementById("minus_2").style.border = '1px solid rgba(31, 32, 65, 0.25)';
		}		
		if(c > 0){
			c--;
		}
		document.getElementById("quantityBadroom_2").innerHTML= c;
		document.getElementById('costil_3').innerHTML= c + " ВК";
		if(c == 0 || c < 0) { document.getElementById('costil_3').innerHTML = "" }

	}

//dropdown visiters
	function plus(b) {
		var a = document.getElementsByClassName("tablo")[b].innerHTML;
		a++;
		if(a == 1){
			document.getElementsByClassName("minus")[b].style.color = 'rgba(31, 32, 65, 0.5)';
			document.getElementsByClassName("minus")[b].style.border = '1px solid rgba(31, 32, 65, 0.5)';
			document.getElementsByClassName("button__reset")[0].style.display = 'inline-block';
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
			document.getElementsByClassName("button__reset")[0].style.display = 'none';
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

// other

	function showDropdown(){
		var item = document.getElementsByClassName('input__list_dropdown')[0];
		if (item.style.display == "none"){
			item.style.display = "inline-block";
		}else{
			item.style.display = "none";
		}
	}

	function bedroom(a){
		var a_text;
		if ( a < 0){ a_text = ""}
		switch(a){
			default: 
			case 0:
				a = "";
				a_text = a + " ";
				break;
			case 1:
				a_text = a + " спальня,";
				break;
			case 2:
			case 3:
			case 4:
				a_text = a + " спальни,";
				break;
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
				a_text =a + " спален,";
				break
			case 10:
				a_text = "нет комнат";

		}
		
		document.getElementById('costil_1').innerHTML= a_text;
	}

	function bed(a){
		var b_text;
		switch(a){
			case undefined:
			default: 
			case 0:
				a = "";
				b_text = a + " ";
				break;
			case 1:
				b_text = a + " кровать,";
				break;
			case 2:
			case 3:
			case 4:
				b_text = a +" кровати,";
				break;
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
				b_text = a + " кроватей,";
				break;
		}

			document.getElementById('costil_2').innerHTML= b_text;
	}

function apply(){
	var num_one = Number(document.getElementsByClassName('tablo')[0].innerHTML);
	var num_two = Number(document.getElementsByClassName('tablo')[1].innerHTML);
	var num_three = Number(document.getElementsByClassName('tablo')[2].innerHTML);
	document.getElementsByClassName('dropdown__list_visiters')[0].innerHTML = num_one + num_two + num_three;
}

function clears(){
	document.getElementsByClassName('tablo')[0].innerHTML = "0";
	document.getElementsByClassName('tablo')[1].innerHTML = "0";
	document.getElementsByClassName('tablo')[2].innerHTML = "0";
	document.getElementsByClassName('dropdown__list_visiters')[0].innerHTML = "0";
}

function show_Services(){
	var show = document.getElementsByClassName('services__title-container');
	var elem = document.getElementsByClassName('services__title-container')[0].style.display;
		if (elem == "inline-block"){
			show[0].style.display = "none";
			document.getElementsByClassName('service__title-img')[0].style.transform = "rotate(0deg)";
		}else{
			show[0].style.display = "inline-block";
			document.getElementsByClassName('service__title-img')[0].style.transform = "rotate(180deg)";

		}
}


 // calendaar date - date

//mask date
			$("#date").mask("99.99", {placeholder: "дд.мм" });


// like


function like(){
	var show = document.getElementsByClassName('likeButton__button-img_active')[0];
	var elem = document.getElementsByClassName('likeButton__button-img_active')[0].style.display;
		if (elem == "inline-block"){
			show.style.display = "none";
			document.getElementsByClassName('likeButton__button-img')[0].style.display = "inline-block";
		}else{
			show.style.display = "inline-block";
			document.getElementsByClassName('likeButton__button-img')[0].style.display = "none";

		}
}

// rating button

var logID = 'log',
  log = $('<div id="'+logID+'"></div>');
$('body').append(log);
  $('[type*="radio"]').change(function () {
    var me = $(this);
  });


// paginator


function prev(){


	if (document.getElementsByClassName('1')[0].style.color =="#fff"){
			document.getElementsByClassName('prev')[0].style.display = "none";
		}else{
			document.getElementsByClassName('prev')[0].style.display = "inline-block";
		}
}
