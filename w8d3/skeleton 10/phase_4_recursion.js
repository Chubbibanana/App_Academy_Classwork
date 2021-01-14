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

//deepDup

function deepDup(arr) {
    // base case
    if (!(arr instanceof Array)) {
        return arr;
    }
    return arr.map((el) => {
        return deepDup(el);
    });
}

console.log(deepDup([[1],[2],[3],[5,6,7],[8,2,5]]));

//bsearch
function bsearch(arr, target) {
    // assume array is sorted
    if (arr.length === 0) {
        return -1;
    }
    // round middle idx down
    let middleIdx = Math.floor(arr.length / 2);
    let idx = arr[middleIdx];

    if (target === idx) {
        return middleIdx;
    } else if (target < idx) {
        let left = arr.slice(0, middleIdx);
        return bsearch(left, target);
    } else {
        let right = arr.slice(middleIdx + 1);
        let myresult = bsearch(right, target);
        return myresult === -1 ? -1 : myresult + (middleIdx + 1);
    }
}

console.log(bsearch([1,3,5,7,8,9], 8));

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));

        return merge(left, right);
    }
}

function merge(left, right) {
    // return merged arrrayyy
    let merged = [];

    while (left.length > 0 && right.length > 0) {
        // check left or right is greater
        let myNext = (left[0] < right[0] ? left.shift() : right.shift());
        merged.push(myNext);
    }

    return merged.concat(left, right);
}

console.log(mergeSort([5,3,2,4,1]));