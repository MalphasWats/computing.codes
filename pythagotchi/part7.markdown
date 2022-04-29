---
layout: simple
title: Pythagotchi - Part 7
---

## Blinky

We need to make some changes so that once it hatches, our creature begins a new animation - You'll need to make sure you have the 2 'idle' animation frames saved as .gif files along with the other 2. Next, add these new frames to the `self.frames` list so it looks like this:

```
        self.frames = ['egg.gif', 
                       'creature.gif', 
                       'idle_frame_1.gif',
                       'idle_frame_2.gif' ]
```

Any time you create new frames for new animations, simply add them to the list here, it makes it much easier to switch between them.

Next we want to create a new animation function:

```
class Creature(object):
    def __init__(self, window, canvas, x=0, y=0):
        ...
        
    def update(self):
        ...
        
    def wobble(self):
        ...
            
    def idle(self):
        self.frame += 1
        self.animation_timer = 1
        if self.frame > 3:
            self.frame = 1
            self.animation_timer = 60
            
    def hatch(self):
        ...
        
    def draw(self):
        ...
```

this new animation simply increases the 'frame pointer' `self.frame`, then checks to see if we've gone past frame 3, resetting it to frame 1 (our normal creature frame) and waiting for a little while. Each time `update()` runs, it calls the function pointed to by `self.current_animation`, so now we need to make sure that points in the right place after our creature hatches.

Add this line to the end of the `hatch()` function:

```
        self.current_animation = self.idle
```

**Make sure you don't call the idle function by putting `()` at the end** - we're not actually calling `self.idle` at this point, just storing a pointer to that function in our `self.current_animation` function.

When you run the program now and wait a while, your creature should blink or do whatever you made your idle animation do once it hatches.

Using this technique, we can make all sorts of animations. Why don't you experiment - draw the frames for a new animation and add it to what you already have - can you make it switch between the 2?

Another thing you might want to try - When the 'blink' animation is done, we set the animation_timer to 60 - why not set it to a random number between 60 and something larger, that way there the 'blink' animation happens a bit more randomly!

The [next part is the last part. We'll look at adding some interactivity](part8.html).