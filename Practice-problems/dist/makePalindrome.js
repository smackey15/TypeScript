"use strict";
function makePalindrome(num) {
    const arr = num.split('');
    const reversedArr = arr.slice();
    reversedArr.reverse();
    const paliArr = arr.concat(reversedArr);
    return paliArr.join('');
}
console.log(makePalindrome(12345));
console.log(makePalindrome('12345'));
