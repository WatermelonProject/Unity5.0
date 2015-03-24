#pragma strict

public var bullet : Rigidbody;
public var speed = 5;

var shootKey : KeyCode;
var shootKey2 : KeyCode;

function Start () {

}

function Update () {
	
	if (Input.GetKeyDown(shootKey) || Input.GetKeyDown(shootKey2)) {
		var instantiatedProjectile : Rigidbody = Instantiate(bullet, transform.position, transform.rotation);
		
		instantiatedProjectile.velocity = transform.TransformDirection(Vector3(0,0,speed));
		
		//Physics.IgnoreCollision(instantiatedProjectile.GetComponent.<Collider>(), transform.root.GetComponent.<Collider>());
		
	}
	
}