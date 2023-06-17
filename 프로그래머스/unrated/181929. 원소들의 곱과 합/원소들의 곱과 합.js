function solution(num_list) {
    let sum = 0;
    let mul = 1;
    
    num_list.forEach(i => {
        sum += i;
        mul *= i;
    })
    return sum**2 > mul ? 1 : 0;
}