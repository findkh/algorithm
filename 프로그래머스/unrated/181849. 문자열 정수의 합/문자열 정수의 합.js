function solution(num_str) {
    let numArr = num_str.split('');
    let answer = 0;
    
    numArr.forEach(num => {
        answer += Number(num);
    })
    
    return answer;
}