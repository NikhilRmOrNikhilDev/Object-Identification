img = "";
statu = "";
function preload(){
    img = loadImage("human.jpg");
}
function setup(){
    canvas = createCanvas(500, 300)
    canvas.position();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}
function draw(){
    image(img, 0, 0, 500, 300);
    fill("#009dff");
    text("Boy", 45, 75)
    nofill();
    stroke("#009dff");
    rect(30, 60, 450, 350);

    fill("#009dff");
    text("Girl", 45, 75)
    nofill();
    stroke("#009dff");
    rect(30, 60, 450, 350);
}
function modelLoaded(){
    console.log("ModelLoaded!!!");
    statu = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}