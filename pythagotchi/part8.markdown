---
layout: simple
title: Pythagotchi - Part 8
---

## Making it Interactive

Ok, there's quite a lot going on here now, but it all mostly happens without us. Let's add a button that feeds the little creature.

We're going to start by making our creature hungry - be careful from here on out, once we start creating values for hunger and happiness and so on, we should consider whether we're being cruel when we don't feed or play with our creature...

Initialise a new variable in the `__init__()` function:

```
class Creature(object):
    def __init__(self, window, canvas, x=0, y=0):
        ...
        self.timer = 300
        
        self.hunger = 0
        
        self.window.after(5, self.update)
        self.window.after(5, self.draw)
```

Now we should slowly increase this number over time. Let's make it so that it gets to 100 hunger after 5 minutes. Our `update()` function is called every 5 milliseconds. There are 300 seconds in 5 minutes, so we need to increase the `self.hunger` variable by 1 every 3 seconds. We can use the `self.timer` variable we used to time the hatching, because we only need to worry about hunger once our creature has actually hatched:

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
                self.hunger += 1
                self.timer = 60
        else:
            self.timer -= 1
            
        self.window.after(5, self.update)
```

There are 3 new lines here; if the timer is zero (and the creature has hatched) then hunger goes up by one and the timer is reset to 60.

Next we'll add a button to feed the creature. At the bottom of the file, just before we start the `mainloop()` add some new code to create a button:

```
b = Button(window, text="feed", command=pythagotchi.feed)
b.pack()
```

the command parameter tells the button what function to call when it is pressed. We don't have a `feed()` function in our Creature class, so we'll need to add that now:

```
class Creature(object):
    def __init__(self, window, canvas, x=0, y=0):
        ...
        
    def update(self):
        ...
        
    def wobble(self):
        ...
            
    def idle(self):
        ...
            
    def hatch(self):
        ...
        
    def feed(self):
        print self.hunger # Debugging
        self.hunger -= 25
        if self.hunger < 0:
            self.hunger = 0
        self.timer = 600
        print self.hunger # Debugging
        
    def draw(self):
        ...
```

You can see we've also added some basic debugging code to print out the hunger value before and after we change it. The if statement is there to limit hunger to never go below zero, and the timer is set to a much bigger number so that our creature waits a little while before starting to get hungry again.

At this stage it doesn't really do very much. The next step is to decide what happens if the creature gets too hungry, say if hunger gets to 150. Create a new frame for your creature (a 'dead' frame, or a 'really hungry' frame) and add some code in your `update()` function to switch to a new animation when hunger gets to your value (don't forget to also create a new animation function, and add the new frame to the `self.frames` list.

Here are some other things you could do at this stage:

* Track your creature's 'health' as well - if you feed it too much too quickly, it becomes unhealthy.
* Create a 'happiness' variable and a new button that feeds your creature 'snacks' instead of proper food - happiness goes up but health goes down a little. Happiness should decay over time.
* Create a mini-game of some kind (the original tamagotchi had a game where the creature would face left and right in a pattern and you had to repeat the pattern with buttons). Playing the game makes your creature happier and a little healthier too.

![Running Man](resources/running-man.gif)