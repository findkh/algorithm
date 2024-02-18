sentence = input()

def count_words(sentence):
    words = sentence.split()
    return len(words)

print(count_words(sentence))