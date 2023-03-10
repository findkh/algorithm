function solution(num, k) {
    return String(num).split('').indexOf(String(k)) != -1 ? Number(String(num).split('').indexOf(String(k))) + 1 : -1
}