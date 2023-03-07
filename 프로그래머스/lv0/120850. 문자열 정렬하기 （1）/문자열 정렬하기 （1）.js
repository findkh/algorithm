function solution(my_string) {
    let strArr = my_string.split('').map(Number);
    let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let answer = strArr.filter(x => numArr.includes(Number(x))).sort();    
    return answer
}