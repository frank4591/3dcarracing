// var car1 : Texture2D;
/*var car2  : Texture2D;
var car3 : Texture2D;
var car4  :Texture2D;
var car5 : Texture2D;
var car6  :Texture2D;
*/
var maxcar :int =5;	
var maxtrack :int =3;
private var i : int ;

var cars : Texture2D[] = new Texture2D[maxcar];
var tracks : Texture2D[] = new Texture2D[maxtrack];
 
private var texturecolor : Color;
private var carselect : boolean = false;
private var trackselect :boolean = false;
static var car_selected : int ;
static var track_selected :int;
static var start_next_scene :boolean = false;  //check start of nextscreen and to destroy object 

private var button_text : Texture2D;

function OnGUI()
{
 if(carselect)
  {
   button_text = cars[i];
   if(GUI.Button (Rect((Screen.width/2)-50,0,150,50), GUIContent ("Continue", button_text)))
   {
   car_selected=i;
   i=0;
   carselect =false;
   trackselect =true;
   }
  }
  if(trackselect)
  {
   button_text = tracks[i];
   if(GUI.Button (Rect((Screen.width/2)-50,0,150,50), GUIContent ("Continue", button_text)))
   {
   track_selected=i;
   i=0;
   /*carselect =false;
   trackselect =true;
   */
   			scene1();		//<------call next scene
   
   }
  }


}


function Start(){
carselect = true;
i =0;

guiTexture.texture = cars[0];
textureColor = guiTexture.color;
transform.position = Vector3.zero;
transform.localScale = Vector3.zero;
guiTexture.pixelInset = Rect (0,0,Screen.width,Screen.height); 

}



function Update () {


 
  

if(carselect)
{
  if(Input.GetKeyDown("right"))
  {
  i++;
    if(i==maxcar)
    i=0;
  }

  if(Input.GetKeyDown("left")) {
  i--;
   if(i==(-1))
   i=maxcar-1;
  }
 
guiTexture.texture = cars[i];
 textureColor = guiTexture.color;
transform.position = Vector3.zero;
transform.localScale = Vector3.zero;
guiTexture.pixelInset = Rect (0,0,Screen.width,Screen.height); 
}


if(trackselect)
{

if(Input.GetKeyDown("right"))
  {
  i++;
    if(i==maxtrack)
    i=0;
  }

  if(Input.GetKeyDown("left")) 
  {
  i--;
   if(i==(-1))
   i=maxtrack-1;
  }
 
guiTexture.texture = tracks[i];
 textureColor = guiTexture.color;
transform.position = Vector3.zero;
transform.localScale = Vector3.zero;
guiTexture.pixelInset = Rect (0,0,Screen.width,Screen.height); 
}








}

function scene1()
{

 start_next_scene =true;												//will be using while loading game

 //  yield startLoad();
 	Application.backgroundLoadingPriority = ThreadPriority.High;														// Load the level named with index.

    var async : AsyncOperation = Application.LoadLevelAsync (1);
      yield async;
    Debug.Log ("Loading complete"); 
	


}

/*function startLoad()
{

while(!loadLevel)
{
if(showGUI)		//this will start loading game
{
   break;
}
yield;
}
   
   
}
*/


/*function destroyobject()
{

Destroy(this.gameObject);
 carselection = Instantiate(carselection, Vector3 (0, 0, 0), Quaternion.identity);   //instantiating selection page

}

}
*/