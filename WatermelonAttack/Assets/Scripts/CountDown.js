﻿public var timeLeft : float = 5.0;
public var number1 : Texture;
public var number2 : Texture;
public var number3 : Texture;
public var number4 : Texture;
public var number5 : Texture;

function Start () {
 
	GetComponent("OVRPlayerController").Acceleration = 0.0;
	GetComponent("OVRPlayerController").RotationAmount = 0.0;
	GameObject.Find("Countdown").GetComponent(AudioSource).Play();
}
 
function Update () {
 
        timeLeft -= Time.deltaTime;
        
        if ( timeLeft > 4 && timeLeft <= 5 ) {
        	GameObject.Find("ImageCountdown").GetComponent(UnityEngine.UI.RawImage).texture = number5;
        }
        
        if ( timeLeft > 3 && timeLeft <= 4 ) {
			GameObject.Find("ImageCountdown").GetComponent(UnityEngine.UI.RawImage).texture = number4; 	
        }
        
        if ( timeLeft > 2 && timeLeft <= 3 ) {
			GameObject.Find("ImageCountdown").GetComponent(UnityEngine.UI.RawImage).texture = number3;
        }
        
        if ( timeLeft > 1 && timeLeft <= 2 ) {
			GameObject.Find("ImageCountdown").GetComponent(UnityEngine.UI.RawImage).texture = number2;
        }
        
        if ( timeLeft > 0 && timeLeft <= 1 ) {
        	GameObject.Find("ImageCountdown").GetComponent(UnityEngine.UI.RawImage).texture = number1;
        }
        
        if ( timeLeft < 0 ) {
            
            GameObject.Find("ImageCountdown").GetComponent(UnityEngine.UI.RawImage).enabled = false;
			GetComponent("OVRPlayerController").Acceleration = 0.4;
			GetComponent("OVRPlayerController").RotationAmount = 1.5;
			
        }
        
        if ( timeLeft < -1 ) {
        	GameObject.Find("Countdown").SetActive(false);
        	GetComponent("CountDown").enabled = false;
        }
  
}