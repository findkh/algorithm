function solution(array, n) {
    var answer = 0;

    array.forEach(function(arr_num) {
        if(arr_num == n) {
            answer++;
        }
    })    
    
    return answer;
}