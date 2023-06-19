function solution(numLog) {
    let str = '';
    for(let i = 1; i < numLog.length; i++) {
        let num = (numLog[i]-numLog[i-1]);
        if(num == 1) {
            str += 'w';
        } else if(num == -1){
            str += 's';
        } else if(num == 10) {
            str += 'd';
        } else {
            str += 'a';
        }
    }
    return str;
}