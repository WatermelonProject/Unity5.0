using UnityEngine;
using System.Collections;

public class riftStandardScripts : MonoBehaviour {

	// Use this for initialization
	void Start () {

	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown(KeyCode.R)) {
			OVRManager.display.RecenterPose();
		}

		if (Input.GetKeyDown(KeyCode.Escape)) {

			if (Application.loadedLevelName == "Win") {
				Application.OpenURL ("http://twitter.com/intent/tweet?text=@dragostzgz");
			}

			Application.Quit();
		}
	}
}
