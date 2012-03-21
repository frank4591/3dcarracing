var rank : GameObject[] = new GameObject[5] ;
var length :int = 0;
private var obj : GameObject;

private var j : int =0;
private var gamefinished :boolean =false;
var medal : Texture2D;
var finished_race : Texture2D;
var finish_time : float;
var aicar : GameObject[] = new GameObject[4];
//var carselected : player_obj;
//private var car_load_script : car_load;
//private var player_car : GameObject;
function Awake()
{
for(j=0;j<5;j++)
rank[j] = null;
//car_load_script = this.gameObject.GetComponent("car_load");
//player_Car = car_load_script.player_obj;
}

function OnTriggerEnter (other : Collider) {

if((other.transform.parent.rigidbody)!=null)
{
obj = other.transform.parent.rigidbody.gameObject;
car_rank(obj);


}


}



function car_rank(obj : GameObject)
{

for(var i=0;i<=length;i++)
	{
	if(rank[i]==obj)
		{
		
		return;
		}
	
    }


if(length<5)
{
rank[length]=obj;
if(obj.tag=="Player")
{
gamefinished =true;
finish_time = Time.time;
print("finished");
}
length++;

  }
    
	
}





var medal_screen : Rect;
function OnGUI()
{

//medal_screen =  Rect(((Screen.width/2)-(Screen.width/4)),((Screen.height/2)-(Screen.height/4)),(Screen.width/2),(Screen.height/2));

finish_check();

}






function finish_check()
{

var finishline_time = (finish_time +5);
if(gamefinished)
{
	if(Time.time <= finishline_time)
	{
   GUI.DrawTexture(Rect(((Screen.width/2)-(Screen.width/4)),((Screen.height/2)-(Screen.height/4)),(Screen.width/2),(Screen.height/2))
, finished_race, ScaleMode.ScaleToFit, true);
	}
	else if(rank[0]==obj)
GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height), medal, ScaleMode.ScaleToFit, true);

}



}