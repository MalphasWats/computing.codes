## Pyxel - SUPER simple game library ##
from tkinter import Tk, Canvas, Label, StringVar
from PIL import Image
from PIL.ImageTk import PhotoImage

import time
import math

DEFAULT_WIDTH = 400
DEFAULT_HEIGHT = 400

########################
##                    ##
##     Game Class     ##
##                    ##
########################

class Game:

    def __init__(self, width=DEFAULT_WIDTH, height=DEFAULT_HEIGHT, title="Pyxel Game"):
        self.window = Tk()                          # Create a new window
        self.window.title(title)                    # Set the window title
        
        self.window_width = width
        self.window_height = height
    
        self.canvas = Canvas(self.window, width=self.window_width, height=self.window_height, background='black')
        self.canvas.pack()
        
        self.current_scene = Scene() # Empty Scene
        self.running = False
        
        ## TODO make this canvas text
        self.status_text = StringVar()
        self.status_bar = Label(self.window, textvariable=self.status_text)
        
        self.status_bar.place(x=0, y=0)
        
        self.MAX_SAMPLE = 60
        self.status_text.set( "fps: 0" )
        self.fps_history = [1] * self.MAX_SAMPLE
        
        buffer = Image.new('RGBA', (self.window_width, self.window_height))
        buffer.paste('black', (0,0, self.window_width, self.window_height))
        self.buffer = PhotoImage( buffer )
        self.buffer_id = self.canvas.create_image((self.window_width//2, self.window_height//2), image=self.buffer)
        ## TODO ##
        # register listeners #
        self.window.protocol("WM_DELETE_WINDOW", self.stop)
        
        self.mouse_x = 0
        self.mouse_y = 0
        self.window.bind('<Motion>', self._update_mouse)
        
        self.keys = {'W': False, 'A': False, 'S': False, 'D': False, ' ': False}
        
        self.window.bind("<KeyRelease>", self._handle_key_up)    # bind the keyboard to a handler routine
        self.window.bind("<Key>", self._handle_key_down)
        
        
    def start(self):
        self.running = True
        #self.window.mainloop()
        self.gameloop()
        
    def stop(self):
        self.running = False
        
    def gameloop(self):
        time_since_last_frame = time.clock()
        while self.running:
            now = time.clock()
            delta = now - time_since_last_frame
            if delta >= 0.033: # ~30fps    #0.0166: # ~60fps
                time_since_last_frame = time.clock()
                self.window.after_idle(self._update)
                self.window.after_idle(self._draw)
                self.fps_history = self.fps_history[1:]
                self.fps_history.append(delta)
                
                self.window.after_idle(self.status_text.set,  "fps: {fps:.1f}".format(fps = 1 / (sum(self.fps_history) / self.MAX_SAMPLE)) )
                
            self.window.update()

        ##########################
        ## Close button clicked ##
        ##########################
        self.window.destroy()
        
    def set_scene(self, scene):
        self.current_scene = scene
        self.current_scene.set_viewport(self.window_width, self.window_height)
        
    def _update_mouse(self, event):
        self.mouse_x = event.x
        self.mouse_y = event.y
        
    def _handle_key_down(self, event):
        char = repr(event.char).upper()[1]
        if char in self.keys:
            self.keys[char] = True
        
    def _handle_key_up(self, event):
        char = repr(event.char).upper()[1]
        if char in self.keys:
            self.keys[char] = False
        
    def _update(self):
        self.current_scene.update()
        
    def _draw(self):
        scene_image = self.current_scene._draw()
        self.buffer = PhotoImage(scene_image)
        self.canvas.itemconfigure( self.buffer_id, image=self.buffer )
        
########################
##                    ##
##    Scene Class     ##
##                    ##
########################

class Scene:

    def __init__(self, width=DEFAULT_WIDTH, height=DEFAULT_HEIGHT):
        self.width = width
        self.height = height 
        self.viewport_width = 0
        self.viewport_height = 0
        
        self.viewport_x = 0
        self.viewport_y = 0
        
        self.sprites = []
        self.tiles = []

        self.graph = []
        
    def set_viewport(self, width, height):
        if width > self.width:
            self.viewport_width = self.width
        else:
            self.viewport_width = width
        if height > self.height:
            self.viewport_height = self.height
        else:
            self.viewport_height = height
        
        self.viewport_x = 0
        self.viewport_y = 0
        self.viewport_x_prev = 0
        self.viewport_y_prev = 0
        
    def add_sprite(self, sprite):
        self.sprites.append(sprite)
        
        self.graph.append(sprite)
                    
    def add_tile(self, tile):
        self.tiles.append(tile)
        
        self.graph.append(tile)
          
    def centre_on(self, item):
        self.viewport_x_prev = self.viewport_x
        self.viewport_y_prev = self.viewport_y
    
        self.viewport_x = item.x - self.viewport_width // 2
        self.viewport_y = item.y - self.viewport_height // 2
        
        if self.viewport_x < 0:
            self.viewport_x = 0
        if self.viewport_y < 0:
            self.viewport_y = 0
            
        if self.viewport_x + self.viewport_width > self.width:
            self.viewport_x = self.width - self.viewport_width
        if self.viewport_y + self.viewport_height > self.height:
            self.viewport_y = self.height - self.viewport_height
        
    def item_is_visible(self, item):
        # TODO: should use get_position to incorporate z
        return (item.x+item.width > self.viewport_x and item.x-item.width < self.viewport_x+self.viewport_width and
                item.y+item.height > self.viewport_y and item.y-item.height < self.viewport_y+self.viewport_height)
                
                
    def update(self):
        for item in self.graph:
            item.update()
            
        self.graph = sorted(self.graph)

        
    def _draw(self):
        x = self.viewport_x
        y = self.viewport_y
        buffer = Image.new('RGBA', (self.viewport_width, self.viewport_height))
        
        for item in self.graph:
        
            pos = item.get_position()
            buffer.paste(item.image, (pos[0]-x, pos[1]-y), item.image )
            
        
        return buffer
        
        
########################
##                    ##
## SpriteSheet Class  ##
##                    ##
########################

class SpriteSheet:
    
    def __init__(self, image_path=None, image=None, frame_width=16, frame_height=16, scale=1):
            
        if image_path:
            image = Image.open(image_path)
            image = image.resize( (image.size[0] * scale, image.size[1] * scale), Image.NEAREST)
            
        self.frame_width = frame_width * scale
        self.frame_height = frame_height * scale
        
        self.frames = []
        
        if image:
            for y in range(image.size[1] // self.frame_height):
                for x in range(image.size[0] // self.frame_width):
                    box = (x * self.frame_width, y * self.frame_height, 
                           x * self.frame_width + self.frame_width, y * self.frame_height + self.frame_height)
      
                    self.frames.append( image.crop( box ) )
                    
    def __iter__(self):
        return self.frames.__iter__()
        
    def __getitem__(self, key):
        return self.frames.__getitem__(key)
        
    def __len__(self):
        return len(self.frames)

        
########################
##                    ##
##    Sprite Class    ##
##                    ##
########################

class Sprite:

    def __init__(self, frames=None, image=None, x=0, y=0, z=0, angle=0, scale=1, frame_duration=0.08):
        self.x = x
        self.y = y
        self.z = z
        
        self.angle = angle
        
        self.id = None
        
        self.frames = frames
        
        if image:
            self.frames = [image]
            
        self.frame_count = len(self.frames)
        
        self.frame = 0
        self.image = self.frames[self.frame]
        self.animation_timer = time.clock()
        self.frame_duration = frame_duration
        
        self.width = self.image.size[0]
        self.height = self.image.size[1]
        
        self.light_radius = 0
        
    def update(self):
        if self.frame_count > 1:
            ts = time.clock()
            if ts - self.animation_timer >= self.frame_duration:
                self.frame += 1
                if self.frame >= self.frame_count:
                    self.frame = 0
                
                self.animation_timer = ts
                
        self.image = self.frames[self.frame].rotate(self.angle)
    
    def get_position(self):
        z = self.z-1
        if z < 0:
            z=0
        return (self.x-self.width//2, self.y-z*self.height-self.height//2)
        
    def is_touching(self, item): # TODO: I think the box is the wrong size
        if self is item:
            return True
        d = 1
        item_pos = item.get_position()
        self_pos = self.get_position()
        box = ( item_pos[0], item_pos[1], item_pos[0]+item.width, item_pos[1]+item.height)
        return ( (self_pos[0]-d > box[0] and self_pos[0]-d < box[2] and self_pos[1]-d > box[1] and self_pos[1]-d < box[3]) or
                 (self_pos[0]+self.width+d > box[0] and self_pos[0]+self.width+d < box[2] and self_pos[1]-d > box[1] and self_pos[1]-d < box[3]) or
                 (self_pos[0]+self.width+d > box[0] and self_pos[0]+self.width+d < box[2] and self_pos[1]+self.height+d > box[1] and self_pos[1]+self.height+d < box[3]) or
                 (self_pos[0]-d > box[0] and self_pos[0]-d < box[2] and self_pos[1]+self.height+d > box[1] and self_pos[1]+self.height+d < box[3]) )
                
    def _set_id(self, id):
        self.id = id
        
    def __lt__(self, other):
        if self.y+(self.z*self.height) == other.y+(other.z*self.height):
            return self.x < other.x
        return self.y+(self.z*self.height) < other.y+(other.z*self.height)
        
# Alias for Sprite. I like the distinction and eventually sprites and tiles 
# could be different.
class Tile(Sprite):
    pass
    #def __init__(self, frames=None, image=None, x=0, y=0, z=0, scale=1, frame_duration=0.08):
    #    super().__init__(frames=frames, image=image, x=x, y=y, z=z, frame_duration=frame_duration)