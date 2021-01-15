function Mob(options)
{
    this.constructor(options)
}
Mob.prototype = new jaws.Sprite({})

Mob.prototype.move = function(dx, dy)
{
    this.x += dx
    this.y += dy
}
