#pragma strict

private var finished : boolean = false;
public var resetKey : KeyCode = KeyCode.Return; 
public var finishedText : Canvas;
public var finishedTextR : Canvas;

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

function OnCollisionEnter (collision : Collision) {

	if (collision.gameObject.tag=="player") {
		
		if (endOfGame) {
			
			finished = true;
			finishedText.enabled = true;
			finishedTextR.enabled = true;
			Time.timeScale = 0.0;
			
		} else {
			
			OVRCameraController.GetComponent(fadeInOut).levelToLoad = nextLevelName;
			OVRCameraController.GetComponent(fadeInOut).changeLevelFade = true;
			
		}
	}

}