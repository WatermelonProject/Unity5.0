public var timeLeft : float = 5.0;
public var number1 : Texture;
public var number2 : Texture;
public var number3 : Texture;
public var number4 : Texture;
public var number5 : Texture;

public var countdownObj : GameObject;
public var imageCountdownObj : GameObject;

function Start () {
 
	GetComponent("playerController").paused = true;
	GameObject.Find("Countdown").GetComponent(AudioSource).Play();
	
	//Storing this as a variable prevents the game from
	//running the "GameObject.Find" function every frame 
	//in the Update function.
	countdownObj = GameObject.Find("Countdown");
	imageCountdownObj = GameObject.Find("ImageCountdown");
	
}
 
function Update () {
 
        timeLeft -= Time.deltaTime;
        
        if ( timeLeft > 4 && timeLeft <= 5 ) {
        	imageCountdownObj.GetComponent(UnityEngine.UI.RawImage).texture = number5;
        }
        
        if ( timeLeft > 3 && timeLeft <= 4 ) {
			imageCountdownObj.GetComponent(UnityEngine.UI.RawImage).texture = number4; 	
        }
        
        if ( timeLeft > 2 && timeLeft <= 3 ) {
			imageCountdownObj.GetComponent(UnityEngine.UI.RawImage).texture = number3;
        }
        
        if ( timeLeft > 1 && timeLeft <= 2 ) {
			imageCountdownObj.GetComponent(UnityEngine.UI.RawImage).texture = number2;
        }
        
        if ( timeLeft > 0 && timeLeft <= 1 ) {
        	imageCountdownObj.GetComponent(UnityEngine.UI.RawImage).texture = number1;
        }
        
        if ( timeLeft < 0 ) {
            
            imageCountdownObj.GetComponent(UnityEngine.UI.RawImage).enabled = false;
			GetComponent("playerController").paused = false;
			
        }
        
        if ( timeLeft < -1 ) {
        	countdownObj.SetActive(false);
        	GetComponent("CountDown").enabled = false;
        }
  
}