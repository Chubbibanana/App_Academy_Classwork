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