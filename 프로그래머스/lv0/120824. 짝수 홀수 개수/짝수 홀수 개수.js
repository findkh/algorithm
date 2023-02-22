function solution(num_list) {
    var answer = [];
    let odd = 0;
    let even = 0;    
    
    num_list.forEach(function(n) {
        if(n % 2 == 0) {
            even++;
        } else {
            odd++;
        }
    })
    
    answer.push(even);
    answer.push(odd);
    
    
    return answer;
}