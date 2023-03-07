function solution(s) {
  var uniqueChars = Array.from(new Set(s.split('').filter(function(c) {
    return s.split(c).length - 1 == 1;
  })));
  
  return uniqueChars.sort().join('');
}