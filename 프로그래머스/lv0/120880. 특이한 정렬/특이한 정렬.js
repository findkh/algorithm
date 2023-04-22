function solution(numlist, n) {
    // 거리와 원소값을 저장할 객체 배열 생성
    let distances = [];
    for (let i = 0; i < numlist.length; i++) {
        distances.push({
            num: numlist[i],
            dist: Math.abs(numlist[i] - n)
        });
    }

    // 거리가 가까운 순서대로 정렬
    distances.sort((a, b) => {
        if (a.dist === b.dist) {
            return b.num - a.num; // 거리가 같으면 더 큰 수를 앞으로 정렬
        } else {
            return a.dist - b.dist;
        }
    });

    // 정렬된 원소값만 추출하여 배열에 저장하고 반환
    let result = [];
    for (let i = 0; i < distances.length; i++) {
        result.push(distances[i].num);
    }
    return result;
}