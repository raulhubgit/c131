function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status: Detectando Objetos"
}
img = " ";
statz = " ";
function preload(){
    img = loadImage("dog_cat.jpg");
}
function draw(){
    image(img,0,0,640, 420)
    fill("#003C00");
    text("hexa", 45, 75);
    noFill();
    stroke("#003C00");
    rect(30, 60, 450, 350);

    fill("#e30d0d");
    text("penta", 320, 120);
    noFill();
    stroke("#e30d0d");
    rect(300, 90, 270, 320);
    textColor("#e30d0d")
}
function modelLoaded() {
    console.log("BASKAHA")
    statz = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) 
{
  if (error) {
    console.log(error);
  }
  console.log(results);
}