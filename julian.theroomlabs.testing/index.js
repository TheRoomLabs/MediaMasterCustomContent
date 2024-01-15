const { CogsConnection, CogsVideoPlayer, CogsAudioPlayer } = COGS;

const cogsConnection = new CogsConnection();
const video = new CogsVideoPlayer(cogsConnection,);


function pressButton(buttonName){
	cogsConnection.sendEvent("ButtonPressed", buttonName);
}

window.onload = function(){
	video.setParentElement(document.getElementById("center"));
}