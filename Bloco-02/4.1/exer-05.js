let angle1 = 40;
let angle2 = 80;
let angle3 = 60;

let sumAngles = angle1 + angle2 + angle3

if(angle1 < 0 || angle2 < 0 || angle3 < 0){
    console.log('angulo inválido');
}
else if(sumAngles < 180){
    console.log(false);
}
else{
    console.log(true);
}


