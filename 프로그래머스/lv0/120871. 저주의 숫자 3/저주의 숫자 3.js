function solution(n) {
    let cnt = 0
    
    for(let i = 1 ; i <= n ; i ++) {
        cnt++;
        while(cnt % 3 == 0 || cnt.toString().includes('3')) {
            cnt++;
        }
    }
    
    return cnt;
}