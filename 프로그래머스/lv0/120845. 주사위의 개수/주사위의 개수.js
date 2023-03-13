function solution(box, n) {
    let arr = [];
    let answer = 1;
    
    box.forEach(function(i) {
        arr.push(Math.floor(i / n));
    })
    
    arr.forEach(function(i) {
        answer *= i;
    })
    
    return answer
}