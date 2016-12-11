---
layout: simple
title: Standard Algorithms
---

## Learning Objectives

* Recognise standard algorithms
* Implement standard algorithms
* Evaluate the efficiency of a standard algorithm

## Success Criteria

| Level | Criteria | Alice | Andrew | Charles | Mantas | Mason |
|=======|==========|=|=|=|=|=|
| Pass  | Maximum / Minimum algorithm implemented | <input type="checkbox"> | <input type="checkbox"> | <input type="checkbox"> | <input type="checkbox"> | <input type="checkbox"> |
| Merit | Maximum / Minimum algorithms *timed* |
| Distinction | Maximum / Minimum / Bubble Sort algorithms implemented & timed |


## Lots of Numbers

Your first task is to download the text file below & write a python program to read the contents into a `list`.

[![Numbers.txt](resources/txticon.png)](resources/numbers.txt)

For each of the following *Standard Algorithms*, you must implement a **function** that takes a `list` as a parameter and returns an appropriate result.

## Maximum & Minimum

The Maximum algorithms is as follows:

```
FUNCTION maximum(list)
    SET biggest TO 0
    FOR number IN list
        IF number GREATER THAN biggest
        THEN
            SET biggest TO number
        ENDIF
    ENDFOR
    
    RETURN biggest
END
```

Implement this in Python.

The Minimum algorithm is very similar. Identify what needs to change and implement the `minimum` function.

## Timing

Use the `time` python package and its `clock()` function to time how long it takes to find the maximum number:

```
import time

start = time.clock()

### Do Stuff ###

stop = time.clock()

time_taken = stop - start
```

## Bubble Sort

Bubble Sort is a standard algorithm for sorting a list of items. The flow chart below describes the Bubble Sort algorithm

![Bubble Sort Flowchart](resources/BubbleSort.png)

Implement this algorithm and use it to sort the list of numbers provided in the file.

Modify your algorithm to answer the following questions:

1. How long does it take to sort the list?
2. How long does *1 loop* take to execute?
2. How many items are in the list?
3. How many times does the loop execute?