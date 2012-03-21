var movTexture : MovieTexture;
var _keyPressed : boolean = false;				//as in when we use it to swipe card
var play_video : boolean = true;

var movieobj : GameObject;
var GUIobject : GameObject;

private var displayLabel = false;

//var local : string = "//";
//var Prefab :object =EditorUtility.InstantiatePrefab

function Awake()
{

guiTexture.texture=movTexture;					//initialising movie texture on gui texture
print("waking up...");

}


// we use yield here.
function Start()
{

		//for swiping label
   FlashLabel();



print("starting...");
 if(play_video)
 {
transform.position = Vector3.zero;					
  transform.localScale = Vector3.zero;				//transforming screen  to local coordinates
    guiTexture.pixelInset = Rect (0,0,Screen.width,Screen.height);    
    movTexture.Play();
yield WaitForKeyInput("swipe_card");						//starting coroutine function
  }
print("finished coroutine");
  play_video =false;
  movieobj = GameObject.FindWithTag ("movie1");
 // GUIobject = GameObject.FindWithTag ("3dtext");
 
 //Instantiate (GUIobject, movieobj.transform.position, movieobj.transform.rotation);					//on swiping open fb page
 
 //   Destroy(movieobj);						//destroy movieobject
   
  
  

}


function OnGUI() {
 if (displayLabel == true)
 GUI.Label(Rect((Screen.height/2),(Screen.height/2),200,100),"Swipe card or press B");
}








function Update()
{ 
   if(_keyPressed)
   {
    Destroy(movieobj);						//destroy movieobject
      GUIobject = Instantiate(GUIobject, Vector3 (0, 0, 0), Quaternion.identity);   //instantiating fbpage
    
 //  		movTexture.Pause;				//it stops the movie	
 	//	guiTexture.texture.color.a = 0;				//making the texture transperant
 		//here we have to transfer to fb login screen and end the movie
   }
}




function WaitForKeyInput(_button : String)
{
while(!_keyPressed)
{
if(Input.GetButtonDown(_button))		//i have added "b" as swipe card button
{
StartGame();
break;
}
print("awaiting key input");			//i have added "b" as swipe card button
yield;
}
}
function StartGame () {
_keyPressed = true;
print("game officially started.");			//or load another level.

}





function FlashLabel() 
{

while (1) {
 displayLabel = true;
 yield WaitForSeconds(.5);
 displayLabel = false;
 yield WaitForSeconds(.5);  
}

}


 


