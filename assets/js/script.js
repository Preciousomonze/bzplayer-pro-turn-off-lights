/** script to handle the lights off feature,
 * works for video embed in a div(or any element) having "video-js" as one of it's class name, 
 * trying to see if it'll be necessary to detect if its an iframe, or directly a video
 * Iframes are used when the video is from stuff like youtube, etc.
 * For now, its only working for the native links, if you get videos from youtube src,vimeo,etc, it loads into an iframe, so the effect wont working
 * still trying to sort that out, but quite busy. :0
 * @author Precious Omonzejele <omonze@peepsipi.com>
 */
var $ = jQuery;
var bzpshadowId = "bzp-pk-shadow";
var bzpvidClass = '';//for the class
var bzpvidzindex = '';//store the z-index
//set the height before handle
$(document).ready(function(){
	$('body').prepend('<div id="'+bzpshadowId+'"></div>');
    $("#"+bzpshadowId).css("height", $(document).height()).hide();

/**
 * bring the light effect and do other stuff
 *@param string _element the video element
 */
function bzppkturnOffTheLights(_element){
	var _thevid = $(_element);
	//get the id attr
	var _awonId = _thevid.closest('.video-js').attr('id');
	//set the z-index
	_thevid.closest('#'+_awonId).css('z-index','2001');
	//show the div shadow
	$('#'+bzpshadowId).fadeIn();	
}

/**
 * turn of the light effect and do other stuff
 *@param string _element the video element
 */
function bzppkturnOnTheLights(_element){
	var _thevid = $(_element);
	//get the id attr
	var _awonId = _thevid.closest('.video-js').attr('id');
	//fade the div shadow
	$('#'+bzpshadowId).fadeOut();	
	//set the z-index
		_thevid.closest('#'+_awonId).css('z-index',bzpvidzindex);	
}

//iframe exec
/*
function bzpiframeExec(){
	$('.video-js iframe').load(function(){
		alert("loaded");
		//set an id attr for it
		var theRand = Math.floor((Math.random() * 400) + 1);//gen random number for id
		bzpvidClass = "bzp-pk-vid-"+theRand;
		$(this).contains('video').addClass(bzpvidClass);
		console.log($('.'+bzpvidClass));
	});
}*/
//the default for the normal videos
function bzpnativeVidExec(){
	//gen class name
	var theRand = Math.floor((Math.random() * 400) + 1);//gen random number for id
	bzpvidClass = "bzp-pk-vid-"+theRand;
	//get the z-index
	bzpvidzindex = $('.video-js').css('z-index');
	$('.video-js video').addClass(bzpvidClass);
	//for the video effects
	var vidItself = $('.'+bzpvidClass);
	vidItself.on('playing',function(){
		bzppkturnOffTheLights(this);
	});	
	vidItself.on('pause',function(){
		bzppkturnOnTheLights(this);
	});
	vidItself.on('ended',function(){
		bzppkturnOnTheLights(this);
	});
}

if($('.video-js').hasClass('vjs-youtube')){//for youtube, will have to handle differently
	alert('Sorry, the effect for youtube embeded videos isn\'t supported yet :( ');
	//bzpiframeExec(); still coming soon :-0
}
else{//normal way
	bzpnativeVidExec();
}
});
