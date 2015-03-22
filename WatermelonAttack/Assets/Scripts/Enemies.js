#pragma strict

public var enemy : Rigidbody;
public var left : float = 5.0;
public var right : float = 5.0;
public var up : float = 5.0;
public var down : float = 3.0;
private var tick : float = 0;
private var speed : float = 0;
public var minSpeed : float = 0;
public var maxSpeed : float = 5;
public var paso : float = 1;

function Start () {

}

function Update () {

	tick += Time.deltaTime;
	
	if (tick>=paso) {
		speed = Random.Range(minSpeed, maxSpeed);
	    var offsetZ = Random.Range(-left, right);
	    var offsetY = Random.Range(-down, up);
		tick = 0;
		
		var position : Vector3 =
			new Vector3(transform.position.x,
						transform.position.y+offsetY,
						transform.position.z+offsetZ);
		var instantiatedProjectile : Rigidbody = 
						Instantiate(enemy, position, transform.rotation);
		instantiatedProjectile.velocity =
						transform.TransformDirection(Vector3(0,-speed,0));
		
	}

}