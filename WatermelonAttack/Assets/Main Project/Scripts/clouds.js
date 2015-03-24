#pragma strict

var animationSpeed : float;
var offset : float;

function Start () {

}

function Update () {
	
	offset += Time.deltaTime;
	GetComponent.<Renderer>().material.mainTextureOffset = Vector2(0, offset * animationSpeed);
}