---
layout: simple
title: Simple Pseudocode
---

## Learning Objectives

* Apply skills learnt interpreting flowcharts
* Develop skills writing pseudocode
* Evaluate the effectiveness of an algorithm

## Password Limits

The algorithm below defines a fragment of a program responsible for logging in to a computer system. Users are only allowed 3 tries to enter their password correct.

Express this algorithm using pseudocode.

What simple change can be made to this algorithm to improve the user experience?

![Password 3 tries flowchart](resources/Password3Tries.png)

## Password Selector

This algorithm is another fragment from the same program. It enforces password rules when users are choosing new passwords. Passwords must be at least 8 characters long, include 1 capital letter and 2 numbers.

Express this algorithm using pseudocode.

![Password Selector](resources/ChoosePassword.png)

## Size converter

This algorithm allows a user to enter a dress size, along with the dress' area of origin (USA or EU) which will then be converted into UK size.

Express this algorithm using pseudocode.

![Password Selector](resources/SizeConverter.png)

What is the output of this program with the following input data?

| Origin | Size | Result |
|--------|------|--------|
| EU     | 40   |        |
| USA    | 8    |        |
| UK     | 12   |        |

## Times Tables

This algorithm asks the user to enter a number, it then shows the times table for that number.

"""BEGIN
  INPUT table

  DISPLAY "1 x " . table. " = " . 1 * table
  DISPLAY "2 x " . table. " = " . 2 * table
  DISPLAY "3 x " . table. " = " . 3 * table
  DISPLAY "4 x " . table. " = " . 4 * table
  DISPLAY "5 x " . table. " = " . 5 * table
  DISPLAY "6 x " . table. " = " . 6 * table
  DISPLAY "7 x " . table. " = " . 7 * table
  DISPLAY "8 x " . table. " = " . 8 * table
  DISPLAY "9 x " . table. " = " . 9 * table
  DISPLAY "10 x " . table. " = " . 10 * table
END"""

This algorithm is not very efficient. Why is this algorithm inefficient?

Modify the algorithm to improve its efficiency. Create a flow chart for this new algorithm.