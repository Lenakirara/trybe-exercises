let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallerValue = 0;

for(let i = 0; i < numbers.length; i +=1){
    if(i === 0){
        smallerValue = numbers[i];
        
    }else if (numbers[i] < smallerValue){
        smallerValue = numbers[i];
    }
}
console.log(smallerValue);