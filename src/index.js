module.exports = function check(str, bracketsConfig) {
    const result = [];
    for (const char of str) {
        if (result[result.length - 1] == char) {
            result.pop();
        } else {
            const pair = bracketsConfig.find(pair => pair[0] === char);
            if (pair) result.push(pair[1]);
            else return false;
        }
    }
    return !result.length;
};
