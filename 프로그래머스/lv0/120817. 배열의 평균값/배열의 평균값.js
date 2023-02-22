function solution(numbers) {
    let answer = 0;
    let sum = 0;
    
    numbers.forEach(function(num) {
        sum += num;    
    })
    
    return sum / numbers.length;
}