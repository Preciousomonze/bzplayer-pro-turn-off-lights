/* script to handle the lights off feature, trying to see if it'll be necessary to detect if its an iframe, or directly a video
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
 *@param string elementClass the video class
 */
function bzppkturnOffTheLights(elementClass){
	alert("lights are off");
	var _thevid = $("."+elementClass);
	//set the z-index
	_thevid.closest('.video-js').css('z-index','1999');
	//show the div shadow
	$('#'+bzpshadowId).fadeIn();	
}

/**
 * turn of the light effect and do other stuff
 *@param string elementClass the video class
 */
function bzppkturnOnTheLights(elementClass){
	alert("lights are on");
	var _thevid = $("."+elementClass);
	//set the z-index
		_thevid.closest('.video-js').removeAttr('z-index',bzpvidzindex);	
	//show the div shadow
	$('#'+bzpshadowId).fadeOut();	
}

//iframe exec
function bzpiframeExec(){
	$('.video-js iframe').load(function(){
		alert("loaded");
		//set an id attr for it
		var theRand = Math.floor((Math.random() * 400) + 1);//gen random number for id
		bzpvidClass = "bzp-pk-vid-"+theRand;
  
		$(this).contains('video').addClass(bzpvidClass);
		console.log($('.'+bzpvidClass));
	});
}
//the default for the normal videos
function bzpnativeVidExec(){
	//gen class name
	var theRand = Math.floor((Math.random() * 400) + 1);//gen random number for id
	bzpvidClass = "bzp-pk-vid-"+theRand;
	$('.video-js video').addClass(bzpvidClass);
	//for the video effects
	var vidItself = $('.'+bzpvidClass);
	vidItself.on('playing',function(){
		bzppkturnOffTheLights(bzpvidClass);
	});	
	vidItself.on('pause',function(){
		bzppkturnOnTheLights(bzpvidClass);
	});
	vidItself.on('ended',function(){
		bzppkturnOnTheLights(bzpvidClass);
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
