function solution(my_string) {
    let strArr = [... my_string];
    let answer = 0;

    strArr.forEach(function(i) {
        if(!isNaN(i)) {
            answer += Number(i);
        }
    })

    return answer
}