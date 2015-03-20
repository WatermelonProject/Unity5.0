#pragma strict

public var btnPause : KeyCode = KeyCode.P;

function Start () {
	GetComponent.<AudioListener>().pause = false;
}

function Update () {

	if (Input.GetKeyDown(btnPause)){
		if(GetComponent.<AudioListener>().pause){ 
			GetComponent.<AudioListener>().pause = false;
		} else {
			GetComponent.<AudioListener>().pause = true;
		}
		Time.timeScale = 1.0-Time.timeScale;
		Time.fixedDeltaTime = 0.02 * Time.timeScale;
	}

}