function solution(myString, pat) {
    const str = myString.split('').map(char => (char == 'A' ? 'B' : 'A')).join('');

    for (let i = 0; i <= str.length - pat.length; i++) {
        if (str.slice(i, i + pat.length) == pat) {
            return 1;
        }
    }

    return 0;
}