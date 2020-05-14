---
layout: simple
title: JDojoMaster - Part 8
---

## Learning Objectives

* Working with images in Java
* Object Oriented Programming Techniques

## Recap

If you got a bit lost anywhere along the way, you can download my files for part 6 here:

- [JDojoMaster.java](src_p_7/JDojoMaster.java)
- [Scene.java](src_p_7/Scene.java)
- [Sprite.java](src_p_7/Sprite.java)
- [Spritesheet.java](src_p_7/Spritesheet.java)
- [GameController.java](src_p_7/GameController.java)

Feel free to download these and use them to get going again.

## Whack 'em

We need a way to defend ourselves. The idea is that if a bad guy is in the square next to the player in any lane, the player can punch or kick them to defeat them. The player has to be facing the correct lane to do it.

There are lots of ways to keep track of all of this. We're going to keep it simple. Let's start by keeping note of which lane we're facing. The lines below dealing with the `facing` variable are new, added to the code in `gameloop()`:

```
// JDojoMaster.java

public void gameloop() {
    long timer;
    long update_timer = 80;

    char facing = 's';                                  // New line

    while (true) {
        timer = System.currentTimeMillis();

        if (controller.up) {
            player.setImage(spritesheet.getTile(1));
            facing='n';                                 // New line
        }
        if (controller.down) {
            player.setImage(spritesheet.getTile(0));
            facing='s';                                 // New line
        }
        if (controller.left) {
            player.setImage(spritesheet.getTile(3));
            facing='w';                                 // New line
        }
        if (controller.right) {
            player.setImage(spritesheet.getTile(2));
            facing='e';                                 // New line
        }

        // rest of the method code continues here.
```

Ok, now, if you remember back when we made our 'GameController' class, we tracked the cursor keys and the `x` key for `action_1`. We'll add some code that looks to see if that button is pressed, and then checks to see if we can punch a guy, but first, we need a way to find out where a sprite is (currently we can only set and move its position):

```
// Sprite.java

public int getX() {
    return this.x;
}

public int getY() {
    return this.y;
}
```

Add these methods to the bottom of the `Sprite` class. These are commonly called *getters* - in our sprite class, the `x` and `y` attributes are *protected*, meaning only the object itself can access them. This is a common pattern in Object Oriented Programming (we already made the *setter* with `setPosition()`).

We also need a way to remove a sprite from the `Scene` object:

```
// Scene.java

public void removeSprite(Sprite s) {
    sprites.remove(s);
}
```

Now we can add some code in `JDojoMaster` class:

```
// JDojoMaster.java

if (controller.action_1) {

    for(int i=0 ; i<north_lane.size() ; i++) {
        int y;
        Sprite s = north_lane.get(i);
        y = s.getY();
        if (y >= player.getY()-32 && facing == 'n') {
            north_lane.remove(s);
            scene.removeSprite(s);
        }
    }
}
```

Alright - there's a *lot* going on in this little bit of code. Firstly, we need to loop through each of the sprites in a lane. We've started with the north lane here. We can't use our clever `forEach` thing that we used to update the position - well, we *could* but BY GOLLY it's complicated to do it that way and WAAAAAAY above all of our pay grade. So we turn to a good old reliable `for` loop.

So, we loop through the north lane. We use the `size()` method of the `ArrayList` to control how many times we run the loop.

```
    for(int i=0 ; i<north_lane.size() ; i++) {
```

next we create some temporary variables to make it easier to see what's going on:

```
        int y;
        Sprite s = north_lane.get(i);
```

we can use the `get()` method of the `ArrayList` to get a reference to the sprite at location `i`.

next we get the current y position. For the north lane, we only care about the up-down position, because we know those sprites don't move side-to-side:

```
        y = s.getY();
```

Now, we check to see if the enemy is in the right part of the lane, **and** (&&) the player is facing the correct way:

```
        if (y >= player.getY()-32 && facing == 'n') {
```

we compare the y position of the sprite with the y position of the player. I couldn't remember what the numbers were, only that each square in a lane is 32 pixels, so I just made the computer do the maths for me. the && symbol is Java for logical and. Both parts have to be true - the y value of the sprite needs to be close to the player's y value AND the facing variable has to be equal to 'n' for north lane.

if that's true, we've hit a guy. Delete Him!

```
            north_lane.remove(s);
            scene.removeSprite(s);
```

It took me an embarrassing amount of time to work out why the bad guys just stopped moving whenever they got punched - I'd deleted them from the lane, so they weren't getting updated any more, but I hadn't deleted them from the scene, so they were still being drawn!!

Now we replicate this code for the other 3 lanes.

**WORD OF WARNING** - notice that for each lane, we use the same template, but the logic in the if statement changes each time for each lane. We also use the X position for the east and west lanes. If it's not working, read the code below CAREFULLY:

```
// JDojoMaster

if (controller.action_1) {

    for(int i=0 ; i<north_lane.size() ; i++) {
        int y;
        Sprite s = north_lane.get(i);
        y = s.getY();
        if (y >= player.getY()-32 && facing == 'n') {
            north_lane.remove(s);
            scene.removeSprite(s);
        }
    }
                                                    // everything below is new.
    for(int i=0 ; i<east_lane.size() ; i++) {
        int x;
        Sprite s = east_lane.get(i);
        x = s.getX();
        if (x <= player.getX()+32 && facing == 'e')
        {
            east_lane.remove(s);
            scene.removeSprite(s);
        }
    }

    for(int i=0 ; i<south_lane.size() ; i++) {
        int y;
        Sprite s = south_lane.get(i);
        y = s.getY();
        if (y <= player.getY()+32 && facing == 's')
        {
            south_lane.remove(s);
            scene.removeSprite(s);
        }
    }

    for(int i=0 ; i<west_lane.size() ; i++) {
        int x;
        Sprite s = west_lane.get(i);
        x = s.getX();
        if (x >= player.getX()-32 && facing == 'w')
        {
            west_lane.remove(s);
            scene.removeSprite(s);
        }
    }

}
```

That'll do us for this part I think. If you compile and run the game, you should be able to use the `x` key to punch the baddies as they get close.

It's a bit easy, and you can't *lose* yet. Maybe there'll be another part soon...