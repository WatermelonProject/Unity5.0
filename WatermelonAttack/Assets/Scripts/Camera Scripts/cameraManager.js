#pragma strict

//1st Person Camera

var Lcam1st : GameObject;
var Rcam1st : GameObject;
var centerCam1st : GameObject;

//3rd Person

var OVRCameraRig3rd : GameObject;

static var is1stPerson : boolean;

function Start () {
	
}

function Update () {
	
	if (Input.GetKeyDown(KeyCode.V)) {
		is1stPerson = !is1stPerson;
	}
	
	if (is1stPerson == true) {
		
		Lcam1st.SetActive(true);
		Rcam1st.SetActive(true);
		centerCam1st.SetActive(true);
		
		OVRCameraRig3rd.SetActive(false);
		
	} else {
		
		Lcam1st.SetActive(false);
		Rcam1st.SetActive(false);
		centerCam1st.SetActive(false);
		
		OVRCameraRig3rd.SetActive(true);
		
	}
	
}