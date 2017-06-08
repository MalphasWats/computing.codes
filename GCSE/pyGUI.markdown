---
layout: simple
title: FudApp
---

## Learning Objectives

* Creating simple GUI applications in Python
* Event driven programming techiques

## Getting Started

The first thing that you need to do for this project is to create a new project folder somewhere on your computer and download the file below:

[![fudapp.py](resources/pyicon.gif)](resources/fudapp.py)
    
## API Documentation

Python 3 comes with a library for making GUI applications called `Tkinter`.

The file you downloaded above uses this library (or API) to create a program window and draw a simple text label *widget* inside it.

You can use the [Effbot Tkinterbook](http://effbot.org/tkinterbook/).

Start by using this documentation to add a *text field* widget and a *button* to the window.

## Layout Control

Take a look at the code you downloaded at the start - you can see a line that has been commented out:

```
    #label.place(x=50, y=200)
```

comment out the line above and remove the comment from this line:

```
    #label.pack()
    label.place(x=50, y=200)
```

What happens to the label widget when you run the program now?