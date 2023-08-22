function solution(num_list) {
    if (num_list.length >= 11) {
        let result = 0;
        num_list.forEach(num => {
            result += num;
        });
        return result;
    } else if (num_list.length <= 10) {
        let result = 1;
        num_list.forEach(num => {
            result *= num;
        });
        return result;
    }
}
