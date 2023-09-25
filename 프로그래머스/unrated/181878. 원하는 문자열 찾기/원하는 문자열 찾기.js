function solution(myString, pat) {
    myString = myString.toLowerCase();
    pat = pat.toLowerCase();

    for (let i = 0; i <= myString.length - pat.length; i++) {
        const subString = myString.substring(i, i + pat.length);
        if (subString === pat) {
            return 1;
        }
    }

    return 0;
}
