function Lab()
{
	var hp, fps
	
	var map
	
	var portal
	
	this.setup = function()
	{
	    jaws.previous_game_state = {}
	    
	    hp = document.getElementById('hp')
	    fps = document.getElementById('fps')
	    
	    var sprite_sheet = new jaws.SpriteSheet({image: "graphics/laboratory.png", frame_size: [16,16]})
	    
	    var buffer = document.createElement('canvas')
        buffer.width = jaws.width
        buffer.height = jaws.height
        var buffer_context = buffer.getContext('2d')
        
        for (var x=0 ; x<16 ; x++)
        {
            for (var y=0 ; y<16 ; y++)
            {
                buffer_context.drawImage(sprite_sheet.frames[0], x*16*game_scale, y*16*game_scale, 16*game_scale, 16*game_scale)
            }
        }
                
        map = new Sprite({image: buffer, x:0, y:0})
	    
	    scientist = new Player({x:64-(8 * game_scale), y:64-(8 * game_scale), anchor: "center", scale_image: game_scale})
	    
	    if (depth == 0)
	    {
	        scientist.talk("It worked! This changes everything!")
	    }
	    else
	    {
    	    scientist.talk("Home! At last.")
    	    depth = 0
	    }
	    
	    portal = new Sprite({x:(128 * game_scale)-(8 * game_scale), y:(128 * game_scale)-(8 * game_scale), anchor: "center", scale_image: game_scale})
	    portal.anim = new jaws.Animation({sprite_sheet: "graphics/portal.png", 
                                          frame_size: [16,16], 
                                          orientation: "right", 
                                          frame_duration: 120,
                                          scale_image:game_scale})
	}
	
	this.update = function()
	{
	    if (jaws.pressed("a") || quint.touched("left"))
	    {
    	    scientist.walk('left')
	    }
	    
	    if (jaws.pressed("w") || quint.touched("up"))
	    {
    	    scientist.walk('up')
	    }
	    
	    if (jaws.pressed("s")|| quint.touched("down"))
	    {
    	    scientist.walk('down')
	    }
	    
	    if (jaws.pressed("d") || quint.touched("right"))
	    {
    	    scientist.walk('right')
	    }
	    
	    jaws.forceInsideCanvas(scientist)
	    
	    portal.setImage(portal.anim.next())
	    
	    if (jaws.collideOneWithOne(scientist, portal))
	    {
    	    jaws.switchGameState(PortalWorld)
	    }
	    
	    scientist.update()
	    
	    if (scientist.hp < 300) {hp.style.color = 'red'}
        else {hp.style.color = 'white'}
        hp.innerHTML = scientist.hp + ' / ' + scientist.hp_max
    	fps.innerHTML = jaws.game_loop.fps
	}
	
	this.draw = function()
	{
	    jaws.clear()
	    map.draw()
    	scientist.draw()
    	if (scientist.text) {scientist.text.draw()}
    	portal.draw()
	}
}

