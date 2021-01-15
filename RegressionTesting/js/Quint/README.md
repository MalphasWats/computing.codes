Quint
=====

Simple touch-based controls for Canvas games.

It started out as a controller for [JawsJS](https://github.com/MalphasWats/jaws) but jaws keeps its key press data private. I didn't want to have to modify Jaws to make this work, so Quint keeps its own data.

Just add the `.js` and `.css` files you the source, style to taste and check for touches alongside Jaws:

    if (jaws.pressed("left")  || quint.touched("left"))  { ship.move(-5, 0) }
    if (jaws.pressed("right") || quint.touched("right")) { ship.move(5, 0)  }
    if (jaws.pressed("up")    || quint.touched("up"))    { ship.move(0, -5) }
    if (jaws.pressed("down")  || quint.touched("down"))  { ship.move(0, 5)  }

There's a very basic example included.
