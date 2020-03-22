---
layout: simple
title: JDojoMaster
---

## Learning Objectives

* Working with images in Java
* Object Oriented Programming Techniques

## Getting Started

Alright, we're going to build a simple game in an effort to learn how to work with images in Java and develop our programming skills along the way.

Your first task will be to get everything installed and working. There are a whole bunch of ways to do this, but the easiest thing to do is to go and [download Eclipse][ECLIPSE].

## Activity 0

Write a simple *Hello, world!* program. Take a screenshot of the output and code together and email it to me.

## Activity 1

Alright, now that we have a working development environment, we're going to create a *new project* - it's good practice to keep things in their own project, rather than always dumping code for everything in the same project.

To start with, our new project is going to have 3 classes:

1. `JDojoMaster.java`
2. `Scene.java`
3. `Sprite.java`

Create *JDojoMaster.java* as the class with the `main()` method in it. It should look something like this:

```
// JDojoMaster.java
package covid19;

import javax.swing.JFrame;

public class JDojoMaster extends JFrame {

    static final long serialVersionUID = 0;

    public static void main(String[] args) {

        JDojoMaster window = new JDojoMaster();
    }

    public JDojoMaster() {

        setTitle("JDojoMaster");
        setResizable(false);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        setVisible(true);

    }
}
```

Compile and run that code and you'll get a tiny, empty little window. Nice.

Alright, next up we'll make a `Scene` class which extends `JPanel`. Create a new source file called `Scene.java`:

```
// Scene.java
package covid19;

import javax.swing.JPanel;
import java.awt.Dimension;

public class Scene extends JPanel {

    static final long serialVersionUID = 1;

    private int width;
    private int height;

    public Scene() {
        super();              // Make sure to call the JPanel constructor

        width = 256;          // Default width
        height = 256;         // Default height
    }

    public Dimension getPreferredSize() {
        return new Dimension(this.width,this.height);
    }

}
```

Now, pay attention here because I see lots of you making mistakes when I do things like this. We want to create a `Scene` object and add it to our `JFrame` in the `JDojoMaster` class. The code below needs to be added to the `JDojoMaster()` constructor. Don't just copy and paste it somewhere in the file! I'll labour the point this time and maybe next time, but after that I'm going to make things easier for me to type:

```
// JDojoMaster.java
package covid19;

import javax.swing.JFrame;

public class JDojoMaster extends JFrame {

    static final long serialVersionUID = 0;

    protected Scene scene;                      // This line is new

    public static void main(String[] args) {

        JDojoMaster window = new JDojoMaster();
    }

    public JDojoMaster() {

        setTitle("JDojoMaster");
        setResizable(false);
        setDefaultCloseOperation(EXIT_ON_CLOSE);    // This line was already here

        scene = new Scene();                //
                                            //    These lines are new put them
        add(scene);                         //    between the two lines that
        pack();                             //    are already there.

        setVisible(true);                          // This line was already here

    }
}
```

Compile and run and you should see a neat little window with a title and a blank area that represents our `Scene` object. It's still quite small, because we're making a small game. Small games are something that people can make by themselves or in small groups. Big games like World of Warcraft, Fortnite or Call of Duty are not. They need large teams and massive budgets.

Let's build a simple `Sprite` class, we'll start off



Purple [rectangles aren't very interesting][THOMAS], let's make a sprite. Our sprites are going to be 32pixels x 32pixels. You need to make a little fighting person. Here's one I made:

<img src="src/sprite.png" alt="Karate Dude">

You can use this one if you like, or create your own. [Piskel App][PISKEL] is a great online pixel editor. Be sure to export it as a `.png` file when you're done making your character. Export controls are over in the little menu bar on the right, look for the button with the little mountains on it.

Alright,

[ECLIPSE]: https://www.eclipse.org/downloads/
[THOMAS]: https://store.steampowered.com/app/220780/Thomas_Was_Alone/
[PISKEL]: https://www.piskelapp.com/
