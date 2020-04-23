---
layout: simple
title: JDojoMaster - Part 6
---

## Learning Objectives

* Working with images in Java
* Object Oriented Programming Techniques

## Recap

If you got a bit lost anywhere along the way, you can download my files for part 5 here:

- [JDojoMaster.java](src_p_5/JDojoMaster.java)
- [Scene.java](src_p_5/Scene.java)
- [Sprite.java](src_p_5/Sprite.java)
- [Spritesheet.java](src_p_5/Spritesheet.java)
- [GameController.java](src_p_5/GameController.java)

Feel free to download these and use them to get going again.

## Bad Guys

We're going to add some bad guys now. First things first, we need a way to set the position of a sprite on the screen.

Add these two simple methods to the `Sprite` class:

```
// Sprite.java

public void setPosition(int x, int y) {
    this.x = x;
    this.y = y;
}

public void movePosition(int x, int y) {
    this.x += x;
    this.y += y;
}
```

Hopefully they should be self explanatory, but just in case, one sets the position to a place on the screen, and the other moves the position by an amount we give it.

Cool.

Next.

We'll create a list of baddies in each lane, so we need to import the `List` classes and create a variable for the first lane:

```
// JDojoMaster.java

import java.util.List;
import java.util.ArrayList;  // Add these at the top where they go

public class JDojoMaster extends JFrame {

    static final long serialVersionUID = 0;

    protected Scene scene;
    protected Sprite player;
    protected Spritesheet spritesheet;

    protected GameController controller;

    protected List<Sprite> north_lane = new ArrayList<Sprite>();    // This is new

    public static void main(String[] args) {
```

so the list `north_lane` will hold all the baddies that come as us from the north of the little cross we made before. Now add some code to the `gameloop()` method:

```
// JDojoMaster.java

public void gameloop() {
    long timer;
    long update_timer = 120;                     // this is new
    while (true) {
        timer = System.currentTimeMillis();

        if (controller.up) {
            player.setImage(spritesheet.getTile(1));
        }
        if (controller.down) {
            player.setImage(spritesheet.getTile(0));
        }
        if (controller.left) {
            player.setImage(spritesheet.getTile(3));
        }
        if (controller.right) {
            player.setImage(spritesheet.getTile(2));
        }

                                            // code below here is new
        update_timer -= 1;
        if (update_timer == 0) {

            north_lane.forEach((s)->s.movePosition(0, 32));

            Sprite enemy = new Sprite(spritesheet.getTile(8));
            enemy.setPosition((256/2)-16, 16);
            north_lane.add(enemy);
            scene.addSprite(enemy);

            update_timer = 120;

        }

        scene.repaint();    // not new :)
```

So, each time around our loop, we decrement a counter - our loop runs every 16.6 milliseconds, because of the `Thread.sleep()` call below where we just added this code. Each time `update_timer` gets to zero, we reset it to 120. 120*16.6 is about 2 seconds (don't worry, this took me a couple of minutes to work out why it was going so slowly when I had it waiting for 1200 each time!).

Every 2 seconds a new enemy will spawn at the top of the lane. All the other enemies will also move down a step in the lane because we call `move_position()` for each one in the `forEach` loop.

Try it.

It's not a game yet, we're taking things slowly at this stage as things get complicated. In the next part we'll choose a random lane to add a baddie to each update loop.

Last little bit, if you haven't done it already, add this to the `JDojoMaster.java` `init()` method, just beneath where you create the player sprite:

```
// JDojoMaster.java

player.setPosition(128-16, 128-16);
```

Look out, they're comin' for ya!
