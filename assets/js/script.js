/* script to handle the lights off feature, trying to see if it'll be necessary to detect if its an iframe, or directly a video
 * Iframes are used when the video is from stuff like youtube, etc.
 * @author Precious Omonzejele <omonze@peepsipi.com>
 */
var $ = jQuery;
var bzpshadowId = "bpz-pk-shadow";
var bzpvidClass = '';//for the class
var bzpvidzindex = '';//store the z-index
//set the height before handle
$(document).ready(function(){
    $("#"+bzpshadowId).css("height", $(document).height()).hide();
	$('body').prepend('<div id="'+bzpshadowId+'"></div>')
});

/**
 * bring the light effect and do other stuff
 *@param int elementClass the video class
 */
function bzppkturnOffTheLights(elementClass){
	alert("lights are off");
	var _thevid = $("."+elementClass);
	//set the z-index
	_thevid.css('z-index','1999');
	//show the div shadow
	$('#'+bzpshadowId).fadeIn();	
	//check if the shadow is already there
	if($("#"+bzpshadowId).hasClass('is-showing')){//the lights are already off
		//now check if the btn clicked has a class vjs-paused
	}

}

/**
 * turn of the light effect and do other stuff
 *@param int elementClass the video class
 */
function bzppkturnOnTheLights(elementClass){
	alert("lights are on");
	var _thevid = $("."+elementClass);
	//set the z-index
		_thevid.removeAttr('z-index',bzpvidzindex);	
	//show the div shadow
	$('#'+bzpshadowId).fadeOut();	
}
//the button event ish
function bzppkbtnEv(){
	var _this = "button.vjs-button.vjs-control";
   //set an id attr for it
   var theRand = Math.floor((Math.random() * 400) + 1);//gen random number for id
   var oldId = $(_this).attr('id');
   if(oldId == "")
		var theId = $(_this).attr('id','bpz-btn-'+theRand);
	else
		var theId = oldId;
	
  bzpvidClass = "bzp-pk-vid-"+theId;
  //check if video tag exists, if not, it's an iframe, then we check the video inside the iframe
  //get the vid z-index
  	bzpvidzindex = $(_this).closest(".video-js").css('z-index');
	//create a unique css class
	bzpvidClass = $(_this).closest(".video-js").addClass(bzpvidClass);
}

//for the big play btn
$('.vjs-big-play-button').click(function(){
	bzppkbtnEv();
});
//for the little play button
$("button.vjs-button.vjs-control").click(function(){
	bzppkbtnEv();
});

//now the pure js
var bzpvidItself = document.getElementsByClassName(bzpvidClass);
bzpvidItself.onplay = bzppkturnOffTheLights(bzpvidClass);
bzpvidItself.onpause = bzppkturnOnTheLights(bzpvidClass);
bzpvidItself.onended = bzppkturnOnTheLights(bzpvidClass);
