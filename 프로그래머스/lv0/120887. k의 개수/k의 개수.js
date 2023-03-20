function solution(i, j, k) {
    let answer = 0;
    for(i = i; i <= j; i++) {
        let tmpArr = String(i).split('');
        tmpArr.filter(tmp => {
            if(tmp == String(k)) {
                answer++
            }
        })
    }
    return answer;
}