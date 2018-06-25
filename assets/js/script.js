/* script to handle the lights off feature 
 * @author Precious Omonzejele <omonze@peepsipi.com>
 */
var $ = jQuery;
var bpzShadowId = "bpz-pk-shadow";

//set the height before handle
$(document).ready(function(){
    $("#"+bpzShadowId).css("height", $(document).height()).hide();
	$('body').prepend('<div id="'+bpzShadowId+'"></div>')
});

/**
 * bring the light effect and do other stuff
 *@param int ticketId
 *@param string type, if its form type, does the necessary, else, bla, i'm tired jare.
 */
function bpzPkTurnOffTheLights(elementId){
	var _btnId = $("#"+elementId);
	//check if the shadow is already there
	if($("#"+bpzShadowId).hasClass('is-showing')){//the lights are already off
		//now check if the btn clicked has a class vjs-paused
	}
	else{//do the process
		//set the z-index of the video player
		_btnId.closest("video").css('z-index','1999');
		$("#"+bpzShadowId).show();
	}
}

$("button.vjs-button.vjs-control").click(function(){
   //set an id attr for it
   var theRand = Math.floor((Math.random() * 400) + 1);//gen random number for id
  var theId = $(this).attr('id','bpz-btn-'+theRand);
	bpzPkTurnOffTheLights(theId); 
});
