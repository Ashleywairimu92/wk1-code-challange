
function calculateDemeritPoints(){
    let speed = 150;
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