from tkinter import *
from PIL import Image, ImageTk


################################
## Create a Sprite class that ##
## inherits from Tile class   ##
################################
        
        
class Tile:
    """
        Simple tile.
    """
    def __init__(self, canvas, image_path, x=0, y=0):
        self.x = x
        self.y = y
        self.canvas = canvas
        
        self.img = ImageTk.PhotoImage(Image.open(image_path))
        self.id = canvas.create_image((self.x, self.y), image=self.img)
        
    def update(self):
        pass
        
    def draw(self):
        self.canvas.coords(self.id, (self.x, self.y))
        self.canvas.itemconfigure(self.id, image=self.img)

    def collide(self, x, y):
        if x >= self.x-16 and x <= self.x+16 and y >= self.y-16 and y <= self.y+16:
            return True
        
        return False
        
        
class ScrollTile(Tile):
    """
        Simple Scrolling Tile.
    """
    def __init__(self, canvas, image_path, x=0, y=0, rate=0, step=1):
        Tile.__init__(self, canvas, image_path, x, y)
        
        self.counter = 0
        self.rate = rate
        self.step = step

    def update(self):
        if self.counter > self.rate:
            self.x -= self.step
            if self.x < -(self.img.width()/2):
                self.x = 512+self.img.width() / 2 - 1
            self.counter = 0
        self.counter += 1
        
        
class Scene:
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
        
        self.timer = [0, 0, 0]
        
        self.status_text = StringVar()
        self.status_bar = Label(window, textvariable=self.status_text)
        #self.status_bar.pack()
        
        self.status_bar.place(x=350, y=0)
        
        self.status_text.set( "Coins: 0        Time: 00:00:00" )
        
        self.update()
        self.draw()
        
    def update(self):
    
        for tile in self.tiles:
            tile.update()
    
        for sprite in self.sprites:
            sprite.update()
            
        self.timer[2] += 16
        if self.timer[2] > 1000:
            self.timer[2] = 0
            self.timer[1] += 1
        if self.timer[1] > 59:
            self.timer[1] = 0
            self.timer[0] += 1
            
        self.status_text.set("Coins: 0         Time: %02d:%02d:%03d" % (self.timer[0],self.timer[1],self.timer[2]) )
            
        self.window.after(16, self.update)   # Call update again in 16ms ~ 60fps
        
    def draw(self):
        for tile in self.tiles:
            tile.draw()
        for sprite in self.sprites:
            sprite.draw()
            
        
            
        self.canvas.update_idletasks()
        self.window.after(16, self.draw)     # Call draw again in 16ms ~ 60fps
        
    def set_background(self, image_path):
        img = Image.open(image_path)
        self.background_1 = ScrollTile(canvas, ImageTk.PhotoImage(img), 256, 64, 5, 1)
        self.background_2 = ScrollTile(canvas, ImageTk.PhotoImage(img), 256+512, 64, 5, 1)
        
    def add_sprite(self, sprite):
        self.sprites.append( sprite )
        
    def add_tile(self, tile):
        self.tiles.append( tile )


if __name__ == "__main__":

    tk = Tk()                                   # Create a new window
    tk.title("Runpy")                           # Set the window title
    
    canvas = Canvas(tk, width=512, height=128)  # Create a canvas object to draw on
    canvas.pack()
    
    scene = Scene(tk, canvas)                   # Create a Scene object from the Scene class.
    
    scene.add_tile( ScrollTile(canvas, "background.png", 256, 64, 5, 1) )
    scene.add_tile( ScrollTile(canvas, "background.png", 256+512, 64, 5, 1) )
    
    for i in range(16+1):
        scene.add_tile( ScrollTile(canvas, "tile_01.gif", 32*i+16, 116, 0, 2) )
        
        
    ### Create a sprite Object from Sprite class ###
    
    
    
    tk.mainloop()                               # Show the window and start the
                                                # event loop listening for events