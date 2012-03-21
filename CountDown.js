var go : GameObject;
private var ct : float;
private var cnt : int = 3;
private var cnt1 : int = 6;
private var rl : GameObject[];
private var gl : GameObject[];
private var ol : GameObject[];
var countdown_finished : boolean =false;
function Awake ()
{
	ct = Time.time;
	rl = GameObject.FindGameObjectsWithTag("Red");
	ol = GameObject.FindGameObjectsWithTag("Orange");
	gl = GameObject.FindGameObjectsWithTag("Green");
	
}
function Update () {
//print("" + cnt1);
if(cnt == 3 && go.GetComponent("GUIText").fontSize <=	4)
	{
		rl[0].GetComponent(Light).intensity = 2.4;
		rl[1].GetComponent(Light).intensity = 2.4;
	}
else if(cnt == 2 && go.GetComponent("GUIText").fontSize <=	4)
	{
		rl[0].GetComponent(Light).intensity = 0;
		rl[1].GetComponent(Light).intensity = 0;
		ol[0].GetComponent(Light).intensity = 2.4;
		ol[1].GetComponent(Light).intensity = 2.4;	
	}
else if(cnt ==1  && go.GetComponent("GUIText").fontSize <=	4)	
	{
		ol[0].GetComponent(Light).intensity = 0;
		ol[1].GetComponent(Light).intensity = 0;
		gl[0].GetComponent(Light).intensity = 2.4;
		gl[1].GetComponent(Light).intensity = 2.4;
		countdown_finished = true;
	}
if(cnt1 % 2 == 1 && cnt1 > 0)
	{
	go.GetComponent("GUIText").text = "" + cnt;
	if(go.GetComponent("GUIText").fontSize > 0)
		go.GetComponent("GUIText").fontSize -=17;
	if(Time.time - ct >=1.0 && cnt>=1)
		{
		ct = Time.time;
		cnt--;
		cnt1--;
		go.GetComponent("GUIText").text = "" + cnt;
		go.GetComponent("GUIText").fontSize = 389;
		go.transform.position.y = 1.6;
		}
	if(cnt<1)
		{
		go.GetComponent("GUIText").text = "";
		}
	}
else if(cnt1 > 0)
	{
	if(Time.time - ct >= 1.0)
		{
		ct = Time.time;
		//cnt--;
		cnt1--;
		
		}
	if(go.transform.position.y > .74)
		go.transform.position.y -= 0.05;
	go.GetComponent("GUIText").text = "" + cnt;
	}
}