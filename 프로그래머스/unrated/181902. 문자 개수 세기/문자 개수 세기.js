function solution(my_string) {
    const result = Array(52).fill(0);

    for (let i = 0; i < my_string.length; i++) {
        const char = my_string[i];

        if (char >= 'A' && char <= 'Z') {
            const index = char.charCodeAt(0) - 'A'.charCodeAt(0);
            result[index]++;
        } else if (char >= 'a' && char <= 'z') {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0) + 26;
            result[index]++;
        }
    }

    return result;
}