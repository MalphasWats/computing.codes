---
layout: simple
title: Maths Quiz
---

## Learning Objectives

* Decompose a problem into smaller problems or steps
* Design a solution to a given problem
* Implement a solution

## Success Criteria

| Grade | Description |
|=======|=============|
| D | Create a flowchart that roughly describes the solution to a given problem |
|   | Write a python program that implements some of the requirements |
| C | Create a flowchart that describes a solution |
|   | Write a python program that implements the requirements |
| B - A | Produce a design & solution that takes into account special cases and user input |

## System Requirements

A primary school teacher wants a computer program to test the basic arithmetic skills of her students. The program should generate a quiz consisting of a series of random questions, using in each case any two numbers and addition, subtraction and multiplication. The system should ask the student’s name, then ask 10 questions, output if the answer to each question is correct or not and produce a final score out of 10.

## Systems Analysis

Start by analysing the requirements - break it down into steps.

**Produce a flow chart to describe this system**

## Systems Development

Now you need to implement your solution. Take it one step at a time.

First, let's ask the user for their name:

```
student_name = input("Please enter your name: ")
```

Once this code has been executed, the *variable* `student_name` will contain whatever the user typed in.

Now let's generate a simple question, display it to the user and ask them for an answer:

```
student_name = input("Please enter your name: ")

num1 = 1
num2 = 1

answer = num1 + num2

print("What is %s + %s" % (num1, num2))
student_answer = input("? : ")
```