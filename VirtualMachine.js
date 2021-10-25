var readlineSync = require('readline-sync');
let fs = require('fs');
let arg = process.argv;
let ram = new Array();
let s = fs.readFileSync(arg[2]).toString();
ram = s.split(/\s+/)
let ip = 0;
while (ram[ip] != "exit") {
    switch (ram[ip]) {
        case "begin":
            ip++;
            break
        case 'input':
            ram[ram[ip + 1]] = parseInt(readlineSync.prompt());
            ip += 2;
            break;
        case "set":
            ram[ram[ip + 1]] = parseInt(ram[ip + 2]);
            ip += 3;
            break;
        case "add":
            ram[ram[ip + 1]] += ram[ram[ip + 2]];
            ip += 3;
            break;
        case "comp":
            let temp = ram[ram[ip + 1]] - ram[ram[ip + 2]];
            if (temp > 0)
                ram[1000] = 1;
            else if (temp == 0)
                ram[1000] = 0;
            else
                ram[1000] = -1;
            ip += 3;
            break;
        case "jz":
            if (ram[1000] == 0)
                ip = goto(ip)
            else
                ip += 2;
            break;
        case "sub":
            ram[ram[ip + 1]] -= ram[ram[ip + 2]];
            ip += 3
            break;
        case "jp":
            if (ram[1000] == 1)
                ip = goto(ip)
            else
                ip += 2

            break;
        case "jm":
            if (ram[1000] == -1)
                ip = goto(ip);
            else
                ip += 2
            break;
        case "output":
            console.log(ram[ram[ip + 1]])
            ip += 2;
            break;
        case "jump":
            ip = jump(ip);
            break
        case "mul":
            ram[ram[ip + 1]] *= (ram[ram[ip + 2]]);
            ip += 3;
            break
        default:
            ip++;
            break;

    }
}


function goto(current) {
    let temp = current
    let name = ram[current + 1];
    current += 2;
    while (name != ram[current]) {
        current++;
    }
    if (temp == current) {
        console.log("Error syntax!")
    }
    return current;
}

function jump(t) {
    let name = ram[t + 1]
    let counter = 0;
    while (ram[counter] != name) {
        counter++;
    }
    return counter;
}