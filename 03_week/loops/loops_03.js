function calculateAverageSpeed(){

let distance;
let time;
let averageSpeed;

    while(true){
        distance = prompt("distance in km");
        distance = Number(distance);

        if(distance === 0){
            break;
        }

        time = prompt("time in hours");
        time = Number(time);

        if(isNaN(distance) || isNaN(time)) {
            console.log('no valid values');
        }
        else{
            averageSpeed = distance / time;
            console.log(averageSpeed);
        }
    }
}

calculateAverageSpeed();