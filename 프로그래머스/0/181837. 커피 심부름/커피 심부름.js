function solution(order) {
    let result = 0;
    for (let item of order) {
        if (item.includes('americano') || item === 'anything') {
            result += 4500;
        } else {
            result += 5000;
        }
    }
    return result;
}