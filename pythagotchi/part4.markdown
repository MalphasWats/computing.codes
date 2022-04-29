---
layout: simple
title: Pythagotchi - Part 4
---

## Animation

We want to be able to make the egg wobble, but we also want to be able to define different animations later on too. To do this, we're going to define each new animation as a new function in our Creature class, and then use the update() function to call it.

Let's start off creating the animation function. We'll call it `wobble()`:

```
class Creature(object):
    def __init__(self, window, canvas, x=0, y=0):
        ...
        
    def update(self):
        ...
        
    def wobble(self):
        self.x += 1
        if self.x > 103:
            self.x -= 5
            self.animation_timer = 100
        
    def draw(self):
        ...
```

The animation is very basic, it simply moves the egg to the right a little, then pulls it back again. We've also created a new attribute for our Creature class - `animation_timer`. We need to initialise this in the `__init__()` function, so add the following line:

```
        self.animation_timer = 0
```

put it just above the call to `self.window.after(5, self.update)`.

Next we want to update our `update()` function. Delete what's there currently and replace it with this:

```
    def update(self):
        if self.animation_timer == 0:
            self.current_animation()
        else:
            self.animation_timer -= 1
            
        self.window.after(5, self.update)
```

Every time our new `update()` function is called, it checks to see if the animation timer has expired (equal to zero), if it isn't, it simply decreases it by one. If it is, it calls a mysterious `current_animation()` function. We'll define that right now.
Up in your `__init__()` function, add the following line just above the `self.animation_timer = 0` line that you added a minute ago:

```
        self.current_animation = self.wobble
```

Python is very flexible with its variables. Here we're making a variable point to a whole other function! This means simply changing where `current_animation` points will cause our `update()` function to execute that animation instead, without us having to change any code! Very handy.

At this stage, you should be able to run your program and you should see your egg sit wobbling ever-so-slightly every once in a while. The frequency of this animation is controlled in the `wobble()` function, where it sets a new value for the `animation_timer` variable. Try making the animation happen more often.

See if you can define a second animation, maybe a 'hop' animation. Can you make it wobble a few times then hop, then go back to wobbling? You might need to create a new 'timer' to make that work.

Once you've played around with the very basic animations we can achieve this way, move on and we'll have a go at making some more interesting ones using different image frames.

Before we can do that though, [we need to do a bit more drawing](part5.html).