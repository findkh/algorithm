function solution(age) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return currentYear - age;
}