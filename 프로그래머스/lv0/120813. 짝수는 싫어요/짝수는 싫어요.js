function solution(n) {
    let answer = [];
    let nArr = [];
    
    for(let i = 1; i <= n; i++) {
        nArr.push(i)
    }
    
    answer = nArr.filter(arr => arr % 2 != 0);
    return answer;
}