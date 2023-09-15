function solution(num_list) {
    var answer = 0;
    
    num_list.forEach(num => {
        answer += makeOne(num);
    });
    
    return answer;
}

function makeOne(num) {
    if (num === 1) {
        return 0;
    }
        
    if (num % 2 === 0) {
        return 1 + makeOne(num / 2);
    } else {
        return 1 + makeOne((num - 1) / 2);
    }
}