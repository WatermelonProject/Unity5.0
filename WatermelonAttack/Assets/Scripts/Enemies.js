#pragma strict

public var enemy : Rigidbody;
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
	var offsetZ = Random.Range(-5.0f, 5.0f);
	var offsetY = Random.Range(-5.0f, 3.0f);
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