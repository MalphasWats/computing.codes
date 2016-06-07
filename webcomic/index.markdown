---
layout: simple
title: Web Comic
---

## Learning Objective

* Using basic shapes to create an object
* Editing exisiting images
* Arranging objects to create a scene

## Creating a simple comic

Your task for this project is to create your own webcomic, using Adobe Fireworks. Start by opening up Fireworks and choosing the `Fireworks Document` option under the Create New heading.

![Adobe Fireworks](resources/01_FireworksOpen.png)

When you first open Adobe Fireworks, you'll get a screen that looks a little like this. Click the option to create a new Fireworks Document (PNG).

![Canvas size 650 x 300](resources/02_NewDocumentSize.png)

Enter the dimensions above - 650px wide, 300px high. Choose 'White' as the canvas colour. Click OK when you're done.

![New Document](resources/03_NewDocument.png)

You'll get a nice blank canvas to start creating your webcomic. At this point, you might want to switch to the layers panel in the middle-right of the application ('Pages' is selected when you start).

![Rectangle tool](resources/04_DrawingRectangles.png)

Choose the 'Rectangle' tool from the main tool pallet on the left (roughly in the middle, in the 'Vector' section). At the bottom of the app you'll see a 'Properties' tab, double click it to expand it and choose the settings to look like the picture above - you want to create an empty rectangle with a black border 3px. Draw the rectangle at the left of the canvas - this will be your first 'panel'.

![Copying Rectangles](resources/05_CopyingRectangles.png)

Using the black arrow tool from the main pallett, select the rectangle and copy it (ctrl-c), paste 2 more rectangles. Note that when you paste them, they appear all on-top of each other, you'll need to move them around and arrange them like the picture above.

Notice that I've also expanded the layers section on the right. I did this by closing the 'Optimise' tab by double clicking on it.

![Organising Layers](resources/06_OrganisingLayers.png)

Layers are really handy for organising complex drawings. In the layers section, create 2 new layer folders by clicking the little folder with a plus (+) icon at the bottom. You can rename these layer folders by double clicking them. Name them Panel 1, Panel 2 and Panel 3. Next you need to drag the rectangle layers into the right folders. Use the tiny preview images to make sure you move the right ones. Finally click the empty boxes next to the eye icons for each of the Rectangle layers to lock them so we can't move them around by accident and make sure that the 'Panel 1' layer folder is selected like the picture above.

![Import an Image](resources/07_ImportingAnImage.png)

We're going to start by importing a background image for our first panel. Choose 'Import' from the File menu.

![Place Image](resources/08_ImportedAnImage.png)

I chose a simple farm image that I found. Click anywhere on the canvas to place the image.

![Resizing an Image](resources/09_ResizingAnObject.png)

Choose the Scale Tool from the main pallett with the image selected and resize the image to fit in the whole panel. Make sure you only use the corners to resize to make sure the image doesn't get distorted. Notice that in the Layers section, I've dragged the Bitmap layer with the image on it below the rectangle. Most of the image fits in the panel, but the right hand side goes off the page. We'll fix that next.

![Apply Layer Mask](resources/10_ApplyingLayerMask.png)

Quite a lot happened here, take it one step at a time:

* First unlock the `Rectangle` layer, make sure the rectangle is selected and copy it (`ctrl-c`),
* then select the `Bitmap` layer.
* Press the `Add Mask` button at the bottom of the `Layers` section (middle button),
* the layer gets an extra box with a green border.
* Paste the rectangle into the Mask (`ctrl-v`) now only the part of the image that is inside the rectangle is shown.

Remember to lock the `Rectangle` layer again.

![Gaussian Blur](resources/11_GaussianBlur.png)

Next we're going to add some blur to the image to make it less distracting. Make sure the Bitmap layer is selected and choose `Blur > Gaussian Blur...` from the Filters menu.

![Applying Blur](resources/12_ApplyingBlur.png)

Set the blur to around about 2.5 and click `OK`

Notice that I also set the transparency of the layer to 70% - look in the `Properties` section at the bottom of the app, just to the left of where it says `Normal`. Adding a little transparency makes the image fade into the background a little.

![Ellipse Tool](resources/13_EllipseTool.png)

Now we're going to draw our characters.
Choose the `Ellipse` tool by clicking-and-holding on the Rectangle tool button in the main pallett.

![Drawing a Head](resources/14_DrawingHeads.png)

In the Properties section at the bottom, set the fill colour (paint bucket) to a skin-like colour and the outline (pencil) to black, change the outline thickness to 2 pixels.

Draw 2 circles for heads in the first panel.

![White Arrow Tool](resources/15_WhiteArrowTool.png)

A Few things happened here:

First, select the Rectangle tool again by long-pressing on the Ellipse tool. Choose a new fill colour and draw a rectangle below the first head.

Next, choose the White Arrow tool at the top-right of the main pallett. Click the rectangle you just drew, then click one of the corner handles (blue boxes). A box like the one in the picture above pops up, click `OK`

Use the White Arrow tool to change the shape of the rectangle to something more roughly body-shaped.

![Pen Tool](resources/16_PenTool.png)

You can also use the Pen Tool to grab the corner points of the shape and twist them to make curved lines. This will take some experimentation. Give it a go.

Once you're happy with the body, either copy and paste it over to the second head, or create a new body for it.

![Rounded Rectangle](resources/17_RoundedRectangle.png)

Next, draw a white filled rectangle at the top of the panel. With the rectangle selected, change the `Roundness` value in the middle section of the Properties at the bottom to give the rectangle rounded corners.

Notice that I've made myself a bit more space for the Layers section by double-clicking the Styles tab to close it.

![Selecting Points](resources/18_SelectingPoints.png)

Draw another, smaller rectangle just below the first, use the White Arrow tool to select the bottom-right corner point (click OK to convert the shape).

![Editing Shapes](resources/19_EditingShapes.png)

Hit the delete key to remove the point from the shape - you get a triangle!
You can use the Pen Tool again to shape the triangle to look more like a speech bubble.

![Combining Shapes](resources/20_CombiningShapes.png)

Using the Black Arrow tool, select the triangle speech bubble part, hold down the Shift key and select the main bubble rectangle. choose `Combine Paths > Union` from the `Modify` menu.

This joins the 2 shapes together to make 1 speech bubble shape.

![Text Tool](resources/21_TextTool.png)

Use the Text Tool to add text to the speech bubble. Change the font, size and colour in the Properties section at the bottom.
Use your own text - tell your own joke or story!

![Managing Layers 2](resources/22_ManagingLayers2.png)

You can easily copy-and-paste the characters into the second panel - make sure you select the Panel 2 layer folder before you paste the characters. You can also lock the whole Panel 1 layer folder to make sure you don't accidently move stuff around whilst you're working on other panels. It's good practice to get into the habit of organising your layers to make things easier to track.

Use these skills to create the rest of the comic - try changing the perspective in the last panel - you could use the scale tool to make the characters much bigger (and use another mask to hide any overlapping parts!), as if you'd zoomed in for the punchline!