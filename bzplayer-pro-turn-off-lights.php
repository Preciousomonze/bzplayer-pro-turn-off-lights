<?php
/**
 * @package bzplayer-pro-turn-off-lights
 */
/*
Plugin Name: bzplayer-pro Turn Off the lights
Plugin URI: https://github.com/preyous
Description: This plugin gives the "Turn off the lights" feature when your bzplayer-pro videos are set to play. Very light and should be compatible with recent Wordpress
Version: 1.0.0
Author: Precious Omonzejele
Author URI: https://omonze.peepsipi.com/
License: MIT
Text Domain: bzplayer-pro-turn-off-lights
*/

// Make sure we don't do something useful if called directly
if ( !function_exists( 'add_action' ) ) {
	echo 'Yo!  I\'m just a plugin, not much I can do when called directly. I love being moved along with the wp family :)';
	exit;
}
define( 'MAUV_PK_PLUGIN_DIR',  plugin_dir_path( __FILE__ ) );
//version
$bzp_pk_version = '1.0';
//start enqeueing
if(!function_exists('bzp_pk_js_enqueue')){
	function mauv_pk_js_script() {
		//p_enqueue_script('NameMySccript','path/to/MyScript','dependencies_MyScript', 'VersionMyScript', 'InfooterTrueorFalse');	
		//local script
		wp_register_script('bzp_pk_js-buy-ticket-trigger',plugins_url( '/assets/js/script.js', __FILE__ ),array('jquery'),$bzp_pk_version,true);
		wp_enqueue_script( 'bzp_pk_js-buy-ticket-trigger');
	}
}
//just incase we encounter a wretched theme that doesn't have wp_footer(), we should hook up with print scripts
add_action( 'wp_print_scripts', 'bzp_pk_js_script' );

//adding css
if(!function_exists('bzp_pk_css_enqueue')){
function mauv_pk_css_enqueue() {        
	wp_enqueue_style( 'bzp_pk_css-style',plugins_url( '/assets/css/style.css', __FILE__ ));
    }
}
add_action( 'wp_enqueue_scripts', 'bpz_pk_css_enqueue' );