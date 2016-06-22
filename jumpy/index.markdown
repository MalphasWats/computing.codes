---
layout: simple
title: Jumpy
---

## Learning Objectives

* Creating simple GUI applications in Python
* Object Oriented Programming Techniques

## Getting Started

The first thing that you need to do for this project is to create a new project folder somewhere on your computer and download 3 files. First, download the starter Python file:

[![jumpy.py](resources/pyicon.gif)](resources/jumpy.py)
    
Next, save these two images into the same folder:

<img class="inline" src="resources/sprite_01.gif"> <img class="inline" src="resources/tile_01.gif">
    
Open the python source file. You can either use Notepad++ or IDLE. Be aware that we're using Python 3.5 for this project.

The code given sets up some basic features of a simple game framework. Look at the code and the comments and get a feel for what it's doing. If you try running the code, you should get a little window pop up that looks like this:

![Jumpy Window](resources/01-jumpy-window.png)

Close the window and look back at the source code. You should see 4 sections marked out in comments:

```     
        ################
        ## Activity 1 ##
        ################
```

and so on.

## Activity 1

The code you've been given takes care of creating a window and displaying some simple graphics but currently nothing else happens. Let's add some **gravity**

The section marked `Activity 1` should be in the `update()` method definition for the `Sprite` class. ~ line 21 or so. Add the following code underneath the placeholder:

```
        self.vy += 1                            # Gravity
        if self.vy > 12:                        # Terminal Velocity :)
            self.vy = 12
        
        self.y += self.vy                       # Move on y axis
```

Each `Sprite` we create has a set of *attributes*, you can see them defined in the `__init__()` method. `vy` represents the sprite's *velocity* in the y axis (up and down).

The first line increases the y velocity, representing gravity acting on our little wizard. The next 2 lines simply limit that velocity to 12 (this happens in the real world too - if you jump out of a plane without a parachute, you *won't* just fall faster and faster until you hit the ground. The air resistance of your body has a small braking effect which increases as you get faster. The terminal velocity of a human falling is around 53m/s. Still plenty fast enough to turn you to jam at the bottom).

The last line we added simply applies the velocity to the sprite's position on the screen. Since we're working with a co-ordinate system with the origin at the **top-left**, increasing `self.y` moves the sprite *down* the screen.

Add the new code, save the file and run it. The wizard should drop to the bottom of the screen. There's code just below where we were working that stops him falling any further past the bottom, just to make things a little clearer.

```
        # Limit the sprite inside the canvas
        if self.x > self.canvas.winfo_width(): 
            self.x = self.canvas.winfo_width()
            
        if self.x < 0:
            self.x = 0
            
        if self.y > self.canvas.winfo_height():
            self.y = self.canvas.winfo_height()
        if self.y < 0:
            self.y = 0
```

This code (you don't need to type it in, it's already there), and the 'terminal velocity' code you typed in are **standard algorithms* for limiting a variable's value.

## Activity 2

You'll probably have noticed that the wizard falls right through the floor! This isn't very useful. Let's add some **collision detection**. Find the section labelled `Activity 2`.

We have a `Tile` class, tiles are pretty simple really, they display an image at a fixed location. Let's also make tiles capable of telling if something is touching them:

```
    def collide(self, x, y):
        if x >= self.x-16 and x <= self.x+16 and y >= self.y-16 and y <= self.y+16:
            return True
        
        return False
```

This new method allows us to give any tile an x/y coordinate and it will tell us if that is inside the tile or not.

Next we need to actually make the checks! Find the `Activity 1` code you added previously. This code is responsible for moving a sprite up and down on the y-axis. Whenever we move, we want to check to see if that move has caused a collision and if it does, undo the move. Add the following code *underneath* the code you added previously:

```
        for tile in self.scene.tiles:               # Check each tile to see
            if tile.collide(self.x, self.y+16) :    # if we hit anything
                self.y -= self.vy                   # Undo move
                self.vy = 0                         # set down velocity to 0
```

Now this isn't really very efficient - we're checking *every single* tile to see if we've hit it. Since our game so far only has 3 tiles, this doesn't matter too much, but in a bigger, more complicated game we'd need to do things a little differently. So, what's it doing?

Well, first it sets up a for loop that loops through *all* of the tiles in our `Scene`. It calls the `collide()` method for each tile, giving it the sprite's current position. If it *has* hit, it undoes the move by taking off the velocity and then sets the velocity to 0 - we've landed!

## Activity 3

Ok, our world has some physics, let's add some controls. Find the `Activity 3` section. This section is the `update()` method for the whole scene. Our scene is set up to listen for key presses and make a note of 5 keys: ` W  A  S  D ` and ` space `.

Add this code under the block marker:

```
        if self.keys['W']:
            self.sprites[0].vy = -15
```

Save it, run the program and click in the window to make sure it has focus. Then press the `W` key. He jumps! It's not quite right though, because if you hold the `W` key down, the wizard just hangs around at the top of the screen! I guess some wizards can fly, but that's not really what we want in this case!

Replace the code you just added with this:

```
        if self.keys['W']:
            if self.sprites[0].can_jump:
                self.sprites[0].vy = -15
                self.sprites[0].can_jump = False
```

Save and run - Now the wizard can only jump once! Nearly there! One more change, this time to the code you added in `activity 1 & 2`. We want to be able to jump again when we hit the ground. Add a line to the code that deals with checking for collisions so it looks like this:

```
        self.y += self.vy                       # Move on y axis
        for tile in self.scene.tiles:           # Check each tile to see if we
            if tile.collide(self.x, self.y+16) :
                self.y -= self.vy               # Undo move
                self.vy = 0                     # set down velocity to 0
                self.can_jump = True            # We landed, so now can jump again
```

Note the last line - when a collision is detected, set the `can_jump` attribute to `True`. **Now** we can jump to our heart's content!

## Activity 4

Activity 4 adds the ability for our wizard to move left and right! Very exciting. Before you go off looking for the `Activity 4` block, there's some more code to add underneath `Activity 3`:

```
        if self.keys['D']:
            self.sprites[0].vx = 3
            
        if self.keys['A']:
            self.sprites[0].vx = -3
```

When `A` or `D` are pressed, we set either a negative or positive velocity for the x-axis. *Now* go find the `Activity 4` section and add some code to apply the velocity:

```
        self.x += self.vx                       # Move on x axis
        for tile in self.scene.tiles:           # Check each tile to see if we
            if tile.collide(self.x, self.y+16) :
                self.x -= self.vx               # Undo move
        self.vx = 0
```

Notice we're also checking collision again. It doesn't matter right now, because the level design doesn't make it very easy to *walk* into a block!

Save it, run it, our wizard can now walk left and right! Careful you don't jump off the platform though - there aren't any blocks below for him to collide with, he'll never be able to jump again!

## What next

If you scroll right to the bottom of the source file, you'll see some lines that look like this:

```
    scene.add_tile(0*32, 8*32)
    scene.add_tile(1*32, 8*32)                  # Add some tiles to the schene to
    scene.add_tile(2*32, 8*32)                  # create a level. Tiles are 32px
    scene.add_tile(3*32, 8*32)                  # so 3*32, 8*32 puts it in the
                                                # 3rd column, 8th row
```

add a new line underneath:

```
    scene.add_tile(5*32, 6*32)
```

Experiment by adding some more tiles, design a level!