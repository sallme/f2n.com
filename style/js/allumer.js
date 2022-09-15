<!--Debut fonction pour allumer son-->

function PlayIt(){ 
document.getElementById("music1").innerHTML='<object id="mediaPlayer" width="270" height="45" ' 
+'classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" ' 
+'codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701" ' 
+'standby="Loading Microsoft Windows Media Player components..." type="application/x-oleobject">' 
+'<param name="fileName" value="'+document.getElementById('cancion').value+'">' 
+'<param name="animationatStart" value="true">' 
+'<param name="transparentatStart" value="true">' 
+'<param name="autoStart" value="true">' 
+'<param name="showControls" value="true">' 
+'<param name="loop" value="false">' 
+'<embed type="application/x-mplayer2" ' 
+'pluginspage="http://microsoft.com/windows/mediaplayer/en/download/" ' 
+'bgcolor= "101010" showcontrols="false" width="270" height="45" ' 
+'src="'+document.getElementById('cancion').value+'" autostart="true" designtimesp="5311" loop="true">' 
+'</embed>' 
+'</object>' 
} 
<!--Fin fonction pour allumer son--> 

<!--Fonction de gestion du Showcase-->

$(document).ready(function()
{
	$("#showcase").awShowcase(
	{
		content_width:			620,
		content_height:			400,
		auto:					true,
		interval:				3000,
		continuous:				true,
		arrows:					true,
		buttons:				true,
		btn_numbers:			true,
		keybord_keys:			true,
		mousetrace:				false, /* Trace x and y coordinates for the mouse */
		pauseonover:			true,
		stoponclick:			false,
		transition:				'fade', /* hslide/vslide/fade */
		transition_delay:		0,
		transition_speed:		500,
		show_caption:			'onload' /* onload/onhover/show */
	});
});

<!--Fin Fonction de gestion du Showcase-->
