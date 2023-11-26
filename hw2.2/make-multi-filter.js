function MakeMultiFilter(originalArray) {
    if (!Array.isArray(originalArray)) return null;

    let currentArray = [...originalArray];

    function arrayFilterer(filterCriteria, callback) {
        // If filterCriteria is not provided, return the currentArray.
        if (!filterCriteria) {
            return currentArray;
        }

        // If filterCriteria is a function, apply it.
        if (typeof filterCriteria === 'function') {
            currentArray = currentArray.filter(filterCriteria);
        }

        // If a callback is provided and is a function, execute it.
        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }

        return arrayFilterer;
    }

    return arrayFilterer;
}

// Test cases based on your provided examples:
var arrayFilterer1 = MakeMultiFilter([1, 2, 3]);
arrayFilterer1(function (elem) {
    return elem !== 2; // check if element is not equal to 2
}, function (currentArray) {
    console.log(this); // prints [1, 2, 3]
    console.log(currentArray); // prints [1, 3]
});

arrayFilterer1(function (elem) {
    return elem !== 3; // check if element is not equal to 3
});
var currentArray = arrayFilterer1();
console.log('currentArray', currentArray); // prints [1] since we filtered out 2 and 3

function filterTwos(elem) { return elem !== 2; }
function filterThrees(elem) { return elem !== 3; }
var arrayFilterer2 = MakeMultiFilter([1, 2, 3]);
var currentArray2 = arrayFilterer2(filterTwos)(filterThrees)();
console.log('currentArray2', currentArray2); // prints [1] since we filtered out 2 and 3

var arrayFilterer3 = MakeMultiFilter([1, 2, 3]);
var arrayFilterer4 = MakeMultiFilter([4, 5, 6]);
console.log(arrayFilterer3(filterTwos)()); // prints [1, 3]
console.log(arrayFilterer4(filterThrees)()); // prints [4, 5, 6]
