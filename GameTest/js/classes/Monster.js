function Monster(options)
{
    this.constructor(options)
    
    var anim = new jaws.Animation({sprite_sheet: "graphics/monsters.png", 
                                   frame_size: [16,16], 
                                   orientation: "right", 
                                   frame_duration: 60,
                                   scale_image:game_scale})
    this.animations = {}
    
    /*this.animations.idle = anim.slice(0,1)
    this.animations.moving = anim.slice(0,4)
    this.animations.right = anim.slice(5,8)
    this.animations.left = anim.slice(8,12)
    this.animations.up = anim.slice(12,16)*/
    
    this.animations.current = anim.slice(0,4)
    
    this.setImage(this.animations.current.next())
    
    this.vx = 1
    this.vy = 1
    
    this.dx = 0
    this.dy = 0
    
    this.x_prev = this.x
    this.y_prev = this.y
    
    this.hp_max = 5
    this.hp = this.hp_max
    this.hp_counter_max = 200
    this.hp_counter = this.hp_counter_max
    this.damage = 5
    this.armed = false
    
    this.alive = true
    
    this.attack_timer = 0
    this.attack_rate = 30
    
}

Monster.prototype = new Mob({})

Monster.prototype.move = function()
{
    this.x += this.dx * this.vx
    this.y += this.dy * this.vy
    
    if (tilemap.at(this.x, this.y).length > 0)
    {
        this.x -= this.dx * this.vx
        this.y -= this.dy * this.vy
    }
    
    /*if (direction == 'left')
    {
        this.x_prev = this.x
        this.x -= this.vx
    }
    
    else if (direction == 'right')
    {
        this.x_prev = this.x
        this.x += this.vx
    }
    
    else if (direction == 'up')
    {
        this.y_prev = this.y
        this.y -= this.vy
    }
    
    else if (direction == 'down')
    {
        this.y_prev = this.y
        this.y += this.vy
    }*/
}

Monster.prototype.undo_walk = function()
{
    this.x = this.x_prev
    this.y = this.y_prev
}

Monster.prototype.update = function()
{
    if (!this.alive) return;
    this.hp_counter -= 1
    if (this.hp_counter < 0)
    {
        this.hp += 1
        this.hp_counter = this.hp_counter_max
    }
    if (this.hp > this.hp_max)
    {
        this.hp = this.hp_max
    }
    
    this.setImage(this.animations.current.next())
    
    if (tilemap.lineOfSight([this.x, this.y], [scientist.x, scientist.y]))
    {
        var dx = scientist.x - this.x
        var dy = scientist.y - this.y
        if (dx < 0)
        {
            this.dx = -1
        }
        else
        {
            this.dx = 1
        }
        
        if (dy < 0)
        {
            this.dy = -1
        }
        else
        {
            this.dy = 1
        }
    }
    else
    {
        this.dx = 0
        this.dy = 0
    }
    
    this.attack_timer -= 1
    if (this.attack_timer < 0)
        this.attack_timer = 0
    
    this.move()
}

Monster.prototype.get_facing_coords = function()
{
    if (this.animations.current == this.animations.down)
    {
        return {x: this.x, y: this.y+this.height}
    }
    else if (this.animations.current == this.animations.up)
    {
        return {x: this.x, y: this.y-this.height}
    }
    else if (this.animations.current == this.animations.right)
    {
        return {x: this.x+this.width, y: this.y}
    }
    else if (this.animations.current == this.animations.left)
    {
        return {x: this.x-this.width, y: this.y}
    }
    else return {x: this.x, y: this.y}
}

Monster.prototype.attack = function()
{
    if (this.attack_timer <= 0)
    {
        this.attack_timer = this.attack_rate
        return this.damage
    }
    else
    {
        return 0
    }
}