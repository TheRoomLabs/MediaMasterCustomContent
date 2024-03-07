const { CogsConnection, CogsVideoPlayer, CogsAudioPlayer } = COGS;

const cogsConnection = new CogsConnection();


function pressButton(buttonName){
	cogsConnection.sendEvent("ButtonPressed", buttonName);
}
