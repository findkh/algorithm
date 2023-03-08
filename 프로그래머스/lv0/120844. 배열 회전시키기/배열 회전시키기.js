function solution(numbers, direction) {
    if(direction == 'right') {
        let tmp = numbers.pop();
        numbers.unshift(tmp);
    } else {
        let tmp = numbers.shift();
        numbers.push(tmp);
    }
    
    return numbers;
}