let n = 5;
let symbol = '*';
let space = '-';
let line = '';

for (let i = 0; i < n; i += 1) {
    line += space;

    for (let j = 0; j < n; j += 1) {
        line += symbol;
    }
    console.log(line);
}