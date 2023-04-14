function solution(arr) {
    let sum = 0;
    arr.forEach( i => sum += Number(i));
    return sum / arr.length;
}