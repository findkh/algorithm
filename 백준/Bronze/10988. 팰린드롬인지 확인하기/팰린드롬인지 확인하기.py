word = input().strip()
reversed_word = list(word[::-1])

if list(word) == reversed_word:
    print(1)
else:
    print(0)