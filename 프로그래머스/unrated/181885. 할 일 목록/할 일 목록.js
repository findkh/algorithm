function solution(todo_list, finished) {
    let answer = [];

    finished.forEach((data, idx) => {
        if (!data) {
            answer.push(todo_list[idx]);
        }
    });

    return answer;
}