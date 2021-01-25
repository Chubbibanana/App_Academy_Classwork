

// Array#myEach monkey-patch

Array.prototype.myEach = function (myfunc) {
    for (let i = 0; i < this.length; i++) {
        myfunc(this[i]);
    }
};

[1, 2, 3, 4].myEach(num =>    
    console.log(num)
);


// Array#myMap monkey-patch

Array.prototype.myMap = function (myfunc) {
    const mappedArray = [];

    this.myEach(el => mappedArray.push(myfunc(el)) );
    return mappedArray;
};


console.log([1, 2, 3, 4].myMap(num => num * 2 ));


// Array#myReduce monkey-patch

Array.prototype.myReduce = function (myfunc, initVal) {

    let arr = this;
    if (initVal === undefined) {
        initVal = arr[0];
        arr.shift();
    }

    let result = initVal;

    arr.myEach(el => result = myfunc(result, el));

    return result;

};

console.log([1, 2, 3].myReduce((acc, el) => acc + el));



console.log([1, 2, 3].myReduce((acc, el) => acc + el, 5));


  