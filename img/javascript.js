

function loadFile1(event) {
    var file = event.target.files[0].name;
    var img1 = document.getElementById("img1");
    img1.style.backgroundImage = "url("+ file + ")";
}
function loadFile2(event) {
    var file = event.target.files[0].name;
    var img2 = document.getElementById("img2");
    img2.style.backgroundImage = "url("+ file + ")";
}

var slider = document.getElementById("slider");
slider.addEventListener('input', changediv, false);
function changediv(event){
    
    var sliderer = document.getElementById("slider");
    var x = sliderer.value;
    var img2 = document.getElementById("img2");
    img2.style.width = x + "%";
    
}
