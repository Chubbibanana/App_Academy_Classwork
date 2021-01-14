function range(start, end) {
    if (start === end) {
        return [];
    }

    let rangeArray = range(start, end - 1);
    rangeArray.push(end - 1);
    return rangeArray;
}

console.log(range(1, 10));


//sumRec


function sumRec(arr) {
    if (arr.length === 0){
        return 0;
    }

    let last = arr[arr.length - 1];
    return sumRec(arr.slice(0, arr.length - 1)) + last;

}

console.log(sumRec([1, 2, 3]));


//exp1

function exp1(base, exp) {
    return exp === 0 ? 1 : (base * exp1(base, exp - 1));
}


//exp2

function exp2(base, exp) {
    if (exp === 0){
        return 1;
    }

    if (exp % 2 === 0) {
        let root = exp2(base, exp / 2);
        return root ** 2;
    } else {
        let root = exp2(base, ((exp-1)/2));
        return base * (root ** 2);
    }
}

console.log(exp1(2, 3));

console.log(exp2(2, 3));

//fibonacci

function fib(n) {
    if (n < 3) {
        return [0, 1].slice(0, n);
    }

    let fibNums = fib(n - 1);
    fibNums.push(fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2]);

    return fibNums;
}

console.log(fib(5));
console.log(fib(10));