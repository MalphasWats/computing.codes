---
layout: simple
title: Pythagotchi - Part 2
---

## Creating a Window

We're going to be using a Python module that we haven't seen before - `Tkinter`.

Tkinter (TK Interface, don't ask what the TK stands for, because apparently it's really boring.) lets us build simple graphical interface based applications. Let's start by making a window.

Using either python IDLE or Notepad++, create a new python file (save it as *pythagotchi.py*) and type in the following code:

```
from Tkinter import *

window = Tk()

window.mainloop()
```

That last line: `window.mainloop()` is what starts the interface. GUI based applications work differently to command line applications, they have what's called an Event Listener that sits listening for things like mouse clicks and keyboard presses. In Tkinter, those Listeners sit inside the `mainloop()` function. Once that is called, the program effectively 'hangs' at that point and only responds to events (with one exception we'll see later!).

**Always make sure that `window.mainloop()` is the last line in your program.**

If you run this program, you get an empty window! Nice!

Before we get any further, let's take a moment to name our window.

Add the following line just underneath `window = Tk()`:

```
window.title("Pythagotchi")
```

Re-run it and check the window's titlebar.

## Drawing something

Ok, we have a window, but it is currently empty. We need to create a component that we can draw on. Most GUI modules/libraries provide a set of components like buttons, dropdown boxes, text boxes etc. They also usually include a canvas component for basic drawings. Let's use one.

Make sure you add this code after the window has been created but before the `mainloop()` call:

```
canvas = Canvas(window, width=200, height=220)
canvas.pack()
```

If you add that and run it, not much happens, because the canvas starts off blank! Let's try drawing a simple shape, add this line just below the `canvas.pack()` line:

```
canvas.create_rectangle(50, 50, 100, 100, fill="blue")
```

You should now see a blue rectangle! Experiment with that for a bit - the function is defined like this:

```
id = canvas.create_rectangle(x1, y1, x2, y2, fill="colour", outline="colour")
```

where `x1,y1` is the top-left corner and `x2,y2` is the bottom-right corner. Note you can also set the outline colour.

If you pass an empty string `""` to either of the colour parameters, they are set transparent and you can use any colour specified as a hexadecimal number too, e.g. `#ff00ff`.

In the [next part, we're going to display our egg.](part3.html)