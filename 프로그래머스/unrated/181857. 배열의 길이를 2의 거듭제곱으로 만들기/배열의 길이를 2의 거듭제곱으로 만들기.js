function solution(arr) {
    const closestPowerOfTwo = Math.pow(2, Math.ceil(Math.log2(arr.length)));
    const numberOfZerosToAdd = closestPowerOfTwo - arr.length;
    return arr.concat(Array(numberOfZerosToAdd).fill(0));
}
