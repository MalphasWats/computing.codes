function Player(options)
{
    this.constructor(options)
    
    var anim = new jaws.Animation({sprite_sheet: "graphics/scientist.png", 
                                   frame_size: [16,16], 
                                   orientation: "right", 
                                   frame_duration: 90,
                                   scale_image:game_scale})
    this.animations = {}
    
    this.animations.idle = anim.slice(0,1)
    this.animations.down = anim.slice(0,4)
    this.animations.right = anim.slice(4,8)
    this.animations.left = anim.slice(8,12)
    this.animations.up = anim.slice(12,16)
    
    this.animations.current = this.animations.idle
    
    this.setImage(this.animations.current.next())
    
    this.vx = 2
    this.vy = 2
    
    this.x_prev = this.x
    this.y_prev = this.y
    
    this.hp_max = 300
    this.hp = this.hp_max
    this.hp_counter_max = 300
    this.hp_counter = this.hp_counter_max
    this.damage = 1
    this.armed = false
    
    this.text = false
    this.text_timer = 0
    
    this.resistor = false
    this.transformer = false
    this.resonator = false
    this.wall_broken = false
    
    this.sounds = {}
    
    this.sounds['hit_wall'] = new Howl({
            urls: ['sounds/hit_wall.wav']
        })
    this.sounds['hit_wall'].timer = 0
    this.sounds['attacked'] = new Howl({
            urls: ['sounds/attacked.wav']
        })
    this.sounds['attacked'].timer = 0
    this.sounds['hit_monster'] = new Howl({
            urls: ['sounds/hit_monster.wav']
        })
    this.sounds['hit_monster'].timer = 0
    this.sounds['powerup'] = new Howl({
            urls: ['sounds/powerup.wav']
        })
    this.sounds['powerup'].timer = 0
}

Player.prototype = new Mob({})

Player.prototype.walk = function(direction)
{
    if (direction == 'left')
    {
        if (this.animations.current != this.animations.left)
        {
            this.animations.current = this.animations.left
        }
        this.x_prev = this.x
        this.x -= this.vx
    }
    
    else if (direction == 'right')
    {
        if (this.animations.current != this.animations.right)
        {
            this.animations.current = this.animations.right
        }
        this.x_prev = this.x
        this.x += this.vx
    }
    
    else if (direction == 'up')
    {
        if (this.animations.current != this.animations.up)
        {
            this.animations.current = this.animations.up
        }
        this.y_prev = this.y
        this.y -= this.vy
    }
    
    else if (direction == 'down')
    {
        if (this.animations.current != this.animations.down)
        {
            this.animations.current = this.animations.down
        }
        this.y_prev = this.y
        this.y += this.vy
    }
    
    this.setImage(this.animations.current.next())
}

Player.prototype.undo_walk = function()
{
    this.x = this.x_prev
    this.y = this.y_prev
}

Player.prototype.update = function()
{
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
    
    this.text_timer -= 1
    if (this.text_timer <= 0)
    {
        this.text_timer = 0
        this.text = false
    }
    
    if (this.text)
    {
        this.text.x = this.x+(8*game_scale)
        this.text.y = this.y-(8*game_scale)
    }
    
    this.sounds['hit_wall'].timer -= 1
    this.sounds['attacked'].timer -= 1
    this.sounds['hit_monster'].timer -= 1
    this.sounds['powerup'].timer -= 1
}

Player.prototype.get_facing_coords = function()
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

Player.prototype.talk = function(text)
{
    this.text = new jaws.Text({text: text, x:this.x+(8*game_scale), y:this.y-(8*game_scale), width:120, height:80, wordWrap:true, color:'white', fontFace: 'Arial'})
    this.text_timer = 300
}

Player.prototype.under_attack = function(text)
{
    var responses = ["Argh! My Blood!", "They're in my hair! They're in my hair!", "Ouch!", "Oof", "Aaaaah! Get away!"]
    var num = Math.floor(Math.random() * responses.length)
    
    this.talk(responses[num])
    this.play_sound('attacked')
}

Player.prototype.play_sound = function(sound)
{
    if (this.sounds[sound].timer <= 0)
    {
        this.sounds[sound].play()
        this.sounds[sound].timer = 10
    }
}