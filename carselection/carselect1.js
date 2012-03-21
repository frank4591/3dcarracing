
var maxcar :int =5;	
var maxtrack :int =3;
private var i : int ;

//var cars : Texture2D[] = new Texture2D[maxcar];
var tracks : Texture2D[] = new Texture2D[maxtrack];
 
private var texturecolor : Color;
private var carselect : boolean = false;
private var trackselect :boolean = false;
static var car_selected : int ;
static var track_selected :int;
static var start_next_scene :boolean = false;  //check start of nextscreen and to destroy object 

private var button_text : Texture2D;


var max_car : int =5 ;
var carpos_all : Transform[] = new Transform[5];
var target : Transform;
var speed = 5.0;
//var ObjectB:GameObject;
var cam_rotate = false;
var initial_pos : Transform = null;
var vector : Vector3 ;


private var increment:float;
//private var rotation:Quaternion;
private var starttime : float;





/* Track selection parameters*/
var tracks_all : Transform[] = new Transform[3];
var dist_track :float;
//private var track_select : boolean = false;
var target_track : Transform;
var speed_focus :float=1.0;
private var increment_track :float;
private var track_rotate : boolean =false;
var camera_car : Camera ;
var camera1 : Camera;
var vector1 : Vector3;
var final_pos : Vector3;
var target_tracks_all : GameObject[] = new GameObject[maxtrack];

//var  i : int =0;




/*function OnGUI()
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
   			//scene1();		//<------call next scene
   
 /*  }
  }


}*/

function Awake()
{
//target = cars_all[0].transform;
// target = ObjectB.transform;
 //target.position.z = ObjectB.transform.position.z + 10;
 target = carpos_all[0];
 initial_pos = camera_car.transform;
 vector = initial_pos.position;
 vector1 = camera1.transform.position;
 camera1.enabled = false;
 
 print(vector);
 print(vector1);
}

function Start(){
carselect = true;
i =0;



}



function Update () {


 
  

if(carselect)
{
  if(Input.GetKeyDown("right"))
  {
  // transform.position = initial_pos.position;
  i++;
  
    if(i==max_car)
    i=0;
    target = carpos_all[i];
   camera_car.transform.position = vector;
   increment =0;
   cam_rotate = false;
   print(camera_car.transform.position);
   }

  if(Input.GetKeyDown("left")) {
  i--;
   if(i==(-1))
   i=maxcar-1;
  
  target = carpos_all[i];
   camera_car.transform.position = vector;
   increment =0;
   cam_rotate = false;
   //print(i);
  }
  
  
  if(Input.GetKeyDown(KeyCode.S))
  {
  car_selected=i;
   i=0;
   carselect =false;
  trackselect =true;
  camera_car.enabled = false;
  camera1.enabled = true;
  print("car_selected is "+car_selected);
  			}
  
  
 
car_call();
}



if(trackselect)
{
	camera1.transform.LookAt(tracks_all[i]);
   //var dist_track = Vector3.Distance(target_track.position,camera1.transform.position);



if(Input.GetKeyDown("right"))
  {
  i++;
    if(i==maxtrack)
    i=0;
   target_track = tracks_all[i];
   camera1.transform.position = vector1;
   increment_track =0;
   track_rotate = false;
   print(i);
  }

  if(Input.GetKeyDown("left")) 
  {
  i--;
   if(i==(-1))
   i=maxtrack-1;
   target_track = tracks_all[i];
   camera1.transform.position = vector1;
   increment_track =0;
   track_rotate = false;
   print(i);
  }
 
/*guiTexture.texture = tracks[i];
 textureColor = guiTexture.color;
transform.position = Vector3.zero;
transform.localScale = Vector3.zero;
guiTexture.pixelInset = Rect (0,0,Screen.width,Screen.height); 
*/
track_call();

		
if(Input.GetKeyDown(KeyCode.B))
{
//track_selected=i;
   i=0;
   carselect =true;
  trackselect =false;
  camera_car.enabled = true;
  camera1.enabled = false;
 // print("track_selected is "+track_selected);


}


 if(Input.GetKeyDown(KeyCode.N))
  {
  track_selected=i;
   i=0;
   carselect =false;
  trackselect =false;
  camera_car.enabled = false;
  camera1.enabled = false;
  print("track_selected is "+track_selected);
  scene1();
  			}

}









}

function scene1()
{

 start_next_scene =true;												//will be using while loading game

 //  yield startLoad();
 	Application.backgroundLoadingPriority = ThreadPriority.High;														// Load the level named with index.

    var async : AsyncOperation = Application.LoadLevelAsync (2);		//<--------assign level
      yield async;
    Debug.Log ("Loading complete"); 
	


}



/*function destroyobject()
{

Destroy(this.gameObject);
 carselection = Instantiate(carselection, Vector3 (0, 0, 0), Quaternion.identity);   //instantiating selection page

}

}
*/

function car_call()
{
camera_car.transform.LookAt(target);
  var dist = Vector3.Distance(target.position, camera_car.transform.position);
 
 if(increment <=1)
    increment += speed/100; 
	if(dist>35)
 {
 camera_car.transform.position = Vector3.Lerp(camera_car.transform.position, target.position, increment);
cam_rotate=true;
}
	
	if(cam_rotate)
	{
	//transform.LookAt(target);


    //transform.Translate(Vector3.right * Time.deltaTime);
	//transform.RotateAround (target.position, Vector3.right, 10 * Time.deltaTime);		//rotate around
		camera_car.transform.position.x += Time.deltaTime;
		starttime += Time.deltaTime;
	//	print(starttime);
		if(starttime==5)
		{
		cam_rotate=false;
		starttime=0;
		//transform.position=initial_pos;
		
		}	
 }




}



function track_call()
{

camera1.transform.LookAt(target_track);
  var dist_track = Vector3.Distance(target_track.position, camera1.transform.position);

   if(increment_track <=1)
    increment_track += speed_focus/100; 
	if(dist_track>1)
 	{
  camera1.transform.position = Vector3.Lerp(camera1.transform.position, target_track.position, increment_track);
  			  			
   	   	//final_pos =camera1.transform.position;
   	}
    else
   	{
   	
   	track_rotate = true;
   	}
   	
   	
   	if(track_rotate)
   	{
   	target_tracks_all[i].transform.Rotate(Vector3.up * 10.0* Time.deltaTime);
   
   	  }


}