---
layout: simple
title: Igpay Atinlay
---

## Learning Objectives

* Working with strings
* Defining functions with parameters
* Developing Algorithms

[Success Criteria](http://computing.codes/2016/10/10/igpay-atinlay.html)

## Language Rules

For words that begin with a **CONSONANT** sound, all letters before the first VOWEL are placed at the end of the word, followed by the letters 'ay'.

Words beginning with a **VOWEL**, simply add 'way' to the end.

Write a program that translates *sentences* into pig latin.


## Building Blocks

```
#igpay atinlay

#revision
sentence = "my hovercraft is full of eels"
words = sentence.split(' ')

print(words[1]) # prints 'hovercraft'

#New things - array/list slices

word = words[1]
first_part = word[0:1]
second_part = word[1:]

middle = word[2:4]

print(first_part) # prints 'h'
print(second_part) # prints 'overcraft'
print(middle)

# Finding the index of a thing in a list

index = word.index('v')
print(index) # prints '2'

first_part = word[:index]   # first_part = 'ho'

# functions with parameters

def first_letter(a_word):
    print(a_word[0])

first_letter('biggles')
```

## Solution Framework

```
#igpay atinlay

def is_vowel(letter):
    return letter in 'aeiouy'

def translate_word(word):
    #you need to implement this function
    return word


### MAIN PROGRAM ###
#print(is_vowel('a')) # True
#print(is_vowel('b')) # False

sentence = "my hovercraft is full of eels"
words = sentence.split(' ')

for word in words:
    print(translate_word(word))

```

