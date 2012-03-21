var firstTexture : Texture2D;			
//var secondTexture :Texture2D;
var textureColor : Color;
private var i : float;			    //counter
private var display_time :float	;    //total fade display time
private var fadeout_time:float	;		//for fadeouttime
private var fadein_time :float;			//for fade in time
private var starttime :float;      //start time of textures
private var endtime :float;

private var endlogo :boolean = false;

var movie1 : GameObject;
var logoobj : GameObject;

function Awake()
{
starttime=Time.time;
endtime=Time.time;

}

function  OnGUI()
{
 

//    textureColor.a = Mathf.Sin(Time.time * 5.0f);
 //   guiTexture.color = textureColor;
//for(i=0.0;i<display_time;i+=(Time.time*1/display_time))
 
 display_time =2.5;
  // fadecall();
	

}

function startMovie()
{
  logoobj = GameObject.FindWithTag ("logo1");     //finds object with logo1 to destroy
  print("object to be destroyed now");
 // endlogo=true;

}


function Update () {

 if(Time.time<5)
 {
 guiTexture.texture = firstTexture;
  }
 /* if(Time.time>=5 && Time.time<10)
  {
  guiTexture.texture=secondTexture;
  starttime=0.0;
  fadein_time=0;
  fadeout_time=0;
  
  }*/
  
  textureColor = guiTexture.color;
transform.position = Vector3.zero;
transform.localScale = Vector3.zero;
guiTexture.pixelInset = Rect (0,0,Screen.width,Screen.height);    


  fadecall();
if(Time.time>=5)
  {
//  print("textures ended..movie starts");
  endlogo=true;
 // startMovie();
  //break;
  }
  if(endlogo)
  {
 // print("calling startmovie");
 	startMovie();
 	
   	movie1 = Instantiate(movie1, Vector3 (0, 0, 0), Quaternion.identity);   //instantiate new object
   Destroy(logoobj);		//current object
   
  }
//guiTexture.texture = someTexture;
}

function fadein()
{
fadein_time+=Time.deltaTime;
i=i + (fadein_time*1/display_time);        
    textureColor.a = i;
    guiTexture.color = textureColor;
	
   // textureColor.a = i;
   // guiTexture.color = textureColor;
}

function fadeout()
{
fadeout_time+=Time.deltaTime;
i=i - (fadeout_time*1/display_time);
    textureColor.a = i;
    guiTexture.color = textureColor;
}


function fadecall()    //calls fade in and fade out function
{
  starttime +=Time.deltaTime;
   if(starttime<=display_time)
   {	
   i=0.0;
   fadein();
    }
    
    
    if(starttime>=2.5 && starttime <5)
    {
    i=1.0;
    fadeout();
    } 

}