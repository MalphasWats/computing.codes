---
layout: simple
title: Simple Pseudocode
---

## Learning Objectives

* Working with 2-dimensional arrays
* Nested loops
* Displaying things on the screen

## Success Criteria

1. A working python program...
2. ...that meets the requirements

## Treasure Hunt

Create a simple treasure hunt game, using a two-dimensional array of integers 10 by 10.

In a random position in the array store the number 1 then ask the user to enter coordinates where they think the treasure is. If there is a 1 at this position display ‘success’. Repeat until they find the treasure.

The two-dimensional array should be displayed as a grid on the screen. Show the grid co-ordinates across the top and down the left (x & y). Until each position is uncovered, it should be shown with a '?' symbol.

### Extension

When the player makes a wrong guess, they should be given a clue:

| ? | ? | ? |
| ? | X | ? |
| ? | ? | *1* |

Warm - the `1` is within the [Moore Neighbourhood](https://en.wikipedia.org/wiki/Moore_neighborhood)

| ? | ? | ? |
| ? | X | ? |
| ? | ? | ? |

Cold - the `1` is not within the Moore Neighbourhood.

## Decomposition

Your first task when solving problems like this is always the same: **Decomposition**. You need to break the problem down into small steps that you can implement a little bit at a time. There are lots of ways to achieve this; flowcharts and pseudocode are two ways and you may use these if you wish.

A simpler way is to break the problem down into a list of sub-tasks:

1. Create a 2-dimensional array, 10 x 10
2. Fill it with integers (which aren't the number 1)
3. Pick a random slot in the array and replace the value with `1`
4. Explain the game to the user
5. Ask the user to choose a position using `x & y` coordinates
6. Check to see if there's a `1` at that location
7. Tell the user if they found the spot or not
8. Loop until they find the treasure
9. Display the grid nicely on the screen

Some of these sub-tasks are easier than others, but the last one is probably the trickiest, so we're leaving that one until last.

## Task 1 - 2-d arrays

A 2-dimensional array is an array of arrays. That is, each item in the first array is another array! Let's look at some simple python code:

```
treasure_map = [ [5, 9, 6],
                 [2, 0, 3],
                 [7, 4, 8] ]

print(treasure_map[1][2])    # prints '3'
print(treasure_map[0][1])    # prints '9'
print(treasure_map[2][2])    # prints '8'
```

in the code above, the variable `treasure_map` is created as a `3 x 3` 2-dimensional array. Creating a 10 x 10 array like this can be a little tiresome though so let's look at another way to do it:

```
treasure_map = []               # Create an empty array

for y in range(10):
    row = []                    # Create another empty array
    for x in range(10):
        row.append(0)           # Append a 0 to the row array
        
    treasure_map.append(row)    # row has 10 things in it, 
                                # append it to the treasure_map
```

Here we're using a *nested loop*. The outer loop runs 10 times, for each of those 10 times, the inner loop also runs 10 times. We end up with a 2-dimensional array filled with zeroes and we didn't have to types a whole load of `[ , ]`!

## Task 3 - Pick a random slot for a 1

There is no task 2, because we actually ended up covering that when we did task 1.

You should be an old hand at generating random numbers by this point. Let's generate 2 and use them as `x & y` coordinates:

```
import random

x = random.randint(0, 9)
y = random.randint(0, 9)

treasure_map[x][y] = 1
```

*Done*.

## Task 4 - Explain the game

```
print(""" Welcome to Treasure Hunt!

  Can you find the pirate treasure 
  hidden somewhere secret?""")
```

It's a game, make it fun!

## Task 5 - User input

We can do this a few ways. The easy way:

```
x = input("Please enter an x coordinate")
y = input("Please enter a y coordinate")
```

or the slightly less easy way:

```
coords = input("Please enter the coordinates for the treasure - x,y :")
coords = coords.split(',')

x = coords[0]
y = coords[1]
```

`.split(',')` takes a string and finds all of the instances of the string you give it (`','`) and splits the string into pieces, returning a list of pieces.

**DON'T FORGET**: `input()` returns a string and we will need **INTEGERS** for array indexes. 

## Task 6 - Check for a 1

Now we use the coordinates to look into the array to see what's there:

```
if treasure_map[x][y] == 1:
    print("Hooray! You found the treasure")
else:
    print("Sorry, you didn't find it this time")
```

Ooh look, we ended up doing *Task 7* too!

## Task 8 - Loops

In pseudocode, this would be a `REPEAT - UNTIL` loop: Repeat until treasure found. Python doesn't have repeat-until loops, but they are easy to simulate using a `while` loop and the `break` key word:

```
while True:
    # do all the stuff from 5 - 7
    
    if treasure_map[x][y] == 1:
        print("Hooray yadda yadda...")
        break
    # and so on
```

## Task 9 - Display things nicely

Things get tricker here, we want to display the grid, showing the user where they've already looked for treasure. We'll need to keep track of where they have and haven't looked. There are a couple of ways we could do this. We *could* create a whole new 2-d array, fill it with `False` and mark off as `True` whenever the player makes a guess. Then when we display the grid, we check this 'shadow' array to see if we should show its contents or the '?' symbol.

Or, we could **cheat**.

So far, our game isn't all that exciting, because our grid is mostly full of zeroes, and whilst zero is probably the most interesting number, you can have too much of a good thing. So, when the player makes a guess and gets it wrong, why not generate a random number between 2 and 9 (or some other number but let's keep things simple), shove *that* in the `treasure_map` array, then we know when we come to display the grid, zero means they haven't looked there yet. Any other number gets displayed (unless it's the number 1!):

```
while True:
    # stuff 5 - 7
    
    # if 1: hooray...
    
    else:
        print("Sorry, you didn't find it this time")
        num = random.randint(2, 9)
        treasure_map[x][y] = num
        
    # display the grid
```

You're on your own here now - displaying the grid is more complex, so the first thing you need to do is...

**DECOMPOSE**!

Break this problem down again into yet-smaller tasks and do each bit at a time.