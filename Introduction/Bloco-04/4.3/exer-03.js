let n = 5;
let symbol = '*';
let line = '';

for (let i = 0; i < n; i += 1) {

    for(let j = 0; j < n; j += 1){
        if(i + j >= n){
            line += symbol;
        }
        else{
            line = symbol;
        }
    } 
}console.log(line);