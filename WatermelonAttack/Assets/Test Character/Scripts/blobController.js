#pragma strict

var anim : Animation;

//var walkSpeed : float;
//var topWalkSpeed : float;
//
//var rotationSpeed : float;
//
//var jumpForce : float;
//
private var scale : Vector3;
//private var velocityLog : Vector3;
//
//private var lastPosition : Vector3;
//private var currentWalkSpeed : float;
//
//var topWalkSpeedStart : float;

function Start () {
	scale = transform.localScale;
//	topWalkSpeedStart = topWalkSpeed;
}

function Update () {
	
//	currentWalkSpeed = Vector3.Distance(lastPosition, transform.position);
	
	if (Input.GetKeyDown(KeyCode.W)) {
		anim.Play("Walk");
	}
	
	if (Input.GetKeyUp(KeyCode.W)) {
		anim.Stop("Walk");
		transform.localScale = scale;
	}
	
	if (Input.GetKeyDown(KeyCode.S)) {
		anim.Play("Walk");
	}
	
	if (Input.GetKeyUp(KeyCode.S)) {
		anim.Stop("Walk");
		transform.localScale = scale;
	}
	
//  Experimental walking script apart from the OVRPlayer Controller
	
//	if (Input.GetKey(KeyCode.LeftShift)) {
//		topWalkSpeed = topWalkSpeedStart + 0.05;
//	} else {
//		topWalkSpeed = topWalkSpeedStart;
//	}
//	
//	if (Input.GetKeyDown(KeyCode.Space)) {
//		GetComponent.<Rigidbody>().AddRelativeForce(transform.up * jumpForce);
//	}
//	
//	if (Input.GetKey(KeyCode.W)) {
//	
//		if (currentWalkSpeed < topWalkSpeed) {
//			velocityLog = GetComponent.<Rigidbody>().velocity;
//			GetComponent.<Rigidbody>().velocity = (transform.forward * walkSpeed) + velocityLog;
//		}
//		
//	}
//	
//	if (Input.GetKey(KeyCode.S)) {
//		
//		if (currentWalkSpeed < topWalkSpeed) {
//			velocityLog = GetComponent.<Rigidbody>().velocity;
//			GetComponent.<Rigidbody>().velocity = (transform.forward * -walkSpeed) + velocityLog;
//		}
//		
//	}
//	
//	if (Input.GetKey(KeyCode.A)) {
//		transform.Rotate(0, -rotationSpeed * Time.deltaTime, 0);
//	}
//	
//	if (Input.GetKey(KeyCode.D)) {
//		transform.Rotate(0, rotationSpeed * Time.deltaTime, 0);
//	}
//	
//	lastPosition = transform.position;
	
}