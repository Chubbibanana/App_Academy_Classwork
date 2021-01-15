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
            innerBubbleSortLoop(
                arr, i + 1, madeAnySwaps, outerBubbleSortLoop
            );
            // has to be here because reader.question is asynchronous
        });
        // innerBubbleSortLoop(
        //     arr, i + 1, madeAnySwaps, outerBubbleSortLoop
        // );
        // can't be here because reader.question is asynchronous
        // console.log(i);
    } else if (i === (arr.length - 1)) {
        outerBubbleSortLoop(madeAnySwaps);
        // reader.close();
    }

}

innerBubbleSortLoop([5,6,2,5,1,4], 0, false,  (madeAnySwaps) => {

    console.log('In outer loop');
    reader.close();
});