#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter (collision : Collision) {

	if (collision.gameObject.tag=="player") {
		collision.transform.SendMessage("Dead");
	}

}