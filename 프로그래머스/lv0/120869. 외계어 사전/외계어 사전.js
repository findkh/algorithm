function solution(spell, dic) {
    for (let i = 0; i < dic.length; i++) {
        let word = dic[i];
        if (spell.every(c => word.includes(c)) && word.split('').every(c => spell.includes(c))) {
          return 1;
        }
    }
    return 2;
}