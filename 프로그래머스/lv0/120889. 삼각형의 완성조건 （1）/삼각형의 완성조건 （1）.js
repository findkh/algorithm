function solution(sides) {
    sortArr = sides.sort();
    return sortArr[2] < sortArr[0] + sortArr[1] ? 1 : 2
}