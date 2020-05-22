---
layout: simple
title: JDojoMaster - Part 9
---

## Learning Objectives

* Working with images in Java
* Object Oriented Programming Techniques

## Recap

If you got a bit lost anywhere along the way, you can download my files for part 8 here:

- [JDojoMaster.java](src_p_8/JDojoMaster.java)
- [Scene.java](src_p_8/Scene.java)
- [Sprite.java](src_p_8/Sprite.java)
- [Spritesheet.java](src_p_8/Spritesheet.java)
- [GameController.java](src_p_8/GameController.java)

Feel free to download these and use them to get going again.

## You Lose

It's at this point that I realise I've made a mistake. Or at least made things harder for myself due to past decisions.

This happens **a lot** in software development, and particularly in games development. You'll commonly make a decision that seems like the right one, but later turns out to be too restrictive. Let's take a look at ours.

Our `gameloop()` is already doing quite a lot. Early on we added some simple code to move each baddie along the lane. It looked like this:

```
    north_lane.forEach((s)->s.movePosition(0, 32));
    south_lane.forEach((s)->s.movePosition(0, -32));
    east_lane.forEach((s)->s.movePosition(-32, 0));
    west_lane.forEach((s)->s.movePosition(32, 0));
```

We used the `.forEach()` method of the `ArrayList` type to apply a simple move to each sprite. Using the `forEach()` method simplified the code since we were only performing a very simple action for each sprite. At this stage of the game, we need to do more and referencing *other* variables (such as the player) turns out to be difficult when using `forEach()`.

We need to add some code to check to see if one of the baddies has reached the player. This part of our code is the most sensible place to put it, but we need to re-write it so that we can do more than just call `movePosition()`. So this next bit of code replaces those 4 lines we wrote a few parts ago.

Luckily, we've seen the code we need before - we used it last part to *search* for a sprite that was in a square *next* to the player, but *only when the action button was pressed*. We need to do the same again now, only we need to check every time a sprite moves to see if they've hit the player.

Let's start with just the north lane:

```
// JDojoMaster.java

        if (update_timer == 0) {    // This line already here

        Sprite spr;                 // Declare a new sprite variable to use

        for(int i=0 ; i<north_lane.size() ; i++) {  //these lines replace
            spr = north_lane.get(i);                //the forEach() bit for
            spr.movePosition(0, 32);                //just the north_lane
        }
        south_lane.forEach((s)->s.movePosition(0, -32));    // this line already here
```

Alright, so far, this does nothing different. We're simply using an explicit `for` loop to loop through each sprite in the north lane, instead of using `forEach()`. Now let's check to see if any of the sprites are overlapping the player:

```
// JDojoMaster.java

        for(int i=0 ; i<north_lane.size() ; i++) {
            spr = north_lane.get(i);
            spr.movePosition(0, 32);

            int y = spr.getY();             // These lines are new
            if (y == player.getY()) {       //
                gameOver = true;            //
            }                               //
        }
```

Don't compile it just yet though, because we've used a new variable `gameOver` that doesn't exist yet. We'll declare that at the top of our `gameloop()` method, and modify the way the game loop actually works:

```
// JDojoMaster.java

public void gameloop() {
    long timer;                 //these lines already here
    long update_timer = 80;     //

    char facing = 's';          //

    boolean gameOver = false;   // this is our new variable

    while (!gameOver) {         // we've changed this to loop while not gameOver
```

Ok, once you've made that change, you can compile and run the game. If you miss one of the baddies on the top lane, and he gets into your square, the game stops. Not great, but it'll do for now.

Now we need to repeat this for the other 3 lanes:

```
// JDojoMaster.java

    if (update_timer == 0) {

        Sprite spr;

        for(int i=0 ; i<north_lane.size() ; i++) {  // this one already here
            spr = north_lane.get(i);
            spr.movePosition(0, 32);

            int y = spr.getY();
            if (y == player.getY()) {
                gameOver = true;
            }
        }
        for(int i=0 ; i<south_lane.size() ; i++) {  // these 3 replace the forEach() versions
            spr = south_lane.get(i);
            spr.movePosition(0, -32);

            int y = spr.getY();
            if (y == player.getY()) {
                gameOver = true;
            }
        }
        for(int i=0 ; i<east_lane.size() ; i++) {
            spr = east_lane.get(i);
            spr.movePosition(-32, 0);

            int x = spr.getX();
            if (x == player.getX()) {
                gameOver = true;
            }
        }
        for(int i=0 ; i<west_lane.size() ; i++) {
            spr = west_lane.get(i);
            spr.movePosition(32, 0);

            int x = spr.getX();
            if (x == player.getX()) {
                gameOver = true;
            }
        }
```

Pay close attention to the the `movePosition()` method for each one, to make sure it's moving in the right direction, and also pay attention to whether we're checking for the `y` or `x` position (north & south are y, east and west are x).

Now the game should stop if a baddie gets you. I'm going to leave it to you to actually do something about it - you can add some code to the bottom of `gameloop()`, after the main `while` loop that displays a message and then loops until the `x` button is pressed (we already know how to check that), when pressed, it could simply set `gameOver` back to `false`.

I'm going to add one last feature. We want the game to get a little harder as we take out baddies.

Let's start by creating a new variable at the top of `gameloop()`:

```
// JDojoMaster.java

public void gameloop() {
    long timer;
    long update_timer = 80;

    char facing = 's';

    boolean gameOver = false;

    int delayTime = 120;        // this is the new line
```

Now at the bottom of the game loop, we change the delay to be variable:
```
// JDojoMaster.java

        scene.addSprite(enemy);     // this line already here

        delayTime -= 2;             // these are new
        if (delayTime < 20) {
            delayTime = 20;
        }

        update_timer = delayTime;   // this line has changed (was = 120)

```

Compile and run the game. It's subtle at first, but you'll notice that the game is getting slightly faster as you successfully beat each baddie. You can experiment with how fast it gets by changing the values in the if statement - these limit the delay and make sure it's still possible to play the game (although 20 is pretty hard!).

And that's it - we have a game. It's not a great game, but it does have a lot of potential. It's up to you now to improve it further. Here are some ideas:

1. Add a score display
2. Add a second button for a different attack
3. Maybe that attack charges as you defeat foes
4. Better graphics!
5. Add sounds!
6. High score table