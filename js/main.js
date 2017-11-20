$(document).ready(function () {
	//	changeColor();
	addClassToNav();
	znajdzP();
	wypiszLi();
	kilkaZdarzen();
	fadeDiv();
});

$(window).scroll(function () {
	addClassToNav();
});

//$= JQuery

function changeColor() {
	//	var zmienna = document.getElementById('first');
	$("#first").css('background', 'red').hide('slow').show(3000);
}
var first = $('#first');
console.log(first);

var paragrafy = $('.par');
console.log(paragrafy);

var wszystkieParagrafy = $('#first p');

//selektor elementu
//console.log(paragrafy.length);
//console.log(wszystkieParagrafy.length);

//metoda text()
//wywolanie metody text() bez argumentow powoduje wyciagniecie zawartosci textowej z selektora
//wywolanie metody text() bez argumentem (jako argument podajemy string) powoduje ustawienie zawartosci tekstowej w selektorze
//console.log(wszystkieParagrafy.text());
wszystkieParagrafy.text('test');

//metoda html
//przy get (bez parametru) - zwraca string z pierwszego dopasowania
//przy get (z parametrem) - dotyczy wszystkich trafien danego selektora (mozna wstrzykiwac html)
console.log(wszystkieParagrafy.html());
wszystkieParagrafy.html('<h1>Tytul</h1>');

//metoda append()
$('.append, .before').append('<span class="append_inner">zostalem dodany</span>');
//metoda prepend
$('.prepend').prepend('<span class="prepend_inner">zostalem dodany</span>');
//metoda before
$('.before').before('<span class="before_outer">zostalem dodany</span>');
//metoda after
$('.after').after('<span class="after_outer">zostalem dodany</span>');

//metoda remove - usuwa kontener wraz z zawartoscia
$('.before').remove();

//metoda empty - usuwa zawartosc kontenera
$('.prepend').empty();

//metoda CSS

console.log($('#css_method p').css('color'));
console.log($('#css_method p').css('font-size'));

//jezeli podajemy jedna wlasciwosc z wartoscia, wyatarczy odzielic je przecinkiem np.  $('#css_method p').css(wlasciwosc, wartosc)
$('#css_method p').css({
	'background-color': 'yellow',
	'color': 'grey',
	'font-size': '25px'
});

//metoda val() - do pol formularza

console.log($('#formularz input:nth-child(3)').val());

var inputy = $('#formularz input');

//przy val bez parametrow pobieramy z jednego trafienia
//przy val('parametr')ustawiamy przy wszystkich trafieniach
$('#formularz input').val('jednolity tekst');

//metody odajace i usuwajace klasy


function addClassToNav() {
	var actualPos = $(document).scrollTop();
	var navHeight = $('#main-nav').height();

	if (actualPos > navHeight) {
		$('#main-nav').addClass('after-fix');
	} else {
		$('#main-nav').removeClass('after-fix');
	}
}

function znajdzP() {
	var paragrafy = $('#find').find('p');

	paragrafy.each(function () {
		$(this).css('background-color', 'red');
	})
}

function wypiszLi() {
	$('#log').click(function () {
		$('#click').find('li').each(function () {
			console.log($(this).text());
		})
	})
}

function kilkaZdarzen() {
	$('#kilka_zdarzen a').on({
		'mouseover': function() {
			$(this).css('font-size', '25px');
		},
		'mouseout': function() {
			$(this).css('font-size', '12px');
		},
		'click': function(e) {
			e.preventDefault();
			$(this).css('color', 'red');
		}
	});
}

function fadeDiv() {
	$('#show').click(function() {
//		$('#metody_fade > div').fadeIn('slow');
		$('#metody_fade > div').slideDown('slow');
	});
	
	$('#hide').click(function() {
//		$('#metody_fade > div').fadeOut('slow');
		$('#metody_fade > div').slideUp('slow');
	});
}









