#pragma strict

public var btnChangeCameraMode : KeyCode = KeyCode.V;
static var is1stPerson : boolean;
var target : Transform;
var distanceFromTarget : float;
var distanceFromGround : float;

function Start () {

}

function Update () {

	if (Input.GetKeyDown(btnChangeCameraMode)){
	
		is1stPerson = !is1stPerson;
	
	}
	
	if (is1stPerson == true) {
	
		transform.position.x = target.position.x;
		transform.position.y = target.position.y + 1;
		transform.position.z = target.position.z;
	
	}
	
	if (is1stPerson == false) {
	
		transform.position.x = target.position.x + distanceFromTarget;
		transform.position.y = target.position.y + distanceFromGround;
		transform.position.z = target.position.z;
	
	}


}