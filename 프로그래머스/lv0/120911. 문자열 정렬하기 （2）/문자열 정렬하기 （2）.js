function solution(my_string) {
    let str = my_string.toLowerCase();
    let strArr = [... str];
    strArr.sort();
    return strArr.join('')
}