function solution(n) {
    let cnt = 1;
    
    //최소 공배수 
    while(true) {
        if(cnt % n  == 0 && cnt % 6  == 0) {
            break;
        }
        cnt++;
    }
    
    return cnt/6;
}