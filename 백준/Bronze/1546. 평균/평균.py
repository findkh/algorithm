N = int(input())
scores = list(map(int, input().split()))
M = max(scores)

adjusted_scores = [score/M*100 for score in scores]
new_average = sum(adjusted_scores) / N
print(new_average)