word = input().lower()
count = [0] * 26

for char in word:
    if char.isalpha():
        index = ord(char) - ord('a')
        count[index] += 1

max_count = max(count)
max_index = count.index(max_count)

if count.count(max_count) == 1:
    print(chr(max_index + ord('a')).upper())
else:
    print('?')