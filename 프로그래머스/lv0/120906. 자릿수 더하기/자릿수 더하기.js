function solution(n) {
    let answer = 0
    let nArr = (n + '').split('');
    
    nArr.forEach(function(n) {
        answer += Number(n)
    })
    return answer;
}