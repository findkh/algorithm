white_pieces = list(map(int, input().split()))
correct_pieces = [1, 1, 2, 2, 2, 8]
needed_pieces = [correct - white for correct, white in zip(correct_pieces, white_pieces)]
print(*needed_pieces)