#pragma strict

var anim : Animation;

private var scale : Vector3;

function Start () {
	scale = transform.localScale;
}

function Update () {
	
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
	
}