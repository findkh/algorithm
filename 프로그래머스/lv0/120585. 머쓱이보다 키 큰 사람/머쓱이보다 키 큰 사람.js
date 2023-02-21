function solution(array, height) {
    let cnt = 0;
    array.forEach(function(i) {
        if(i > height) {
            cnt++;
        }
    })
    return cnt;
}