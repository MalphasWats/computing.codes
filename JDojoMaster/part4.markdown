---
layout: simple
title: JDojoMaster - Part 4
---

## Learning Objectives

* Working with images in Java
* Object Oriented Programming Techniques

## Recap

If you got a bit lost anywhere along the way, you can download my files for part 3 here:

- [JDojoMaster.java][src_p_3/JDojoMaster.java]
- [Scene.java][src_p_3/Scene.java]
- [Sprite.java][src_p_3/Sprite.java]
- [Spritesheet.java][src_p_3/Spritesheet.java]

Feel free to download these and use them to get going again.

## Adding a Controller

In this part we're going to create a new controller class that handles input from the keyboard. We've seen before how Java is *event driven*. We can register an object to listen to events and respond accordingly. This is good for creating responsive applications with complex GUIs, but in simple games it can cause problems because we quite often want to control the timing of when things happen.

It's quite common in game engines to have a "Game Loop" that loops around updating objects, responding to inputs and drawing everything. Let's build a simple `GameController` to listen for keyboard events and remember the states of the buttons we're interested in.

Create a new `.java` file called `GameController.java`:

```
// GameController.java

package covid19;

import java.awt.event.KeyListener;
import java.awt.event.KeyEvent;

public class GameController implements KeyListener {

    public boolean up, down, left, right, action_1;

    public void keyPressed(KeyEvent e)
    {
        int key = e.getKeyCode();
    }

	public void keyReleased(KeyEvent e)
    {
        int key = e.getKeyCode();
    }

    /*
     * 		Not used, needs to be implemented for Interface
     */
    public void keyTyped(KeyEvent e){}
}
```

A very simple object that simply sits listening to the keyboard and not doing very much at all when a key is pressed (yet!). Notice we have 5 *public* attributes for our class for each of the possible inputs we're interested in. I've made this public because I'm lazy, it's probably not the best way to do it but it does simply things so we'll run with it.

Let's create a `GameController` object and register it as the thing listening to events:

```
// JDojoMaster.java

private void init() {
    controller = new GameController();      // Add these lines to the top
    addKeyListener(controller);             // of the init() method.

    //...   rest of the method code still here.
}
```

Don't forget to add a variable for controller at the top of the class:

```
// JDojoMaster.java

protected Scene scene;
protected Sprite player;
protected Spritesheet spritesheet;

protected GameController controller;    // this is the new line
```

Ok, we're keeping things simple. Next we'll add some code to update the action variables in the `GameController` class:

```
// GameController.java

public void keyPressed(KeyEvent e)
{
    int key = e.getKeyCode();

    if (key == KeyEvent.VK_UP) {
        up = true;
    }
    if (key == KeyEvent.VK_DOWN) {
        down = true;
    }
    if (key == KeyEvent.VK_LEFT) {
        left = true;
    }
    if (key == KeyEvent.VK_RIGHT) {
        right = true;
    }
    if (key == KeyEvent.VK_X) {
        action_1 = true;
    }
}
```

Replace the `keyPressed()` method with the code above. Whenever the Operating System detects an event, it looks at all of the applications that are interested in the particular event it just saw and passes the details of that event to it. In this case, we're registered for keyboard events, so when we receive the event it comes with the various details of that event, including which key is pressed.

The `KeyEvent` class has a great big long list of constants that define each possible key event. You can see here we're interested in `KeyEvent.VK_UP`, which is the up arrow key, and so on through the 4 cursor keys, plus the `x` key for actions.

If we detect a key press we're interested in, we simply set our action variable to `true` to indicate that we got that key.

Next we need to detect when a key is released:

```
// GameController.java

public void keyReleased(KeyEvent e)
{
    int key = e.getKeyCode();

    if (key == KeyEvent.VK_UP) {
        up = false;
    }
    if (key == KeyEvent.VK_DOWN) {
        down = false;
    }
    if (key == KeyEvent.VK_LEFT) {
        left = false;
    }
    if (key == KeyEvent.VK_RIGHT) {
        right = false;
    }
    if (key == KeyEvent.VK_X) {
        action_1 = false;
    }
}
```

Almost identical, except this time we set the action variables to `false`. Be sure to *replace* the `keyReleased()` method, don't just shove it in underneath the existing one!

## Sprite Clothes

Just before we move on to the next step and actually do something with these controls, let's add a little method to the `Sprite` class. We want to be able to change the image that is being displayed. Let's add a `setImage()` method:

```
// Sprite.java

public void setImage(BufferedImage img) {
    image = img;
}
```

Nice. We can pass in tiles from our `Spritesheet` to change how the sprite looks.

## Gameloop

Hold onto your hats, because quite a lot happens here.

First, let's create an empty gameloop method and get it running:

```
// JDojoMaster.java

public void gameloop() {
    while (true) {

        scene.repaint();
    }
}
```

Now call that method in the `main()` function:

```
// JDojoMaster.java

public static void main(String[] args) {

    JDojoMaster window = new JDojoMaster();

    window.gameloop();                      // This line is new
}
```

Ok, we have a gameloop. It's not a very good gameloop though, because it runs as fast as it possibly can, which has the potential to take up a lot of processing time. Our game isn't a very good citizen. Let's get our gameloop to run at 60Hz - 60 times per second. Since it draws every time, this means our game will run at 60 frames per second!

Replace the gameloop method with this one:

```
// JDojoMaster.java

public void gameloop() {
    long timer;
    while (true) {
        timer = System.currentTimeMillis();

        // Update

        scene.repaint();

        timer = (1000 / 60) - (System.currentTimeMillis() - timer);

        if (timer > 0) {
            try {
                    Thread.sleep(timer);
            }
            catch(Exception e){}
        }
        //else - update & draw taking too long for 60fps
    }
}
```

Java has a built-in timer object that counts milliseconds. We can use that to time how long the `scene.repaint()` (and other stuff later) takes, then sleep for the rest of the time needed to make it always take 1/60th of a second (approx 16.6 milliseconds). Whilst it's waiting, we call `Thread.sleep()`, which puts the application to sleep and lets the Operating System know that it can do other stuff if it needs to. This is a good way to wait for things.

Finally, let's actually *do* something!

Add the following code underneath the `// Update` comment in the `gameloop()` method:

```
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
```

Compile and run your program. You should be able to use the arrow keys to make your little guy face in different directions!

Cool huh!?
