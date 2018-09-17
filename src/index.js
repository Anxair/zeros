module.exports = function getZerosCount(number) {
    let countZero = 0;
    while (number / 5 > 0) {
        countZero += Math.trunc(number / 5);
        number /= 5;
    }
    return countZero;
}
