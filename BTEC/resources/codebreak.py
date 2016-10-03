import random

def generate_code():
    code = []

    for i in range(4):
        num = random.randint(0, 9)
        while num in code:
            num = random.randint(0, 9)

        code.append(num)

    return code

code = generate_code()
print(code)

for i in range(12):

    g = input("guess the code: ")
    guess = []
    for c in g:
        guess.append(int(c))

    correct_place = 0
    if guess[0] == code[0]:
        correct_place += 1
    if guess[1] == code[1]:
        correct_place += 1
    if guess[2] == code[2]:
        correct_place += 1
    if guess[3] == code[3]:
        correct_place += 1

    correct_digits = 0

    digits = []
    for digit in guess:
        if digit not in digits and digit in code:
            correct_digits = correct_digits + 1
            digits.append(digit)

    print("You have %s correct" % correct_digits)

    print("you got %s in the right place" % correct_place)

    if correct_digits == 4:
        break
    else:
        print("You have %s guesses remaining" % (12-(i+1)))
