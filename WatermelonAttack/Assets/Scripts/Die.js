#pragma strict

function Start () {

}

function Update () {
	if (transform.position.y <=-30) {
		Dead();
	}
}

function Dead(){
	Application.LoadLevel("game");
}