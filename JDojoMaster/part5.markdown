---
layout: simple
title: JDojoMaster - Part 5
---

## Learning Objectives

* Working with images in Java
* Object Oriented Programming Techniques

## Recap

If you got a bit lost anywhere along the way, you can download my files for part 4 here:

- [JDojoMaster.java](src_p_4/JDojoMaster.java)
- [Scene.java](src_p_4/Scene.java)
- [Sprite.java](src_p_4/Sprite.java)
- [Spritesheet.java](src_p_4/Spritesheet.java)
- [GameController.java](src_p_4/GameController.java)

Feel free to download these and use them to get going again.

## Background

Part 5 starts us off simple. We're going to add a very basic background to our Scene.

in the `paintComponent()` method of the `Scene` class, let's start by adding a little dot in the middle of the screen:

```
// Scene.java

@Override
protected void paintComponent(Graphics g) {
    super.paintComponent(g);

    g.drawRect(this.width/2, this.height/2, 1, 1);      // This is the new line

    sprites.forEach((s)->s.draw(g));
}
```

We don't really need the dot, but it helps to make sure we've lined things up right. The `Scene` object is a `JPanel` that declares itself as 256 pixels square (that's what the `getPreferredSize()` method is for). By dividing the width and height by 2, we find the middle.

We want to draw a set of squares for our 'lanes'. Let's start with the square in the middle for our guy to stand in:

```
// Scene.java

@Override
protected void paintComponent(Graphics g) {
    super.paintComponent(g);

    g.drawRect(this.width/2, this.height/2, 1, 1);

    g.drawRect(this.width/2-16, this.height/2-16, 32, 32); // This is the new line

    sprites.forEach((s)->s.draw(g));
}
```

That draws us a 32x32 pixel square in the middle.

Now we want three on each side to make a cross. Here's the first side:

```
// Scene.java

@Override
protected void paintComponent(Graphics g) {
    super.paintComponent(g);

    g.drawRect(this.width/2, this.height/2, 1, 1);

    g.drawRect(this.width/2-16, this.height/2-16, 32, 32);

    g.drawRect(this.width/2-(16+1*32), this.height/2-16, 32, 32); // This is the new line
    g.drawRect(this.width/2-(16+2*32), this.height/2-16, 32, 32); // This is the new line
    g.drawRect(this.width/2-(16+3*32), this.height/2-16, 32, 32); // This is the new line

    sprites.forEach((s)->s.draw(g));
}
```

Now here's the bottom one:

```
// Scene.java

@Override
protected void paintComponent(Graphics g) {
    super.paintComponent(g);

    g.drawRect(this.width/2, this.height/2, 1, 1);

    g.drawRect(this.width/2-16, this.height/2-16, 32, 32);

    g.drawRect(this.width/2-(16+1*32), this.height/2-16, 32, 32);
    g.drawRect(this.width/2-(16+2*32), this.height/2-16, 32, 32);
    g.drawRect(this.width/2-(16+3*32), this.height/2-16, 32, 32);

    g.drawRect(this.width/2-16, this.height/2+(16+0*32), 32, 32); // This is the new line
    g.drawRect(this.width/2-16, this.height/2+(16+1*32), 32, 32); // This is the new line
    g.drawRect(this.width/2-16, this.height/2+(16+2*32), 32, 32); // This is the new line

    sprites.forEach((s)->s.draw(g));
}
```

Now it's up to you to fill in the top and right!

It's a very simple background, We could draw a big fancy image and draw it in the background using the same code that we used to draw the sprite. If you want ideas, there was a great game in the 80s called "International Karate":

![International Karate](flavour/international-karate.png)

Why not have a go and see if you can make a cool background. Just make sure it has some suggestion of 'lanes' like we've drawn here.
