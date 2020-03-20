/**

*/
$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "http://ckid74.tmweb.ru/component/rseventspro/rss.php?rss",
		dataType: "xml",
		success: xmlParser
	});
})
function xmlParser(xml) {
	$(".nav-path h1").append('<div class="menu_afisha"><table><tbody><tr><td><div class="cell exhibitions"><a href="/htmlpages/Show/afisha/Vystavki">Выставки</a></div></td><td><div class="cell concerts"><a href="/htmlpages/Show/afisha/Koncerty">Концерты</a></div></td><td><div class="cell activity"><a href="/htmlpages/Show/afisha/Meropriyatiya">Мероприятия</a></div></td><td><div class="cell performances"><a href="/htmlpages/Show/afisha/Spektakli">Спектакли</a></div></td><td><div class="cell movie"><a href="/htmlpages/Show/afisha/Kino">Кино</a></div></td></tr></tbody></table></div>');

	$(xml).find("event").each(function (index) {
		if($(this).find("categoryID").text() == category){
			$(".main").append('<div class="event" data-tooltip="'+index+'"><div class="image" style="background:url(\'http://ckid74.tmweb.ru' + $(this).find("image").text() + '\')no-repeat;"><!--<img src=\"http://ckid74.tmweb.ru' + $(this).find("image").text() + '\" >--></div><div class="shortDesc">'+ $(this).find("shortDesc").text() + '</div><div class="title">' + $(this).find("title").text() + '</div><span class="date">' + $(this).find("startDate").text() + '</span><span class="time">' + $(this).find("startTime").text() + '</span><div class="location">' + $(this).find("location").text() + '</div><div class="categoryTitle">' + $(this).find("categoryTitle").text() + '</div></div><div class="tooltip" id="tip-'+ index +'">'+ index +'</div>');
		}
	});
}

/* ****************** POPup tooltip ************************ */
$(document).ready(function(){
	$('.event').mousemove(function(e){
		var X = e.pageX;
		var Y = e.pageY;
		var top = Y  + 10 + 'px';
		var left = X  + 10 + 'px';
		var id = $(this).data('tooltip');

		$('#tip-'+id).css({
		    display:"block",
		    top: top,
		    left: left
		});
	});
	$('.event').mouseout (function(){
		var id = $(this).data('tooltip');
		$('#tip-'+id).css({
			display:"none"
		});
	});
})
/* ****************** / POPup tooltip ************************ */
/*
$(".mainCnt").append('<div class="row pop-up"><div class="box small-6 large-centered"><a class="close-button" href="#">✖</a><h3>Добро пожаловать на сайт</h3><p>Здесь мы пишем краткое описание</p><p>Ну и конечно же полный текст окна.</p><a class="button" href="#">Перейти сюда</a></div></div>')
*/
/*
<div class="row pop-up">
	<div class="box small-6 large-centered">
		<a class="close-button" href="#">✖</a>
		<h3>
			Добро пожаловать на сайт</h3>
		<p>
			Здесь мы пишем краткое описание</p>
		<p>
			Ну и конечно же полный текст окна.</p>
		<a class="button" href="#">Перейти сюда</a></div>
</div>
*/


/* END */

/* START POPup */

/* POPup */
$(function() {
	$('.pop-up').hide();
	//$('.pop-up').fadeIn(1000);
	$('.close-button').click(function (e) {
		$('.pop-up').fadeOut(700);
		$('#overlay').removeClass('blur-in');
		$('#overlay').addClass('blur-out');
		e.stopPropagation();
	});
});
/* /POPup */

function roughSizeOfObject( object ) {
    var objectList = [];
    var recurse = function( value ) {
        var bytes = 0;

        if ( typeof value === 'boolean' ) {
            bytes = 4;
        } else if ( typeof value === 'string' ) {
            bytes = value.length * 2;
        } else if ( typeof value === 'number' ) {
            bytes = 8;
        } else if (typeof value === 'object'
                 && objectList.indexOf( value ) === -1) {
            objectList[ objectList.length ] = value;
            for( i in value ) {
                bytes+= 8; // assumed existence overhead
                bytes+= recurse( value[i] )
            }
        }
        return bytes;
    }
    return recurse( object );
}
