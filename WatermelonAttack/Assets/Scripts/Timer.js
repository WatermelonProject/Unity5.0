#pragma strict

public var timer : float = 10f;

function Start () {

}

function Update () {
	
	timer -= Time.deltaTime;
	
	if (timer <= 0){
	
		timer = 0;
	
	}
	
}

function OnGUI(){
	
	GUI.Box(new Rect(140, Screen.height-50, Screen.height-300, 120), "" + timer.ToString("0"));
	
}