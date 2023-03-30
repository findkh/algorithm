function solution(sides) {
    let cnt = 0;
    let max = Math.max(... sides);
    let min = Math.min(... sides);
    
    //가장 긴변이 max인 경우
    for(let i = max-min+1; i <= max; i++) {
        cnt++;
    }
    
    //나머지 한 변이 가장 긴 변인 경우
    for(let i = max+1; i < min + max; i++) {
        cnt++;
    }
    
    return cnt;
}