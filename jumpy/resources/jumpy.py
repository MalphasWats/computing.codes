from tkinter import *

class Sprite(object):
    """
        Sprite represents a moving object on the screen
    """
    def __init__(self, scene, x=0, y=0):
        self.x = x
        self.y = y
        self.scene = scene
        self.canvas = scene.canvas
        
        self.vx = 0
        self.vy = 0
        self.can_jump = True
        
        self.img = PhotoImage(file='sprite_01.gif')
        self.id = canvas.create_image((self.x, self.y), image=self.img)
        
    def update(self):
        
        ################
        ## Activity 1 ##
        ################
        
        
        ################
        ## Activity 4 ##
        ################
        
        
        
        # Limit the sprite inside the canvas
        if self.x > self.canvas.winfo_width(): 
            self.x = self.canvas.winfo_width()
            
        if self.x < 0:
            self.x = 0
            
        if self.y > self.canvas.winfo_height():
            self.y = self.canvas.winfo_height()
        if self.y < 0:
            self.y = 0
        
    
    def draw(self):
        self.canvas.coords(self.id, (self.x, self.y))
        self.canvas.itemconfigure(self.id, image=self.img)
        
        
class Tile(object):
    """
        Simple tile.
    """
    def __init__(self, canvas, x=0, y=0):
        self.x = x
        self.y = y
        self.canvas = canvas
        
        self.img = PhotoImage(file='tile_01.gif')
        self.id = canvas.create_image((self.x, self.y), image=self.img)
        
    def draw(self):
        self.canvas.coords(self.id, (self.x, self.y))
        self.canvas.itemconfigure(self.id, image=self.img)
        
    ################
    ## Activity 2 ##
    ################
        
        
class Scene(object):
    """
        This object represents our game. It handles the keyboard inputs and sets up a
        loop for updating and drawing sprites and tiles.
    """
    def __init__(self, window, canvas):
        self.window = window
        self.canvas = canvas
        
        self.keys = {'W': False, 'A': False, 'S': False, 'D': False, ' ': False}
        
        self.sprites = []
        self.tiles = []
        
        self.window.after(50, self.update)  # Start the update & draw loops
        self.window.after(50, self.draw)    # use 50ms to allow window to display
        
    def update(self):
        
        ################
        ## Activity 3 ##
        ################
        
        
        
        for sprite in self.sprites:
            sprite.update()
            
        self.window.after(5, self.update)   # Call update again in 5ms ~ 12fps
        
    def draw(self):
        for tile in self.tiles:
            tile.draw()
        for sprite in self.sprites:
            sprite.draw()
            
        self.canvas.update_idletasks()
        self.window.after(5, self.draw)     # Call draw again in 5ms ~ 12fps
        
    def add_sprite(self, sprite):
        self.sprites.append(sprite)
        
    def add_tile(self, x, y):
        self.tiles.append( Tile(self.canvas, x+16, y+16) )
        
    def handle_key_down(self, event):
        char = repr(event.char).upper()[1]
        if char in self.keys:
            self.keys[char] = True
        
    def handle_key_up(self, event):
        char = repr(event.char).upper()[1]
        if char in self.keys:
            self.keys[char] = False


if __name__ == "__main__":

    tk = Tk()                                   # Create a new window
    tk.title("Jumpy")                           # Set the window title
    
    canvas = Canvas(tk, width=480, height=320)  # Create a canvas object to draw on
    canvas.pack()
    
    scene = Scene(tk, canvas)                   # Create a Scene object from the Scene
                                                # class above
    player = Sprite(scene, 48, 48)
    
    scene.add_sprite(player)                    # Add the player sprite to the scene
    
    scene.add_tile(1*32, 8*32)                  # Add some tiles to the scene to
    scene.add_tile(2*32, 8*32)                  # create a level. Tiles are 32px
    scene.add_tile(3*32, 8*32)                  # so 3*32, 8*32 puts it in the
                                                # 3rd column, 8th row
    
    tk.bind("<KeyRelease>", scene.handle_key_up)    # bind the keyboard to a handler routine
    tk.bind("<Key>", scene.handle_key_down)
    
    tk.mainloop()                               # Show the window and start the
                                                # event loop listening for events