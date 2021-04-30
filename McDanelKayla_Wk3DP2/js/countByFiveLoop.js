var text = "";
var i = 0;
while (i < 100){
  text += "<br>The number is " + i * 5 ;
  i++;
}
document.getElementById("demo").innerHTML = text;
