
var textMesh : TextMesh ;
var mySkin : GUISkin;
var textFieldString = "text field";
var a = GameObject;
var carselection :GameObject;
private var loadLevel : boolean =false;
private var _keypressed : boolean =false;

private var showGUI : boolean;  // to show GUI screen for entering token
var MagicToken = "" ;
 var www : WWW ;
 public var user_name : String;
 public var user_id :String;
 
function Awake()
{
}




function Start()												//will be using while loading game
{
  /*  yield startLoad();
 	Application.backgroundLoadingPriority = ThreadPriority.Low;														// Load the level named with index.

    var async : AsyncOperation = Application.LoadLevelAsync (1);
      yield async;
    Debug.Log ("Loading complete"); 
	*/


}








function OnGUI()
{

if(  a == GameObject.FindGameObjectsWithTag("3dtext"))    //given 3dtext tag to our 3d text
    {
	a.GetComponent(textMesh);
		//textMesh.text("Enter Your facebook account to find some cool stuff");
     }

GUI.skin = mySkin;

	
	
	GUI.BeginGroup (Rect (Screen.width / 2 - 100, Screen.height / 2 , 200, 150));
																		// All rectangles are now adjusted to the group. (0,0) is the topleft corner of the group.

	
	GUI.Box (Rect (0,0,200,150), "Enter Facebook ID","box");
	GUI.Label (Rect (10, 20, 120, 40), "Win exciting stuffs");
	//textFieldString = GUI.TextField (Rect (70, 20, 100, 30), textFieldString);
	
	if(GUI.Button(Rect(30,110,150,30), "Continue"))
	{
	destroyobject();
	}
	if(GUI.Button (Rect (30,70,150,30), "Connect"))
	   {
	//Application.OpenURL("https://graph.facebook.com/oauth/authorize?client_id=175105102596900&redirect_uri=http://www.ifc0nfig.com/Facebook/UnityGame/&type=user_agent&display=page");
		showGUI = true;
	 loadLevel = true;
	    }

	
	 GUI.EndGroup ();
	
		if(showGUI)
		{
	//	GUI.Window(0, new Rect(25, 25, (Screen.width - 50), 120), DoFacebookConnect, "Facebook Connect");
		}

}





function Update()
{

}







/*function DoFacebookConnect(windowId : int)				//called from plugin
{
	GUI.Label (Rect (10, 20, (Screen.width - 70), 80), "Your browser window should popup, simply log in to Facebook and copy your magic token in the text box below.");
	MagicToken = GUI.TextField (Rect (10, 50, (Screen.width - 70), 20), MagicToken, 120);
	
	if(GUI.Button(Rect( 10, 80, 80, 20), "Connect!"))
	{
		UFacebook.MagicToken = MagicToken;
		result1 = UFacebook.GetUserProperty("me","name");
		result2 = UFacebook.GetUserProperty("me","id");
		user_name=result1;
		user_id = result2;
		
		if(result1 != null)
		{
			//GameObject.Find("<Facebook Connect>").active = false;
			
		//	FacebookText = GameObject.Find("<Facebook>");
		//	FacebookText.GetComponent(TextMesh).text = result;
		//	FacebookText.renderer.material.SetColor("_Color", Color.blue);
		//	FacebookText.renderer.enabled = true;
			print("welcome"+result1);
			destroyobject();
	//		picture_link = "http://graph.facebook.com/"+result2+"/picture";
			//Application.OpenURL(picture_link);
	/*	 		www = new WWW(picture_link);
		 		yield www;
		 guiTexture.texture = www.texture;
		 textureColor = guiTexture.color;
transform.position = Vector3.zero;
transform.localScale = Vector3.zero;
guiTexture.pixelInset = Rect (0,0,Screen.width,Screen.height);    
	*/
		
	/*	}
		
	}
}
*/




//function to start loading next level


function startLoad()
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


function destroyobject()
{

Destroy(this.gameObject);
 //ThreadPriority.High;
 Application.LoadLevel(1);
// carselection = Instantiate(carselection, Vector3 (0, 0, 0), Quaternion.identity);   //instantiating selection page

}