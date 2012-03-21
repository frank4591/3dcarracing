var select_game_object :GameObject;
var other_script : carselect1;

static var selected_car :int;

static var selected_track :int;

static var selection_car : int;

function Update () {

if(select_game_object)
{
apply_change();
}



}

function Awake()
{
DontDestroyOnLoad(this.gameObject);
//DontDestroyOnLoad (transform.gameObject);

}


function apply_change()
{


other_script = select_game_object.GetComponent(carselect1);
selection_car = other_script.car_selected;
selected_track =other_script.track_selected;

//print("selection_info car selected is " + selection_car);

}
