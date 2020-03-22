package covid19;

import javax.swing.JPanel;
import java.awt.Dimension;

public class Scene extends JPanel {

	static final long serialVersionUID = 1;

	private int width;
	private int height;

	public Scene() {
		super();              // Make sure to call the JPanel constructor

		width = 256;          // Default width
		height = 256;         // Default height
	}

    public Dimension getPreferredSize() {
        return new Dimension(this.width,this.height);
    }

}
