def solution(s):
    result = []
    for word in s.split(' '):
        new_word = ''.join([c.upper() if i % 2 == 0 else c.lower() for i, c in enumerate(word)])
        result.append(new_word)
    return ' '.join(result)