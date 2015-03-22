#pragma strict

private var finished : boolean = false;
public var resetKey : KeyCode = KeyCode.Return; 
public var finishedText : Canvas;
public var finishedTextR : Canvas;

function Start () {
	finishedText.enabled = false;
	finishedTextR.enabled = false;
	Time.timeScale = 1.0;
}

function Update () {
	if(Input.GetKeyDown(resetKey) && finished) {
		Application.LoadLevel(Application.loadedLevel);;
	}
}

function OnControllerColliderHit(hit: ControllerColliderHit) {
	if(hit.collider.gameObject.tag=="target") {
		finished = true;
		Destroy(hit.collider.gameObject);
		finishedText.enabled = true;
		finishedTextR.enabled = true;
		Time.timeScale = 0.0;
	}
}