---
layout: simple
title: Python Racing
---

## Learning Objectives

* Develop Artwork for a specific project
* Recognise a Class in python code
* Make use of external code libraries
* Working within constraints

## Getting Started

We'll be using Python 3 for this project.

First, you need to download these two python files. Save them in a new project folder:

[![racer.py](resources/pyicon.gif)](resources/racer.py) [![pyxel.py](resources/pyicon.gif)](resources/pyxel.py)

You should already have your car and track tiles, but if you want to use these ones to get started, you can:

[![tiles.png](resources/tiles.png)](resources/tiles.png)


## Creating a track

Your first task is to create a track tile map. Find the following code in the `racer.py` file:

```
track = [ 5, 7, 7, 7, 4, 
          2, 8, 8, 8, 2,
          2, 8, 8, 8, 2,
          2, 8, 8, 8, 2,
          6, 7, 7, 7, 3 ]
```

This defines a tile map. The first line, `5, 7, 7, 7, 4` is telling the game to use tile 5, tile 7 three times then tile 4. Remember that python starts counting from **0**.

You can change the tiles to create a new,  more interesting track. If you change the dimensions of the track, you will also need to change these variables:

```
track_width = 5
track_height = 5
```

You might also want to experiment with changing the values at the top of the file:

```
WIDTH = 320
HEIGHT = 320
SCALE = 2
```

What do each of these do?

## Developing it further

The tiles you drew and used to create this track only allow for *right-angled turns*. Can you create some new tiles that allow for different types of bend?