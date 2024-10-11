function countTypes(arr) {
    let countOfStr = 0;
    let countOfNum = 0;
    let countOfBool = 0;

    // Recursive function to handle nested arrays
    function recursiveCount(arr) {
        arr.forEach(element => {
            if (typeof element === 'string') {
                countOfStr++;
            } else if (typeof element === 'number') {
                countOfNum++;
            } else if (typeof element === 'boolean') {
                countOfBool++;
            } else if (Array.isArray(element)) {
                recursiveCount(element);
            }
        });
    }

    recursiveCount(arr);

    alert(`Numbers: ${countOfNum}`);
    alert(`Strings: ${countOfStr}`);
    alert(`Booleans: ${countOfBool}`);
}

// Test the function
let arr = ["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];
countTypes(arr);
