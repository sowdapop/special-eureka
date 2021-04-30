var count = 0;
function counter() {
    var button = document.getElementById("myButton");
    if (count <10){
      count++;
      button.innerHTML = count;
} else {
    button.innerHTML = "11?! Your Count is Complete!";
}
}
