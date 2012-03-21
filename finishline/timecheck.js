var direction : int =1;

var angle :float;
function Start()
{
angle = transform.forward.magnitude;
print(angle);

}
function Update () {
transform.Rotate(Vector3.up,4*Time.deltaTime);
//transform.rotation.y +=  direction * 1 *Time.deltaTime;
//transform.RotateAround (Vector3.zero, Vector3.up, 1 * Time.deltaTime);

angle = transform.rotation.z;
print(angle);


}