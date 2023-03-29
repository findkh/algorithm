function solution(array) {
    let result = array.join('').split('').filter(n => n == '7');
    return result.length;
}