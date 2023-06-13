function solution(str1, str2) {
    var answer = '';
    let str1Arr = [... str1];
    let str2Arr = [... str2];
    
    if(str1Arr.length == str2Arr.length) {
        for(let i = 0; i < str1Arr.length; i++) {
            answer += str1Arr[i];
            answer += str2Arr[i];
        }
    }
    return answer;
}