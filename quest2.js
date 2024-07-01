const prompt = require("prompt-sync")();

let speed = prompt('Please enter the speed: ');
speed = parseInt(speed); 

function calculateDemeritPoints(){
    const speedLimit = 70;
    let demeritPoints = 0;

    if(speed<70){
        console.log('Ok');
    }else{
        demeritPoints = Math.floor((speed-speedLimit)/5)
        console.log(`points:${demeritPoints}`)
    
    if (demeritPoints>12){
    console.log('Licence suspended')
    }
  }
}
calculateDemeritPoints()