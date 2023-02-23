function solution(my_string, n) {
    let answer = [];
    
    let strArr = my_string.split('');
    
    strArr.forEach(function(i) {
        answer.push(i.repeat(n))
    })
    
    return answer.join('')
}