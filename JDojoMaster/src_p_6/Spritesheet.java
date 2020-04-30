package covid19;

import java.awt.image.BufferedImage;
import java.awt.Graphics;
import java.awt.Color;

import javax.imageio.ImageIO;

import java.util.List;
import java.util.ArrayList;

public class Spritesheet {


    protected BufferedImage image;
    protected List<BufferedImage> tiles = new ArrayList<BufferedImage>();

    public Spritesheet(String image_file, int tile_size) {
        try {
            image = ImageIO.read(getClass().getResource(image_file));
            for (int rows=0 ; rows < image.getWidth() / tile_size ; rows++) {

                for (int cols=0 ; cols < image.getHeight() / tile_size ; cols++) {

                    BufferedImage img;
                    img = image.getSubimage(cols*tile_size, rows*tile_size, tile_size, tile_size);
                    tiles.add(img);
                }

            }

        }
        catch (Exception e) {
            System.out.println("Error loading image.");
            image = new BufferedImage(32, 32, BufferedImage.TYPE_INT_RGB);
            Graphics g = image.getGraphics();

            g.setColor(new Color(255, 0, 255));
            g.fillRect(0, 0, 32, 32);
        }
    }

    public BufferedImage getTile(int tile) {
        //eturn this.image;
        if (tiles.size() == 0) {
            return image;
        }
        return tiles.get(tile);
    }
}
