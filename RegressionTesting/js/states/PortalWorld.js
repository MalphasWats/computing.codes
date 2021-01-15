function PortalWorld()
{
	var hp, fps
	
	var floor
	var walls, viewport
	
	var portal
	
	var monsters
	
	var items
	
	this.setup = function()
	{
	    jaws.previous_game_state = {}
	    
	    var sound = new Howl({
            urls: ['sounds/portal.wav']
        }).play();
	    
	    hp = document.getElementById('hp')
	    fps = document.getElementById('fps')
	    
	    depth += 1
	    
	    var sprite_sheet = new jaws.SpriteSheet({image: "graphics/portal_world.png", orientation:'right', frame_size: [16,16]})
	    
	    walls = []
	    
	    /* Initialise the map */
	    var map = []
	    for (var x=0; x<world_width ; x++)
	    {
    	    for (var y=0 ; y<world_height ; y++)
    	    {
    	        var i = Math.floor(Math.random() * 1000)
    	        if (i > 300)
    	        {
    	            map.push(1)
                }
                else
                {
                    map.push(0)
                }
    	    }
	    }
	    
	    function apply_cellular_automaton(map, height, width, born, survive)
	    {
            var new_map = []
            var neighbours
            for (var x=0; x<world_width ; x++)
            {
                for (var y=0 ; y<world_height ; y++)
                {
                    if (x == 0 || y == 0 || y == height-1 || x == width-1)
                        new_map.push(true)
                    else
                    {
                        neighbours = 0
                        
                        neighbours += map[ ((y-1)*width)+(x-1) ]
                        neighbours += map[ ((y-1)*width)+x ]
                        neighbours += map[ ((y-1)*width)+(x+1) ]
                        
                        neighbours += map[ (y*width)+(x-1) ]
                        neighbours += map[ (y*width)+(x+1) ]
                        
                        neighbours += map[ ((y+1)*width)+(x-1) ]
                        neighbours += map[ ((y+1)*width)+x ]
                        neighbours += map[ ((y+1)*width)+(x+1) ]
                        
                        
                        if (map[ (y*width)+x ])
                        {
                            new_map.push(survive.indexOf(neighbours) > 0)
                        }
                        else
                        {
                            new_map.push(born.indexOf(neighbours) > 0)
                        }
                    }
                }
            }
            return new_map
	    }
	    
	    for (var i=0 ; i<4 ; i++)
	    {
            map = apply_cellular_automaton(map, world_height, world_width, [6, 7, 8], [3, 4, 5, 6, 7, 8])
        }
    
        for (var i=0 ; i<2 ; i++)
	    {
            map = apply_cellular_automaton(map, world_height, world_width, [5, 6, 7, 8], [5, 6, 7, 8])
        }
        
        for (var x=0; x<world_width ; x++)
	    {
    	    for (var y=0 ; y<world_height ; y++)
    	    {
    	        if (map[y*world_width+x])
    	        {
    	            if (x == 0 || y == 0 || y == world_height-1 || x == world_width-1)
    	            {
        	            var s = new Sprite({image: sprite_sheet.frames[2], x: x*16*game_scale, y: y*16*game_scale, scale_image:game_scale})
    	            }
    	            else
    	            {
    	                var s = new Sprite({image: sprite_sheet.frames[1], x: x*16*game_scale, y: y*16*game_scale, scale_image:game_scale})
                        s.hp = 25
                    }
    	            walls.push( s )
    	        }
    	    }   
        }   
	    
	    tilemap = new jaws.TileMap({size: [world_width, world_height], cell_size: [16*game_scale,16*game_scale]})
	    tilemap.push(walls)
	    
	    viewport = new jaws.Viewport({max_x: world_width*16*game_scale, max_y: world_height*16*game_scale})
	    
	    
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
                
        floor = new Sprite({image: buffer, x:0, y:0})
        
        while (jaws.collide(scientist, walls))
	    {
    	    scientist.x += 16*game_scale
    	    scientist.y += 16*game_scale
    	    
    	    if (scientist.x > world_width * 16 * game_scale)
    	    {
        	    scientist.x = Math.floor(Math.random() * world_width * 16 * game_scale)
    	    }
    	    if (scientist.y > world_height * 16 * game_scale)
    	    {
        	    scientist.y = Math.floor(Math.random() * world_height * 16 * game_scale)
    	    }
	    }
	    
	    scientist.hp -= 25
	    
	    if (depth == 1)
        {
            scientist.talk("Ouch! Hey, the portal! Noooooooo!")
        }
	    
	    
	    portal = new Sprite({x:Math.floor(Math.random() * world_width * 16 * game_scale)-8, y:Math.floor(Math.random() * world_height * 16 * game_scale)-8, anchor: "center", scale_image: game_scale})
	    while (jaws.collide(portal, walls))
	    {
    	    portal.x += 16
    	    portal.y += 16
    	    if (portal.x > world_width * 16 * game_scale)
    	    {
        	    portal.x = Math.floor(Math.random() * world_width * 16 * game_scale)
    	    }
    	    if (portal.y > world_height * 16 * game_scale)
    	    {
        	    portal.y = Math.floor(Math.random() * world_height * 16 * game_scale)
    	    }
	    }
	    portal.anim = new jaws.Animation({sprite_sheet: "graphics/portal.png", 
                                          frame_size: [16,16], 
                                          orientation: "right", 
                                          frame_duration: 120,
                                          scale_image:game_scale})
                                          
                                          
                                          
        var monster_count = Math.floor(Math.random() * depth * 100)
        monsters = []
        for (var i=0 ; i<monster_count ; i++)
        {
            var m = new Monster({x:Math.floor(Math.random() * world_width * 16 * game_scale)-8, y:Math.floor(Math.random() * world_height * 16 * game_scale)-8, anchor: "center", scale_image: game_scale})
    	    while (jaws.collide(m, walls) || tilemap.lineOfSight([scientist.x, scientist.y], [m.x, m.y]))
    	    {
        	    m.x += 16 * game_scale
        	    m.y += 16 * game_scale
        	    if (m.x > world_width * 16 * game_scale)
        	    {
            	    m.x = Math.floor(Math.random() * world_width * 16 * game_scale)
        	    }
        	    if (m.y > world_height * 16 * game_scale)
        	    {
            	    m.y = Math.floor(Math.random() * world_height * 16 * game_scale)
        	    }
    	    }
            monsters.push(m)
        }
        
        items = []
        var items_sheet = new jaws.SpriteSheet({image: "graphics/items.png", orientation:'right', frame_size: [16,16]})
        if (depth > 0 && !scientist.resistor)
        {
            var item = new Sprite({image: items_sheet.frames[8], x:portal.x+(16 * game_scale), y:portal.y+(16 * game_scale), anchor: "center", scale_image: game_scale})
            item.action = function ()
            {
                scientist.talk("A Flux Resistor! With a few more parts I can open a portal home maybe...")
                scientist.resistor = true
            }
            var wall = jaws.collideOneWithMany(item, walls)
            if (wall.length > 0)
            {
                delete walls[walls.indexOf(wall[0])]
                tilemap.clear()
                tilemap.push(walls)
            }
            items.push(item)
        }
        if (depth > 2 && !scientist.transformer)
        {
            var item = new Sprite({image: items_sheet.frames[9], x:Math.floor(Math.random() * world_width * 16 * game_scale)-8, y:Math.floor(Math.random() * world_height * 16 * game_scale)-8, anchor: "center", scale_image: game_scale})
            item.action = function ()
            {
                scientist.talk("An Optimus Transformer! I really just need 1 more thing...")
                scientist.transformer = true
            }
            while (jaws.collide(item, walls))
    	    {
        	    item.x += 16 * game_scale
        	    item.y += 16 * game_scale
        	    if (item.x > world_width * 16 * game_scale)
        	    {
            	    item.x = Math.floor(Math.random() * world_width * 16 * game_scale)
        	    }
        	    if (item.y > world_height * 16 * game_scale)
        	    {
            	    item.y = Math.floor(Math.random() * world_height * 16 * game_scale)
        	    }
            }
            items.push(item)
        }
        if (depth > 3 && !scientist.resonator)
        {
            var item = new Sprite({image: items_sheet.frames[10], x:Math.floor(Math.random() * world_width * 16 * game_scale)-8, y:Math.floor(Math.random() * world_height * 16 * game_scale)-8, anchor: "center", scale_image: game_scale})
            item.action = function ()
            {
                scientist.talk("The Tachyon Resonator! I can go home! To the portal!")
                scientist.resonator = true
            }
            while (jaws.collide(item, walls))
    	    {
        	    item.x += 16 * game_scale
        	    item.y += 16 * game_scale
        	    if (item.x > world_width * 16 * game_scale)
        	    {
            	    item.x = Math.floor(Math.random() * world_width * 16 * game_scale)
        	    }
        	    if (item.y > world_height * 16 * game_scale)
        	    {
            	    item.y = Math.floor(Math.random() * world_height * 16 * game_scale)
        	    }
            }
            items.push(item)
        }
        
        var mushroom_count = Math.floor(Math.random() * depth * 10)
        for (var i=0 ; i<mushroom_count ; i++)
        {
            var item = new Sprite({image: items_sheet.frames[5], x:Math.floor(Math.random() * world_width * 16 * game_scale)-8, y:Math.floor(Math.random() * world_height * 16 * game_scale)-8, anchor: "center", scale_image: game_scale})
            item.action = function ()
            {
                scientist.talk("Mmm, tasty!")
                scientist.play_sound('powerup')
                scientist.hp = 300
            }
            while (jaws.collide(item, walls))
    	    {
        	    item.x += 16 * game_scale
        	    item.y += 16 * game_scale
        	    if (item.x > world_width * 16 * game_scale)
        	    {
            	    item.x = Math.floor(Math.random() * world_width * 16 * game_scale)
        	    }
        	    if (item.y > world_height * 16 * game_scale)
        	    {
            	    item.y = Math.floor(Math.random() * world_height * 16 * game_scale)
        	    }
            }
            items.push(item)
        }
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
	    
	    var monsters_hit = jaws.collideOneWithMany(scientist, monsters)
	    var live_monster = false
	    for (var i=0 ; i<monsters_hit.length ; i++)
	    {
	        if (monsters_hit[i].alive)
	        {
	            var damage = monsters_hit[i].attack()
	            if (damage > 0)
	            {
	                scientist.under_attack()
                    scientist.hp -= damage
                }
        	    live_monster = true
            }
	    }
	    
	    if (jaws.pressed("space") || quint.touched("a") || quint.touched("b"))
	    {
	        if (live_monster) // && monsters_hit.length > 0)
	        {
	            var i=0
	            while (i<monsters_hit.length && !monsters_hit[i].alive)
	                i++
	            if (i < monsters_hit.length)
	            {
	                monsters_hit[i].hp -= scientist.damage
	                scientist.play_sound('hit_monster')
                    if (monsters_hit[i].hp <= 0)
                    {
    	                var j = monsters.indexOf(monsters_hit[i])
                        monsters[j].alive = false
                    }
    	        }
    	            
	        }
	        else
	        {
    	        var coords = scientist.get_facing_coords()
        	    
                var blocks_hit = tilemap.at(coords.x, coords.y)
                if (blocks_hit.length > 0)
                {
                    if (typeof blocks_hit[0].hp !== 'undefined')
                    {
                        if (!scientist.wall_broken)
                        {
                            scientist.talk("Hey, this wall is soft. Maybe if I hit it some more...")
                        }
                        blocks_hit[0].hp -= scientist.damage
                        scientist.play_sound('hit_wall')
                        //if (!scientist.armed) {scientist.hp -= 1}
                        if (blocks_hit[0].hp <= 0)
                        {
                            if (!scientist.wall_broken)
                            {
                                scientist.wall_broken = true
                                scientist.talk("Ha! Take that!")
                            }
                            var i = walls.indexOf(blocks_hit[0])
                            delete walls[i]
                            
                            tilemap.clear()
                            tilemap.push(walls)
                        }
                    }
                }
            }
	    }
	    
        var r = {}
        r.rect = function() { return new jaws.Rect(scientist.x-(4*game_scale), scientist.y-(4*game_scale), 8*game_scale, 8*game_scale) }
	    if (jaws.collide(r, walls))
	    {
	        scientist.undo_walk()
	    }
	    
	    scientist.update()
	    jaws.update(monsters)
	    
	    viewport.centerAround(scientist)
	    
	    if (scientist.hp <= 0)
	    {
    	    jaws.switchGameState(Dead)
	    }

	    
	    portal.setImage(portal.anim.next())
	    
	    if (jaws.collideOneWithOne(scientist, portal))
	    {
	        if (scientist.resistor && scientist.transformer && scientist.resonator)
	        {
    	        jaws.switchGameState(Lab)
	        }
	        else
	        {
    	        jaws.switchGameState(PortalWorld)
    	    }
	    }
	    
	    var items_collected = jaws.collideOneWithMany(scientist, items)
	    for (var i=0 ; i<items_collected.length ; i++)
	    {
    	    items_collected[i].action()
    	    items[items.indexOf(items_collected[i])] = 'undefined'
	    }
	
        if (scientist.hp < 300) {hp.style.color = 'red'}
        else {hp.style.color = 'white'}
        hp.innerHTML = scientist.hp + ' / ' + scientist.hp_max
    	fps.innerHTML = jaws.game_loop.fps
	}
	
	this.draw = function()
	{
	    jaws.clear()
	    floor.draw()
        viewport.drawTileMap(tilemap)
        viewport.apply( function()
        {
            scientist.draw()
            if (scientist.text)
                scientist.text.draw()
            portal.draw()
            jaws.draw(monsters)
            jaws.draw(items)
        })
	}
}

