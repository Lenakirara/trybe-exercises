let list = [];
let result = 0;

for (let i = 1; i < 25; i += 1){
    list.push(i);
    result /= list[i]
}console.log(result);


