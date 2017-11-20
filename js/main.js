$(document).ready(function() {
	changeColor();
})

//$= JQuery

function changeColor() {
//	var zmienna = document.getElementById('first');
	$("#first").css('background', 'red').hide('slow').show(3000);
}
var first = $('#first');
console.log(first);

var paragrafy = $('.par');
console.log(paragrafy);

var wszystkieParagrafy = $('p');

//selektor elementu
console.log(paragrafy.length);
console.log(wszystkieParagrafy.length);


