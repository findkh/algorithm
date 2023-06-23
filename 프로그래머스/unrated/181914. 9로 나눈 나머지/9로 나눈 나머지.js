function solution(number) {
    var answer = 0;
    number.split('').forEach(i =>{
        answer+=Number(i);
    })
    return answer%9;
}