function solution(num_list) {
    let odd = '';
    let even = '';
    num_list.forEach(i => {
        if(i % 2 != 0) {
            odd += i;
        } else {
            even += i;
        }
    })
    return Number(odd) + Number(even);
}