#pragma strict

public var waitTime : float = 10;

function Start () {
	Destroy(gameObject, waitTime);
}

function Update () {

}