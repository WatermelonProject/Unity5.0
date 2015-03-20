#pragma strict

//This script makes sure the canvas knows what camera is active

var camera1stPerson : GameObject;
var camera3rdPerson : GameObject;

var indicator : boolean;

function Start () {
	
	indicator = cameraManager.is1stPerson;
	
	if (cameraManager.is1stPerson == true) {
		GetComponent(Canvas).worldCamera = camera1stPerson.GetComponent.<Camera>();
	} else {
		GetComponent(Canvas).worldCamera = camera3rdPerson.GetComponent.<Camera>();
	}
	
}

function Update () {

	if (indicator != cameraManager.is1stPerson) {
		
		//This checks if the game has changed camera modes. If so then set the cameras accordingly.
		//If it has not changed theres no reason to set it over and over every frame to the same camera.
		
		if (cameraManager.is1stPerson == true) {
			GetComponent(Canvas).worldCamera = camera1stPerson.GetComponent.<Camera>();
		} else {
			GetComponent(Canvas).worldCamera = camera3rdPerson.GetComponent.<Camera>();
		}
		
		indicator = cameraManager.is1stPerson;
		
	}
}