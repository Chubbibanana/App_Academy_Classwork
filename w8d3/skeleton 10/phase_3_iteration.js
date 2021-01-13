Array.prototype.bubbleSort = function() {
    let mySorted = false;

    while (!mySorted) {
        mySorted = true;

        for (let i = 0; i < (this.length - 1); i++) {
            if (this[i] > this[i + 1]) {
                [this[i], this[i + 1]] = [this[i + 1], this[i]];
                mySorted = false;
            }
        }        
    }

    return this;
};

console.log([1,5,2,4,3].bubbleSort());

String.prototype.substrings = function () {
    let substrings = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            substrings.push(this.slice(i, j));
        }
    }

    return substrings;
};

console.log("abcdefghijklmnop".substrings());