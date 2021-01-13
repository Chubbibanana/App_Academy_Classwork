

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


// Array#myInject monkey-patch
