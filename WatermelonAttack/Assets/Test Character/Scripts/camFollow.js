#pragma strict

var target : Transform;

var distanceFromTarget : float;

var distanceFromGround : float;

function Start () {
	
}

function Update () {
	
	transform.position.x = target.position.x;
	transform.position.y = target.position.y + distanceFromGround;
	transform.position.z = target.position.z + distanceFromTarget;
	
}