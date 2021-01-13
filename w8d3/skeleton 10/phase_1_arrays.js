Array.prototype.uniq = function() {
    // let array be empty
    // iterate from index 0 to end
    // array.includes(ele)
    let uniqArray = [];

    for (let i = 0; i < this.length; i++) {
        let el = this[i];
        if (!uniqArray.includes(el)) {
            uniqArray.push(el);
        }
    }
    return uniqArray;
};