

function loadFile1(event) {
    var file = event.target.files[0].name;
    var img1 = document.getElementById("src1");
    img1.setAttribute("src", file);
}
function loadFile2(event) {
    var file = event.target.files[0].name;
    var img2 = document.getElementById("src2");
    img2.setAttribute("src", file);
}

var slider = document.getElementById("slider");
slider.addEventListener('input', changediv, false);
function changediv(event){
    
    var sliderer = document.getElementById("slider");
    var x = sliderer.value;
    var img2 = document.getElementById("container");
    img2.style.width = x + "%";
    
}


function play(){
    var vid1 = document.getElementById("vid1");
    var vid2 = document.getElementById("vid2");
    
    vid1.load();
    vid2.load();
    
    vid1.play();
    vid2.play();
}
