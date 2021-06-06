object=[];
img="";
status="";
function preload(){
    img= loadImage('fan.jpg');
    }
    
function setup(){
canvas = createCanvas(456, 608);
canvas.position();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting objects";
}


function draw(){
    image(img, 0, 0, 456, 608);
    if (status != ""){
        for (i = 0; i<object.length; i++) {
        document.getElementById("status").innerHTML="status= Object Detected";
        fill("#ff0000");
        percent = floor(object[i].confidence*100);
        text(object[i].label+ " "+ percent + "%", object[i].x, object[i].y);
        noFill();
        stroke("#ff0000");
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
    }

function modelLoaded(){
    console.log('model is loaded');
    status=true;
    objectDetector.detect(img, gotResult);
}

 function gotResult(error, results) {
     if (error){
         console.log(error);
     }
     console.log(results);
     object = results;
 }
