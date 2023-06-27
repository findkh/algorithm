function solution(q, r, code) {
    let answer = '';
    let codeArr = [... code];
    
    for(let i = 0; i < codeArr.length; i++) {
        if(i%q == r) {
            answer += codeArr[i];
        }
    }
    
    return answer;
}