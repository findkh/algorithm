function solution(s) {
    let answer = 0;
    let newArr = Array.from(s.split(' '));
    
    for(let i = 0; i < newArr.length; i++) {
        if(newArr[i+1] != "Z" && newArr[i] != "Z") {
            answer += Number(newArr[i]);
        }
    }
    
    return answer
}