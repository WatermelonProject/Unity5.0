#pragma strict

var target : Transform;

var distanceFromTarget : float;
var distanceFromGround : float;

static var is1stPerson : boolean;

var btnChangeCameraMode : KeyCode;
var btnChangeCameraMode2 : KeyCode;

var ready : boolean;

function Start () {
	ready = true;
}

function Update () {
	
	if (Input.GetKeyDown(btnChangeCameraMode) || Input.GetKeyDown(btnChangeCameraMode2)){
		is1stPerson = !is1stPerson;
		transform.GetComponent(fadeInOut).fade = true;
		ready = false;
		FadeBack();
		
	}
	
	if (is1stPerson == true) { 
		
		if (ready) {
			
			transform.position.x = target.position.x;
			transform.position.y = target.position.y + 1;
			transform.position.z = target.position.z;
			
			transform.localScale = Vector3(1,1,1);
			
		}
	
	} else {
		
		if (ready) {
			
			transform.position.x = target.position.x + distanceFromTarget;
			transform.position.y = target.position.y + distanceFromGround;
			transform.position.z = target.position.z;
			
			transform.localScale = Vector3(10,10,10);
			
		}
		
	}
	
}

function FadeBack () {
	yield WaitForSeconds (1);
	transform.GetComponent(fadeInOut).fade = false;
	ready = true;
}