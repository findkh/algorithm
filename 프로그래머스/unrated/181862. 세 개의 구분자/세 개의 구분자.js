function solution(myStr) {
  const separators = ["a", "b", "c"];
  const result = [];

  myStr.split(/[abc]/).forEach(substring => {
    if (substring !== "") {
      result.push(substring);
    }
  });

  return result.length > 0 ? result : ["EMPTY"];
}
