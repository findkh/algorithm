function solution(strlist) {
    let answer = [];

    strlist.forEach(function(i) {
        answer.push(i.split('').length)
    })

    return answer;
}