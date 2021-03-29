let n = 5;
let symbol = '*';
let line = '';
let space = '';

for (let i = 1; i <= n; i += 1) {
    for (let j = n - i; j >= 1; j -= 1) {
        console.log(space);
    }
    for (let j = 1; j <= i; j += 1) {
        console.log(symbol);
        
    }
    
} 

