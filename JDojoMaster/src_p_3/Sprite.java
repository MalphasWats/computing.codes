package covid19;

import java.awt.image.BufferedImage;
import java.awt.Graphics;
import java.awt.Color;

import javax.imageio.ImageIO;

public class Sprite {

    protected BufferedImage image;
    protected int x;
    protected int y;

    /* Default constructor */
    public Sprite() {
        x = 0;
        y = 0;

        image = new BufferedImage(32, 32, BufferedImage.TYPE_INT_RGB);
        Graphics g = image.getGraphics();

        g.setColor(new Color(255, 0, 255));
        g.fillRect(0, 0, 32, 32);
    }

    public Sprite(String image_file) {
        this();
        try {
            image = ImageIO.read(getClass().getResource(image_file));
        }
        catch (Exception e) {
            // Do nothing
        }
    }

    public Sprite(BufferedImage img) {
        this();
        image = img;
    }

    public void draw(Graphics g) {
		g.drawImage(image, x, y, null);
	}
}
