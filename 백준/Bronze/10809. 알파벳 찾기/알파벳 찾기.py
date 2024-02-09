positions = [-1] * 26

word = input().strip()

for i, char in enumerate(word):
    index = ord(char) - ord('a')
    if positions[index] == -1:
        positions[index] = i

for pos in positions:
    print(pos, end=' ')