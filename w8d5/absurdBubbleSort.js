const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}?`,
    function (answer) {
        if (answer === 'true') {
            callback(true);
        } else {
            callback(false);
        }
    });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // console.log(arr.length);
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i+1], function (greaterThan) {
            if (greaterThan) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                madeAnySwaps = true;
            }
        });
        // console.log(i);
        innerBubbleSortLoop(
            arr, i + 1, madeAnySwaps, outerBubbleSortLoop
        );
    } else if (i === (arr.length - 1)) {
        outerBubbleSortLoop(madeAnySwaps);
        // reader.close();
    }

}

innerBubbleSortLoop([5,6,2,5,1,4], 0, false,  sorted => {
    console.log('In outer loop');
});