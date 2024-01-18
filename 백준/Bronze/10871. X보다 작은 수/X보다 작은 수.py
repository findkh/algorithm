n, x = map(int, input().split())
arr = list(map(int, input().split()))
result = []

for num in arr:
    if num < x:
        result.append(num)

print(" ".join(map(str, result)))