#pragma strict

public var btnPause : KeyCode = KeyCode.P;

function Start () {

}

function Update () {

	if (Input.GetKeyDown(btnPause)){
		Time.timeScale = 1.0-Time.timeScale;
		Time.fixedDeltaTime = 0.02 * Time.timeScale;
	}

}