const reverseString = function(s) {
    res = ''
    sArr = s.split('');

    for (let i = sArr.length - 1; i > -1; --i) {
        res += sArr[i];
    }

    return res
};

// Do not edit below this line
module.exports = reverseString;
