function solution(age) {
    let answer = '';
    let numMap = new Map;
    let num = 0;

    for(let i = 97; i <= 106; i++) {
        numMap.set(String(num++), String.fromCharCode(i))
    }

    let ageArr = [... String(age)];
        
    for(let j = 0; j < ageArr.length; j++) {
        answer += (numMap.get(ageArr[j]));
    }
    
    return answer;
}