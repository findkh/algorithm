arr = []
for _ in range(9):
    n = int(input())
    arr.append(n)

max_value = max(arr)
max_index = arr.index(max_value)

print(max_value)
print(max_index + 1)