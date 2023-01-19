song=""

function preload()
{
    song = loadSound("Ram Darshan Ram Setu EP Narci Hindi Rap Song.mp3");
}

function setup( ){
     canvas = createCanvas(400,350)
        canvas.center();

video= createCapture(VIDEO);
video.hide()
} 
function draw() {
    image(video,0,0,400,350)
}

function play()
{
    song.play();
}
