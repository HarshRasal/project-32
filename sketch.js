const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
     background=(bg)

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response  = await fetch("worldtimeapi.org/api/timezone/asia/kolkata");
    //change the data in JSON format
    var responseJSON = await response.json
    // write code slice the datetime
    var datetime = responseJSON.datetime;
     hour = datetime.slice (11,13)

    // add conditions to change the background images from sunrise to sunset
    if(hours>=04 && hours<=06){
        bg="sunrise1.png";
    }else if(hours>=06 && hours<=08){
        bg="sunrise2.png";
    } else if(hours>=08 && hours<=10){
        bg="sunrise3.png";
    } else if(hours>=10 && hours<=11){
        bg="sunrise4.png";
    } else if(hours>=11 && hours<=12){
        bg="sunrise5.png";
    } else if(hours>=12 && hours<=16){
        bg="sunrise6.png";
    } else if(hours>=16 && hours<=17){
        bg="sunset7.png";
    } else if(hours>=17 && hours<=18){
        bg="sunset8.png";
    } else if(hours>=18 && hours<=19){
        bg="sunset9.png";
    } else if(hours>=19 && hours<=20){
        bg="sunset10.png";
    } else if(hours>=20 && hours<=01){
        bg="sunset11.png";
    } else if(hours>=01 && hours<=04){
        bg="sunset12.png";
    }
   //load the image in backgroundImg variable here
   backgroundImg = loadimage (bg)

}
