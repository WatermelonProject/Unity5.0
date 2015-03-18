#pragma strict

public var destroyOnCollision : boolean = true;

function Start () {
	Cursor.lockState = CursorLockMode.Locked;
	Cursor.visible = false;
}

function Update () {

}

function OnCollisionEnter (collision : Collision) {

	if (destroyOnCollision) Destroy (gameObject);
	
	if (collision.gameObject.tag == "enemy"){
		Destroy(collision.gameObject);
	}

}