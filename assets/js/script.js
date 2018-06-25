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
function bpzPkTurnOffTheLights(element_id){
	$(element)
}
