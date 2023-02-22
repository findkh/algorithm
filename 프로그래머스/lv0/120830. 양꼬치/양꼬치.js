function solution(n, k) {
    let answer = 0;
    let service_drink = 0

    if(n >= 10) {
        service_drink = Math.floor(n / 10)
        console.log('여기', service_drink)
    }

    return n * 12000 + (k * 2000) - (service_drink * 2000);
}