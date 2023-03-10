function solution(n) {
    let answer = [];
    
    for(let i = 1; i <= n; i++) {
        if(n % i == 0) {
            answer.push(n/i);
        }
    }
    
    return answer.sort((a,b) => a-b);
}