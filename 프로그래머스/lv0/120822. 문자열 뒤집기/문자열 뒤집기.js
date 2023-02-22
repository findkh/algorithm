function solution(my_string) {
    let arr = [... my_string];
    return arr.reverse().join('');
}