---
layout: simple
title: JDojoMaster - Part 7
---

## Learning Objectives

* Working with images in Java
* Object Oriented Programming Techniques

## Recap

If you got a bit lost anywhere along the way, you can download my files for part 6 here:

- [JDojoMaster.java](src_p_6/JDojoMaster.java)
- [Scene.java](src_p_6/Scene.java)
- [Sprite.java](src_p_6/Sprite.java)
- [Spritesheet.java](src_p_6/Spritesheet.java)
- [GameController.java](src_p_6/GameController.java)

Feel free to download these and use them to get going again.

## MOAR Bad Guys

Let's fill in all the lanes and make it so we get a new bad guy in a random lane each 'tick'.

Start by creating 3 more `ArrayList` class attributes:

```
// JDojoMaster.class

protected List<Sprite> north_lane = new ArrayList<Sprite>();    // This line is already there
protected List<Sprite> east_lane = new ArrayList<Sprite>();
protected List<Sprite> south_lane = new ArrayList<Sprite>();
protected List<Sprite> west_lane = new ArrayList<Sprite>();
```

Next we want to create and initialise an RNG - Random Number Generator:

```
// JDojoMaster.class

import java.util.List;
import java.util.ArrayList;

import java.util.Random;                        // This line is new

public class JDojoMaster extends JFrame {
```

Add a class attribute:

```
// JDojoMaster.class

protected List<Sprite> north_lane = new ArrayList<Sprite>();
protected List<Sprite> east_lane = new ArrayList<Sprite>();
protected List<Sprite> south_lane = new ArrayList<Sprite>();
protected List<Sprite> west_lane = new ArrayList<Sprite>();

protected Random RNG;       // New line here!

```

initialise it in the `init()` method:

```
// JDojoMaster.class

private void init() {
    controller = new GameController();
    addKeyListener(controller);

    RNG = new Random();     // New Line!!

```

Cool. Now we can get a new random number whenever we need one.

Finally, we can create a different enemy for each lane in the `gameloop()` method.

```
// JDojoMaster.class

if (update_timer == 0) {

    north_lane.forEach((s)->s.movePosition(0, 32));     // This line already here
    south_lane.forEach((s)->s.movePosition(0, -32));
    east_lane.forEach((s)->s.movePosition(-32, 0));
    west_lane.forEach((s)->s.movePosition(32, 0));

    int lane = RNG.nextInt(4);
    Sprite enemy;

    if (lane == 0) {
        enemy = new Sprite(spritesheet.getTile(8));     // These were here but
        enemy.setPosition((256/2)-16, 16);              // not in an if
        north_lane.add(enemy);                          // block
    }
    else if (lane == 1) {
        enemy = new Sprite(spritesheet.getTile(11));
        enemy.setPosition((256/2)+80, (256/2)-16);
        east_lane.add(enemy);
    }
    else if (lane == 2) {
        enemy = new Sprite(spritesheet.getTile(9));
        enemy.setPosition((256/2)-16, (256/2)+80);
        south_lane.add(enemy);
    }
    else {
        enemy = new Sprite(spritesheet.getTile(10));
        enemy.setPosition((256/2)-112, (256/2)-16);
        west_lane.add(enemy);
    }


    scene.addSprite(enemy);                             // this is already here
```

Compile this and run it. You should get a new enemy in a random lane each 'tick', and they should move towards you. If you have a different background to the rubbish one I made, you'll need to put different numbers in each of the `setPosition()` method calls to line them up with your grid. You'll also have to put different numbers in the `forEach` calls at the top to move them the right amount each loop.

There are lots of different (better) ways to do what we've done here, but this works and it *should* be easy to follow. It doesn't make it easy to have different levels, or different enemies or different anything really, but we're not trying to do any of those things.

If you run this game for too long as it is now, your computer will probably eventually crash - every tick we generate a new bad guy and add it to a list that keeps growing and growing. The bad guys might not be visible on screen, but they're there, sitting in memory ready to shank your spreadsheet. Eventually, your computer will run out of memory. Isn't that fun - see how easy it is to introduce pretty serious bugs into a program without even really thinking about it?

In the next part, we'll try and fix that by making the game end if one of the bad guys gets on top of you, and make it possible to fend them off with a well-timed punch.

I bet you can't wait.