function solution(my_str, n) {
    let answer = [];
    let strArr = [... my_str];

    for(let i = 0; i < strArr.length; i += n) {
        answer.push(my_str.slice(0 + i, i + n));
    }

    return answer;
}