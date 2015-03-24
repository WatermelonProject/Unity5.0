#pragma strict

var walkSpeed : float;
var topWalkSpeed : float;

var jumpForce : float;

var weight : float;

private var velocityLog : Vector3;

private var lastPosition : Vector3;
private var currentWalkSpeed : float;

private var topWalkSpeedStart : float;

private var moveHorizontal : float;
private var moveVertical  : float;

private var isGrounded : boolean;

private var paused : boolean;

var jumpKey : KeyCode;
var runKey : KeyCode;

var jumpKey2 : KeyCode;
var runKey2 : KeyCode;

function Start () {
	topWalkSpeedStart = topWalkSpeed;
}

function Update () {
	
	if (paused == false) {
	
		//Checks if the player is touching the ground
		if (Physics.CheckSphere(transform.position, GetComponent.<SphereCollider>().radius + 0.01, ~(1 << 8))){
			
			isGrounded = true;
			GetComponent.<Rigidbody>().drag = 3;
			
		} else {
			
			isGrounded = false;
			GetComponent.<Rigidbody>().drag = 0;
			GetComponent.<Rigidbody>().AddForce(-Vector3.up * weight);
		}
		
		currentWalkSpeed = Vector3.Distance(lastPosition, transform.position);
		
		if (Input.GetKey(runKey) || Input.GetKey(runKey2)) {
			topWalkSpeed = topWalkSpeedStart + 0.1;
		} else {
			topWalkSpeed = topWalkSpeedStart;
		}
		
		//Jump
		if (Input.GetKeyDown(jumpKey) || Input.GetKeyDown(jumpKey2)) {
			if (isGrounded) {
				GetComponent.<Rigidbody>().AddRelativeForce(transform.up * jumpForce, ForceMode.VelocityChange);
			}
		}
		
		
		//Movement
		
		moveHorizontal = Input.GetAxis ("Horizontal");
		moveVertical = Input.GetAxis ("Vertical");
		
		if (moveHorizontal != 0 || moveVertical != 0) {
			
			transform.forward = Vector3(-moveVertical,0,moveHorizontal);
			
			if (currentWalkSpeed < topWalkSpeed && isGrounded) {
				velocityLog = GetComponent.<Rigidbody>().velocity;
				GetComponent.<Rigidbody>().velocity = (transform.forward) + velocityLog;
			}
			
		}
		
		lastPosition = transform.position;
		
	}
	
}
