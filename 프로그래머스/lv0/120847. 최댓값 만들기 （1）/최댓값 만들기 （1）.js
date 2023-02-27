function solution(numbers) {
    let answer = 0;
    let numArr = numbers.sort(((a, b) => a - b));
    return numArr[numArr.length-1] * numArr[numArr.length-2];
}