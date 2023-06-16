function solution(a, d, included) {
    let answer = 0;
    for (var i = 0; i < included.length; i++) {
        if (included[i]) {
            answer += (a + d * i);
        }
    }
    return answer;
}