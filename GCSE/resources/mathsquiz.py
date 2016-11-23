student_name = input("please enter your name")

for q in range(10):

    num1 = 1
    num2 = 1

    answer = num1 + num2

    print("What is %s + %s" % (num1, num2))
    student_answer = input("? : ")

    student_answer = int(student_answer)

    # answer is the correct one
    # student_answer is what the person put

    if answer == student_answer:
        print("You got it right!")

    else:
        print("You got it wrong :(")


