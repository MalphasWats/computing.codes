---
layout: simple
title: Registers
---

## Learning Objectives

* Identify & Describe a general purpose register
* Identify & Describe a special register
* Write a simple program in Assembly using general purpose registers.

## Success Criteria

| Level | Criteria |
|=======|==========|
| Pass  | Identify & describe general purpose registers, special registers |
| Merit | Implement a simple assembly program using general purpose registers |
| Distinction | Modify a simple assembly program using general purpose & special registers. |

## A Computer Emulator

[https://schweigi.github.io/assembler-simulator/](https://schweigi.github.io/assembler-simulator/)

## A Simple Assembly Program

```
init:
  MOV A, 0x30
  MOV D, 232

main:
  MOV [D], A
  INC D
  INC A
  CMP A, 0x39
  JBE main
  HLT
```

### Questions

* What does this program do?
* Which registers does it use?
* What does it use them for?
* What is the significance of the `0x30` value in the first instruction?


## Modifications

Modify the program given above to print out the ALPHABET (choose either upper or lower case)

### Questions

* What happens when it gets to “Y”?
* What can you do about this?