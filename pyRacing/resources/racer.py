from pyxel import *
import random
import math

WIDTH = 320
HEIGHT = 320
SCALE = 2
TILE_SIZE = 32

class Car(Sprite):

    def __init__(self, frames=None, image=None, x=0, y=0, z=0, scale=1, frame_duration=0.08):
        super().__init__(frames, image, x, y, z, scale, frame_duration)
        
        self.initial_rotation = -90
        self.angle = self.initial_rotation
        
        self.speed = 3
    
    def update(self):
        if self.x > track_width * TILE_SIZE * SCALE:
            self.x = 0
        elif self.x < 0:
            self.x = track_width * TILE_SIZE * SCALE
        if self.y > track_height * TILE_SIZE * SCALE:
            self.y = 0
        elif self.y < 0:
            self.y = track_height * TILE_SIZE * SCALE
        
        # Need to calculate x and y based on angle
        x = math.cos( math.radians(self.angle - self.initial_rotation) ) * self.speed
        y = math.sin( math.radians(self.angle - self.initial_rotation) ) * self.speed
        
        self.x += math.floor(x)     # Can't have fractional pixels!
        self.y += math.floor(-y)
        scene1.centre_on(self)
        
        super().update()


my_game = Game(width=WIDTH, height=HEIGHT)

sprite_sheet = SpriteSheet(image_path='tiles.png', frame_width=TILE_SIZE, frame_height=TILE_SIZE, scale=SCALE)

track = [ 5, 7, 7, 7, 4, 
          2, 8, 8, 8, 2,
          2, 8, 8, 8, 2,
          2, 8, 8, 8, 2,
          6, 7, 7, 7, 3 ]
          
track_width = 5
track_height = 5

car_start_x = 0
car_start_y = 0

scene1 = Scene(width=track_width * TILE_SIZE * SCALE, height=track_height * TILE_SIZE * SCALE)

car_sprite = Car(image=sprite_sheet[0], x=car_start_x*TILE_SIZE*SCALE+TILE_SIZE, y=car_start_y*TILE_SIZE*SCALE+TILE_SIZE, z=1)
scene1.add_sprite(car_sprite)

for y in range(track_height):
    for x in range(track_width):
        tile = Tile(image=sprite_sheet[ track[y*track_width+x] ], x=x*TILE_SIZE*SCALE+TILE_SIZE, y=y*TILE_SIZE*SCALE+TILE_SIZE)
        scene1.add_tile(tile)

        
my_game.set_scene(scene1)
my_game.start() # This Blocks.