function solution(my_string, queries) {
    let str = my_string.split('');

    queries.forEach(query => {
        const [start, end] = query;
        const reversed = str.slice(start, end + 1).reverse();
        str.splice(start, reversed.length, ...reversed);
    });

    return str.join('');
}
