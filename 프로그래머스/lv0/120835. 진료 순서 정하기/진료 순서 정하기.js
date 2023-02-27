function solution(emergency) {
    let answer = [];
    let originArr = [... emergency];
    let emergencyArr = emergency.sort(((a, b) => b - a));
    
    originArr.forEach(function(n) {
        answer.push(emergencyArr.indexOf(n)+1);
    })
    
    return answer;
}