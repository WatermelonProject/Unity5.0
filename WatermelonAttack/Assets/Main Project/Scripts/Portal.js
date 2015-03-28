#pragma strict

private var finished : boolean = false;
public var resetKey : KeyCode = KeyCode.Return;

var OVRCameraController : Transform;

var nextLevelName : String;

var endOfGame : boolean;

function Start () {
//	finishedText.enabled = false;
//	finishedTextR.enabled = false;
	Time.timeScale = 1.0;
}

function Update () {
	if(Input.GetKeyDown(resetKey) && finished) {
		Application.LoadLevel(Application.loadedLevel);
	}
}

function OnTriggerEnter (other : Collider) {

	if (other.gameObject.tag=="player") {
		
		if (endOfGame) {
			
			OVRCameraController.GetComponent(fadeInOut).levelToLoad = "Win";
			OVRCameraController.GetComponent(fadeInOut).changeLevelFade = true;
			
		} else {
			
			OVRCameraController.GetComponent(fadeInOut).levelToLoad = nextLevelName;
			OVRCameraController.GetComponent(fadeInOut).changeLevelFade = true;
			
		}
	}

}