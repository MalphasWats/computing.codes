from PIL import Image, ImageTk

class SpriteSheet:
    
    def __init__(self, sprite_sheet_path, tile_width, tile_height):
        
        self.path = sprite_sheet_path
        self.tile_width = tile_width
        self.tile_height = tile_height
        
        self.frames = []
        
        img = Image.open(self.path)
        
        for y in range(img.size[0] // self.tile_height):
            for x in range(img.size[1] // self.tile_width):
                box = (x * self.tile_width, y * self.tile_height, 
                       x * self.tile_width + self.tile_width, y * self.tile_height + self.tile_height)
                       
                self.frames.append( ImageTk.PhotoImage(img.crop( box )) )
                
                
    def __iter__(self):
        return self.frames.__iter__()
        
    def __getitem__(self, key):
        return self.frames.__getitem__(key)