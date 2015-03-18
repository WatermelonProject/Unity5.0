#pragma strict

public var rotAmount : float = 30;

function Start () {

}

function Update () {
	transform.Rotate(new Vector3(0, rotAmount, 0));
}