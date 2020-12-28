function mean(a,b,c) {
    return (a+b+c)/3
}

console.log(mean(1,2,3));

function mean(...args) {
    let sum = 0;
    for (let arg of args) {
        sum = arg + sum
    }
    return sum /3
}

console.log(mean(1,2,3))


function mean(...args) {
    return args.reduce((acc,val) => acc + val) / args.length;
}

console.log(mean(1,2,3))


function mean(...args) {
    return args.filter(x => x%2 == 0).reduce((acc,val) => acc + val) / args.length;
}

console.log(mean(1,2,3,8))