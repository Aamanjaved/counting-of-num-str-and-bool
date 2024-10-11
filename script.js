function countTypes(arr) {
    var countOfStr = 0;
    var countOfNum = 0;
    var countOfBool = 0;

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

var arr = ["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];
countTypes(arr);
