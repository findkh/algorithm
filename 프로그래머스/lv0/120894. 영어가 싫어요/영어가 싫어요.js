function solution(numbers) {
    let strToNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    strToNum.forEach((str, idx) => {
        numbers = numbers.replaceAll(str, idx);
    })
    return Number(numbers);
}