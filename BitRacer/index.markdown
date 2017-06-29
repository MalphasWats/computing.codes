---
layout: simple
title: BitRacer
---

## Learning Objectives

* Use simple *Sequences* of instructions
* Repeat sequences of instructions using *Loops*
* Use *Selection* to choose different sequences to execute

## Getting Started

For this project, we'll be programming a simple game for the BBC Microbit.

You'll need to use the **[Microsoft Block Editor](https://makecode.microbit.org/)** to create your program.

When you load the website for the first time, you should see a screen that looks something like this:

![Block Editor](resources/01.png)

## Initialisation

There are 2 blocks given to us in all new projects `on start` and `forever`.

1. **on start** - blocks inside here run once as soon as the microbit is powered on.
2. **forever** - once the `on start` has completed, blocks inside here will be repeated until the microbit is turned off.

We use the `on start` block to *initialise* our programs, that is, to set things up to their starting values.

Let's start by creating a `playerCar` variable and creating a new *sprite*.

In the `Variables` menu, click the `Make a Variable` button at the very top

![Block Editor](resources/02.png)

and enter the variable name `playerCar` in the pop-up box

![Block Editor](resources/03.png)

next drag in the `Set item to` block

![Block Editor](resources/02.png)

and drag it into the `on start` block. Click on `item` and choose `playerCar` from the drop down.

![Block Editor](resources/04.png)

Next click the `Advanced` menu and choose the `create sprite at` block from the `Game` menu

![Block Editor](resources/05.png)

connect it to the `set playerCar to` block and enter the correct values for `x` and `y`

![Block Editor](resources/06.png)

Notice at this point that there is now an LED switched on in the simulator microbit! This is the car that we will be controlling in our game.

## Listening for Events

We want to be able to steer our car left and right using the **A** and **B** buttons. Let's add the code for that next.

Start by dragging an `on button A pressed` block from the `Input` menu. 

![Block Editor](resources/07.png)

These blocks sit separately to the `on start` and `forever` blocks and set up what are called *event listeners*. Code inside these blocks only runs when a matching event occurs.

![Block Editor](resources/08.png)

When button **A** is pressed, we want our car to move *left*. We do this by changing the `x` value of our car sprite. 

![Block Editor](resources/09.png)

You can think of the grid of LEDs a bit like a graph - the x axis runs across the microbit left-to-right and the y axis runs top-to-bottom. Since our car starts in the middle, and we want to move to the left, we need to *decrease* the car's `x` value:

![Block Editor](resources/10.png)

Do the same again, but change the `on .. pressed` button to listen for an event from the **B** button

![Block Editor](resources/11.png)

and instead of decreasing `x` we want to *increase* it

![Block Editor](resources/12.png)