module.exports = function reverse (n) {
    const str = n.toString();
    const reversedStr = str.split('').reverse().join('');
    const reversedNum = parseInt(reversedStr);

    return reversedNum;
}
