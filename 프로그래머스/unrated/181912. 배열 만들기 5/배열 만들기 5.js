function solution(intStrs, k, s, l) {
    var answer = [];
    
    intStrs.forEach(str => {
        var num = parseInt(str.substring(s, s + l));
        if (num > k) {
            answer.push(num);
        }
    });
    
    return answer
}