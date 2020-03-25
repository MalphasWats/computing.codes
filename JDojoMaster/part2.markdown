---
layout: simple
title: JDojoMaster - Part 2
---

## Learning Objectives

* Working with images in Java
* Object Oriented Programming Techniques

## Recap

Previously we made a basic framework that we can use to make a simple game. It's still missing a few things, well, quite a few things, but it's a start.

If you got a bit lost anywhere along the way, you can download my files here:

- [JDojoMaster.java][src_p_1/JDojoMaster.java]
- [Scene.java][src_p_1/Scene.java]
- [Sprite.java][src_p_1/Sprite.java]

Feel free to download these and use them to get going again.

## A Sprite of Our Own

Purple [rectangles aren't very interesting][THOMAS], let's make a sprite. Our sprites are going to be 32pixels x 32pixels. You need to make a little fighting person. Here's one I made:

<img src="src/sprite.png" alt="Karate Dude">

You can use this one if you like (right-click and save the image), or create your own. [Piskel App][PISKEL] is a great online pixel editor. Be sure to export it as a `.png` file when you're done making your character. Export controls are over in the little menu bar on the right, look for the button with the little mountains on it.

Alright, save your sprite in the `src/` folder of your project. Let's modify the code to display an image rather than a pink rectangle.

We're going to *overload* the constructor for our `Sprite` class. This is a feature in the Java programming language that allows us to create methods of the same name, but with different numbers of parameters. The constructor we created earlier takes no parameters and creates a sprite with a pink rectangle. Let's create a new constructor that accepts the filename of an image to use instead:

```
// Sprite.java
public Sprite(String image_file) {
    this();
    try {
        image = ImageIO.read(getClass().getResource(image_file));
    }
    catch (Exception e) {
        // Do nothing
    }
}
```

Don't forget to import the `ImageIO` class at the top of the file:

```
// Sprite.java
import javax.imageio.ImageIO;
```

So this new constructor takes a `String` as a parameter. The first thing it does is to call the original constructor `this();`, this gives us a default pink square sprite and sets up `x` and `y`.

Next we load the image from a file. Because there's all sorts of things that could go wrong with loading files, it needs to be in a `try {} catch() {}` block. Originally I was catching `IOException`, but `getResource()` doesn't actually throw those if there's a problem, so I just got lazy and caught ALL TEH EXCEPTIONS. We don't actually need to do anything about this error, because our *default* constructor will helpfully create a pink rectangle instead and we'll know there was a problem, but the program will not crash or die or cause problems.

Modify `JDojoMaster` to use the new constructor:

```
// JDojoMaster.java

private void init() {
    player = new Sprite("/sprite.png");

    scene.addSprite(player);
}
```

Note we've modified the `init()` function, not added a new one. Also note that the filename starts with a forward slash `/`. It won't work without this (It's a security thing in Java). Your filename should be whatever you called your sprite.

If you compile and run the program, you'll be disappointed. It took *me* ages and quite a lot of swearing to work out what was wrong - my little karate guy wasn't displaying, but *neither was the pink rectangle*.

See, the thing about computers is that they do things *fast*. So fast in fact that it ends up drawing the window before the picture has completely loaded from disk.

We'll add a temporary fix to get our guy to show up - it's temporary because we're going to be changing how things are drawn later anyway.

```
private void init() {
    player = new Sprite("/sprite.png");

    scene.addSprite(player);

    scene.repaint();
}
```

If we force the scene object to repaint at the end of our `init()` function, we should see our little guy:

![Karate Guy][WINDOW]

If you're stuck with a pink rectangle, make sure your filenames are correct, and that they are saved where you think they are saved.

In the next part, we'll add some basic controls and a simple background. In the mean time, you need to create some more frames for your guy so he can face each way, and a baddie for him to fight. Something like this:

![spritesheet](src/spritesheet.png)

You can use [piskel app][PISKEL] (add frames, then export as a spritesheet), or whatever other graphics package you're comfortable with. Just make sure each frame is 32x32.

[THOMAS]: https://store.steampowered.com/app/220780/Thomas_Was_Alone/
[PISKEL]: https://www.piskelapp.com/
[WINDOW]: flavour/window2.png
