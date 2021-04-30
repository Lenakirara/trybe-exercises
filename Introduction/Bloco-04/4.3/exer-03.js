let n = 5;
let symbol = '*';
let line = '';
let position = n;

for (let linha = 0; linha < n; linha += 1) {

    for(let coluna = 1; coluna <= n; coluna += 1){
        if(j < position){
            line += ' ';
        }
        else{
            line += symbol;
        }
    } 
    console.log(line);

    line = '';
    position -= 1;
}