function solution(arr, n) {
  const result = arr.map((element, index) => {
    if (arr.length % 2 === 1) {
      return index % 2 === 0 ? element + n : element;
    } else {
      return index % 2 === 1 ? element + n : element;
    }
  });

  return result;
}