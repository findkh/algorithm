function solution(names) {
    let groupedNames = [];

    while (names.length > 0) {
        groupedNames.push(names.slice(0, 5));
        names = names.slice(5);
    }

    return groupedNames.map(group => group[0]);
}