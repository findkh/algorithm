function solution(cipher, code) {
    let answer = '';
    let cipherArr = [... cipher];
    
    for(i = code; i <= cipherArr.length; i++) {
        if(i % code == 0) {
            answer += cipherArr[i-1];
        }
    }
    
    return answer
}