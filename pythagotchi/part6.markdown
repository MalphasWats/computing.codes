---
layout: simple
title: Pythagotchi - Part 6
---

## Hatch

Let's add some code to make it hatch. You need to make sure that your various frames are all saved in the same folder together as individual .gif files.

We'll start off by modifying the code we already have to make it easier to manage the different 'frames' of our creature. Add the following lines to the `__init__()` function.

```
        self.frames = ['egg.gif', 
                       'creature.gif']

        self.frame = 0
```

Next we'll update the `draw()` function so that it displays the frame pointed to by the `self.frame` variable:

```
class Creature(object):
    def __init__(self, window, canvas, x=0, y=0):
        ...
        
    def update(self):
        ...
        
    def wobble(self):
        ...
        
    def draw(self):
        self.canvas.coords(self.id, (self.x, self.y))
        self.img = PhotoImage(file=self.frames[self.frame])
        self.canvas.itemconfigure(self.id, image=self.img)
        self.canvas.update_idletasks()
        self.window.after(5, self.draw)
```

We've only actually changed the second line, where we set `self.img`, so that instead of always setting the image to the egg, we set it to whatever `self.frame` is pointing at. We only currently have 2 frames, so now we need to add some code to actually switch frames!

First we'll need another timer and some way of telling if we've hatched or not, so add these lines to `__init__()`:

```
        self.hatched = False
        self.timer = 300
```

At this stage, `__init__()` should look like this:

```
class Creature(object):
    def __init__(self, window, canvas, x=0, y=0):
        self.x = x
        self.y = y
        self.canvas = canvas
        self.window = window
        
        self.img = PhotoImage(file='egg.gif')
        self.id = canvas.create_image((self.x, self.y), image=self.img)
        
        self.current_animation = self.wobble
        self.animation_timer = 0
        
        self.frames = ['egg.gif', 
                       'creature.gif']

        self.frame = 0
        self.hatched = False
        self.timer = 300
        
        self.window.after(5, self.update)
        self.window.after(5, self.draw)
```

Notice that the new code goes above the 2 `self.window.after()` lines, these should stay the last lines of the function - we don't want to start updating and drawing until everything is properly initialised

Next we'll modify `update()` to use the timer we created to hatch after a little while:

```
    def update(self):
        if self.animation_timer == 0:
            self.current_animation()
        else:
            self.animation_timer -= 1
            
        if self.timer == 0:
            if not self.hatched:
                self.hatch()
        else:
            self.timer -= 1
            
        self.window.after(5, self.update)
```

The new code looks at `self.timer` to see if it is zero, if it isn't, it just decrements it by 1. If it is zero, it checks to see if we've already hatched, if not, we call the `hatch()` function (that we need to create next!)

Create a new function as part of the Creature class:

```
class Creature(object):
    def __init__(self, window, canvas, x=0, y=0):
        ...
        
    def update(self):
        ...
        
    def wobble(self):
        ..
            
    def hatch(self):
        self.frame = 1
        self.hatched = True
        
    def draw(self):
        ...
```

If you've entered the code correctly, your program should run now. After a short wait of wobbling egg, your creature should appear! Notice that it is still wobbling though! [We'll fix that next](part7.html).