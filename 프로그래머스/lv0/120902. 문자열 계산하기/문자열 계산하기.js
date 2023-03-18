function solution(my_string) {
    let arr = my_string.split(' ');
    let answer = Number(arr[0]);

    arr.forEach((e, idx) => {
        
        if(e == '+') {
            answer += Number(arr[idx+1]);
        }

        if(e == '-') {
            answer -= Number(arr[idx+1]);
        }
    });

    return answer;
}