---
layout: simple
title: Pythagotchi - Part 3
---

## Eggcelent

We're going to display our egg now. We could just throw it up in a similar way to the rectangle that we drew previously, but because we will want to add some behaviour to our egg later, we should create a new class that we can add functions to as we go.

We've seen classes before when we were creating data structures. In python, classes enabled us to store bits of information about a thing (Person, exercise etc) together. We were also able to add some simple behaviours, such as how to display as a string.

We'll create a *Creature* class, and to start with, it will just have some initialisation code for now that sets some things up for us:

```
class Creature(object):
    def __init__(self, window, canvas, x=0, y=0):
        self.x = x
        self.y = y
        self.canvas = canvas
        self.window = window
        
        self.img = PhotoImage(file='egg.gif')
        self.id = self.canvas.create_image((self.x, self.y), image=self.img)
```

This code needs to sit *at the top* of your file, just below the import statement. Notice also that `__init__()` has 2 underscores `_` each side, not just 1.

By itself, this code does nothing until we actually create a new Creature object. Add the following code at the bottom of the file, just above the `mainloop()` call:

```
pythagotchi = Creature(window, canvas, 100, 100)
```

Now we have a new object, called pythagotchi that is an instance of the Creature class.

It doesn't do much, but it does now display our egg!

Most of the rest of this project will be about adding new functions and code to our Creature class to give it new behaviours. Keep an eye on your indentation as you go, to make sure that you add things in the right place.

## It's Alive!

There's something living inside the egg and it's trying to get out.

Lets add a very simple animation and set things up so our Creature class can run some code of its own.

Because it's the first step, there's quite a few things we need to do at this stage. Let's start by creating a new function for our Creature class:

```
class Creature(object):
    def __init__(self, window, canvas, x=0, y=0):
        self.x = x
        self.y = y
        self.canvas = canvas
        self.window = window
        
        self.img = PhotoImage(file='egg.gif')
        self.id = self.canvas.create_image((self.x, self.y), image=self.img)
        
    def draw(self):
        self.canvas.coords(self.id, (self.x, self.y))
        self.img = PhotoImage(file='egg.gif')
        self.canvas.itemconfigure(self.id, image=self.img)
        self.canvas.update_idletasks()
        self.window.after(5, self.draw)
```

The `__init__()` function that we had before in is still place for this snippet, so we can make sure that the indentation is correct for the new `draw()` function which needs to be part of the Creature class.

There's not much happening here, but we're getting things ready so we can easily make changes later on and not have to worry about things getting updated. The first line updates the coordnates of our egg object on the canvas, based on the x, y values that our Creature object stores about itself. This means that if we change the x or y values somewhere, the egg will be redrawn in the new position. The rest doesn't do very much at all yet, we'll need to change it later when we add more 'frames'.

The very last line is quite important too, we'll see a bit more about it in a minute.

We saw earlier that window based applications just sit Listening for Events. We'll generate some of those a bit later on, for the moment, we just want our egg to look after itself.

At the end of the `__init__()` function, we need to add some code that will actually cause our `draw()` function to get called. Add the following line to `__init__()`:

```
        self.window.after(5, self.draw)
```

so now the whole thing should look like this:

```
class Creature(object):
    def __init__(self, window, canvas, x=0, y=0):
        self.x = x
        self.y = y
        self.canvas = canvas
        self.window = window
        
        self.img = PhotoImage(file='egg.gif')
        self.id = self.canvas.create_image((self.x, self.y), image=self.img)

        self.window.after(5, self.draw)
        
    def draw(self):
        self.canvas.coords(self.id, (self.x, self.y))
        self.img = PhotoImage(file='egg.gif')
        self.canvas.itemconfigure(self.id, image=self.img)
        self.canvas.update_idletasks()
        self.window.after(5, self.draw)
```

Running the code still does nothing new! We're still just setting things up.

`self.window.after(5, self.draw)` registers a special sort of Event. Our program will wait for the specified number of milliseconds (5) and then call the function that we specify (`self.draw`). You'll notice that we have exactly the same code at the end of the `draw()` method, so every 5 milliseconds, it gets called and our egg gets redrawn. This is a very common way of setting up games and other applications that have some graphics that need to be updated regularly.

*Look, did you see that? There's something in there, it just moved!*

Let's make it do something. As well as a draw loop we need an update loop where we can put our 'game logic'.

Create a new function for the Creature object called `update()` and create an event in `__init__()`:

```
class Creature(object):
    def __init__(self, window, canvas, x=0, y=0):
        self.x = x
        self.y = y
        self.canvas = canvas
        self.window = window
        
        self.img = PhotoImage(file='egg.gif')
        self.id = canvas.create_image((self.x, self.y), image=self.img)
        
        self.window.after(5, self.update)
        self.window.after(5, self.draw)
        
    def update(self):
        # more stuff will go here.
        self.window.after(5, self.update)
        
    def draw(self):
        ...
```

Now we have a place for our game logic, let's make an insultingly simple animation. Add the following line underneath the comment in the `update()` function, where it says `"# more stuff will go here"`:

```
        self.x += 1
```

Now something happens! It's not quite what we want though, but it's progress!

What we want to do, is to [make the egg wiggle a little bit](part4.html), like there's something inside trying to get out, pecking or clawing or beating at the sides of its little eggshell prison...