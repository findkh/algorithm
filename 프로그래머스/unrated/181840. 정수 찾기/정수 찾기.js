function solution(num_list, n) {
    const arr = num_list.filter(num => num == n)
    return arr.length > 0 ? 1 : 0;
}