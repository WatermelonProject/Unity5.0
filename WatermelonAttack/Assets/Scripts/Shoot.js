#pragma strict

public var bullet : Rigidbody;
public var speed = 5;

function Start () {

}

function Update () {
	
	if (Input.GetButtonDown("Fire1")) {
		var instantiatedProjectile : Rigidbody = Instantiate(bullet, transform.position, transform.rotation);
		
		instantiatedProjectile.velocity = transform.TransformDirection(Vector3(0,0,speed));
		
		Physics.IgnoreCollision(instantiatedProjectile.GetComponent.<Collider>(), transform.root.GetComponent.<Collider>());
		
	}
	
}