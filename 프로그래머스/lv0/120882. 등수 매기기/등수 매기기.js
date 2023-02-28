function solution(score) {
    let avgArr = [];

    score.forEach(function(i) {
        avgArr.push((i[0] + i[1]) / 2);
    })

    let sortArr = avgArr.slice().sort((a,b) => b - a);

    return avgArr.map(n => sortArr.indexOf(n) + 1);
}