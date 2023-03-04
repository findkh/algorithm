function solution(my_string) {
    let strArr = [... my_string];
    let result = strArr.filter((v, i) => strArr.indexOf(v)=== i);
    return result.join('');
}