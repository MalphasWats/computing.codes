---
layout: simple
title: Scratch Racing
---

## Learning Objectives

* Create a simple Scratch Program
* Use `if \ else` blocks to control the flow of a program
* Respond to input from the keyboard

## Getting Started

We'll be using Scratch 2 for this project. The easiest way to access Scratch 2 is to use the web-version:

 <a href="https://scratch.mit.edu/projects/editor/?tip_bar=home" target="_blank">Scratch 2 Web App</a>

Once the page has loaded, we'll want to make a bit of room. Click the close button to hide the "Tutorials" pane:

![Hide Tips Panel](resources/01-hide-tips-panel.png)

Next, click on scratch the cat down in the sprites pane and delete the sprite - we'll be creating our own!

![Delete Scratch the Cat](resources/02-delete-scratch-sprite.png)

## Drawing a Car

We need to draw a racing car. There are 3 important things we need to keep in mind:

1. It must be **top down** view, as if you were looking at it from above
2. It needs to be facing (driving) to the right ->->->
3. It shouldn't be too big

Create a new sprite:

![New Sprite](resources/03-new-sprite.png)

Use the drawing tools to draw a racing car:

![Drawing Tools](resources/04-drawing-tools.png)

Make sure it's pointing in the right direction!

![Car Sprite](resources/05-car-sprite.png)

## Drawing a Track

With the car done, the next task is to create a racetrack. Click the *Stage* on the right to select it and make sure the "Backdrops" tab it selected at the top:

![Edit Stage](resources/06-edit-stage.png)

Use the drawing tools to draw a track. We need to make sure it fills the whole stage and has a nice wide road.

![Draw Track](resources/07-draw-track.png)

At this point, you might find that your car is a little too big or too small. Click the car sprite in the "Sprites" panel and use the resize tools to make it bigger or smaller:

![Resize Car](resources/08-resize-car.png)

## Programming the Car

Select the car sprite from the sprite pane at the bottom and click the `Scripts` tab in the middle pane. **Make sure you are definitely adding scripts to the car, not the stage!**

Add a <img src="resources/09-green-flag.png" class="inline"> block from the yellow `Control` section:

![Resize Car](resources/10-green-flag-script.png)

We want our car to behave a little bit like a real car – accelerating up to speed when we press the *up* arrow key. To do this, we need to create a variable to hold the speed that the car is going at.

From the orange `Variables` section, click the `Make a variable` button. Give it the name speed and choose the `For this sprite only` option, because we want the speed to only be associated with our car sprite:

![Make Speed Variable](resources/11-speed-variable.png)

Now that we have a variable, we should initialise it whenever our game starts. Add a new block from the orange `Variables` section just underneath the green flag block:

![Initialise Speed Variable](resources/12-initialise-speed.png)

Now every time we start our game by clicking the green flag button, the speed of the car will always start at 0.

Next, we need to create a game loop that checks to see if the *up arrow* key is being pressed. If it is, we increase the speed by a little bit:

![Accelerator](resources/13-accelerator.png)

Notice that we need a `forever  loop` and an if/else block from the yellow `Control` section, a `key <up arrow> pressed?` block from the blue `Sensing` section and a `change <variable> by x` block from the orange `Variables` section.

If you click the green flag at this stage and press the *up-arrow* on the keyboard – nothing happens, although you might notice that the value in the speed variable displayed in the game window goes up. Make sure your speed is only going up a little bit at a time.

Next we need to actually move the car forwards based on its speed. Add a dark-blue `Motion` block just before the end of the `forever loop`:

![Transmission](resources/14-add-move-block.png)

Notice that instead of typing a number in the `move <number> steps` block, we've dragged the speed variable from the orange `Variables` section and dropped it into the number slot. This means our car will move the number of steps stored in our speed variable each time the loop goes around.

If we click the green flag now, and press the up-arrow on our keyboard, our car will start moving to the right, faster and faster until it hits the side of the screen!

Not quite what we want, but definitely a start! Let's get the car to slow down when we aren't pressing the *up-arrow* key.

To do this, we need to add some blocks into the `else` part of the `if/else` block we added earlier. "If a key is pressed, increase the speed, else decrease the speed.":

![Decelerator](resources/15-decelerator.png)

One block added to the `else` part of the `if/else` block that changes the speed variable by `-0.2` if the *up-arrow* key isn't being pressed.

Click the green flag button again – Oh no! If we don't immediately press the up-arrow key, our car starts going backwards! Hold down the *up-arrow* key for a little while and eventually the car starts moving forward again!

We need to **limit** the speed variable, so that it never goes below zero. We should probably also limit it so it never goes higher than a maximum speed. Let's say 8.0 is our maximum speed.

Add a simple `if` block to both parts of the `if/else` block we've been working on:

![Speed Limit](resources/16-limit-speed.png)

There's quite a lot going on in this part, notice that we've used blocks from the green `Operators` section in the new `if` blocks. "If the speed variable is bigger than 8, set speed to 8" and "if the speed variable is smaller than 0, set speed to 0".

These two if statements ensure that the speed can never be too big, or too small.

Press the green flag button now and see what happens when you press the up-arrow!

Next we need to add some steering. Watch the placement of these next blocks, because it's really easy to put them in the wrong place:

![Steering](resources/17-turn-right.png)

New blocks have come from the yellow `Control` section for the `if`, light-blue `Sensing` for the `key <right arrow>` and dark-blue `Motion` for the `turn <right> 5 degrees`.

Make sure you put them in the right place – these blocks need to go **just above** the `move <speed> steps` block, but not inside the `if/else` block we've been working on previously.

Try the green flag button – we should now be able to turn the car to the right using the right-arrow key!

You're on your own now! Your first task is to get the car steering to the left as well! (hint: use the right-turn we just did to help you!).

Once you have your racer working turning left & right, try some of these challenges, or come up with your own!

If you got stuck, you can [download the final working game](resources/ScratchRacing.sb2)

### Challenges

*	Add a reverse that lets the car go backwards when the down-arrow key is pressed
*	Use the <img src="resources/18-touching-colour.png" class="inline">  combo to slow the car down if you leave the track. You could even try and make the steering go all wobbly by using another variable.
*	Can you add a second car controllable using the <WASD> keys on your keyboard – race against a friend!
*	Can you use the `touching color` block to detect when the car crosses the start/finish line and keep a count of the number of laps completed?
*	In the light-blue `Sensing` section there is a timer block with a built-in timer variable. Can you use this to somehow show a lap-time?
*	How about create some new car costumes that show dents and other damage when you hit obstacles on the track?
