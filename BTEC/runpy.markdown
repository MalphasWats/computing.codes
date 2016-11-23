---
layout: simple
title: Runpy
---

## Learning Objectives

| D2 - Object Oriented Programming | Classes |
| | Inheritance |
| | Methods |
| D3 - Event Driven Programming | Main loop |
| | Callback functions |
| | Events |

## Success Criteria

| Level | Criteria |
|=======|==========|
| Pass  | Identify a Class in an Object Oriented Program |
| | Explain the purpose of a *mainloop* in an event driven program |
| Merit | Explain the difference between a *Class* and an *Object* |
| | Explain the purpose of *mainloop* and *callback* functions. Give an example of types of *Event* |
| Distinction | Design new classes, making use of *inheritance* |
| | Explain the relationship between *mainloop*, *callbacks* and *events* |

## Getting Started

Start by downloading the Runpy Framework:

[![Runpy.py](/jumpy/resources/pyicon.gif)](resources/runpy.py)

Start off by reading through the code - identify the following:

* **classes** and their purpose.
* where **mainloop()** is called
* use of **inheritance**

To start with, you will need a `background` image and a `tile` image. Save these in the same folder as the code above, modify the code with your filenames & types and run the program.

## Creating a Class

The next task is to create a new `Sprite` class that **inherits** its functionality from the `Tile` class.

The new `Sprite` class needs to implement it's own `update()` **method** to enable custom behaviour later on.

Next, the `Sprite` class will need to implement a **callback** method that will be used to handle events later. Call the new method `Jump`.

## Listening for Events

...