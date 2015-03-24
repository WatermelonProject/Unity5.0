#pragma strict

var OVRCameraController : Transform;

function Start () {

}

function Update () {
	if (transform.position.y <=-30) {
		Dead();
	}
}

function Dead(){
	OVRCameraController.GetComponent(fadeInOut).levelToLoad = Application.loadedLevelName;
	OVRCameraController.GetComponent(fadeInOut).changeLevelFade = true;
}