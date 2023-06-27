function solution(my_string, s, e) {
    let strArr = [...my_string];
    let subStrArr = strArr.slice(s, e + 1);
    subStrArr.reverse();
    strArr.splice(s, e - s + 1, ...subStrArr);
    return strArr.join('');
}