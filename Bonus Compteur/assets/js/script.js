var score = 0;
function ClickPlus() {
    score++;
    document.getElementById("score").innerHTML = score; 
}
function ClickMinus() {
    score--;
    document.getElementById("score").innerHTML = score; 
}