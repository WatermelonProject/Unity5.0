

public var timeLeft : float = 5.0;

 
function Start () {
 
	GetComponent("OVRGamepadController").enabled = false;
	
	GetComponent("OVRPlayerController").enabled = false;

}
 
function Update () {
 
        timeLeft -= Time.deltaTime;
        if ( timeLeft < 0 ) {
               
		GetComponent("OVRGamepadController").enabled = true;
		
		GetComponent("OVRPlayerController").enabled = true;
		
        }  
             
}