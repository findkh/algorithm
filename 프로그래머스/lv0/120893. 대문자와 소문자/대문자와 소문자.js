function solution(my_string) {
    let strArr = [... my_string];
    let str = '';

    strArr.forEach(function(t) {
        str += t.charCodeAt(0) > 90 ? String.fromCodePoint(t.charCodeAt(0)-32) : String.fromCodePoint(t.charCodeAt(0)+32)
    })
    return str;
}