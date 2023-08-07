function solution(num_list, n) {
    let answer = [... num_list]
    return answer.slice(n-1);
}