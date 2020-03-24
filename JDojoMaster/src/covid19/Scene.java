package covid19;

import javax.swing.JPanel;
import java.awt.Graphics;
import java.awt.Dimension;

import java.util.List;
import java.util.ArrayList;

public class Scene extends JPanel {

    static final long serialVersionUID = 1;

    private int width;
    private int height;

    private List<Sprite> sprites = new ArrayList<Sprite>();

    public Scene() {
        super();              // Make sure to call the JPanel constructor

        width = 256;          // Default width
        height = 256;         // Default height
    }

    public Dimension getPreferredSize() {
        return new Dimension(this.width,this.height);
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        sprites.forEach((s)->s.draw(g));
    }

    public void addSprite(Sprite s) {
        sprites.add(s);
    }

}
