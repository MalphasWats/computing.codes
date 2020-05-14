package covid19;

import java.awt.event.KeyListener;
import java.awt.event.KeyEvent;

public class GameController implements KeyListener {

    public boolean up, down, left, right, action_1;

    public void keyPressed(KeyEvent e)
    {
        int key = e.getKeyCode();

        if (key == KeyEvent.VK_UP) {
			up = true;
		}
		if (key == KeyEvent.VK_DOWN) {
			down = true;
		}
		if (key == KeyEvent.VK_LEFT) {
			left = true;
		}
		if (key == KeyEvent.VK_RIGHT) {
			right = true;
		}
        if (key == KeyEvent.VK_X) {
			action_1 = true;
		}
    }

	public void keyReleased(KeyEvent e)
    {
        int key = e.getKeyCode();

        if (key == KeyEvent.VK_UP) {
			up = false;
		}
		if (key == KeyEvent.VK_DOWN) {
			down = false;
		}
		if (key == KeyEvent.VK_LEFT) {
			left = false;
		}
		if (key == KeyEvent.VK_RIGHT) {
			right = false;
		}
        if (key == KeyEvent.VK_X) {
			action_1 = false;
		}
    }

    /*
     * 		Not used, needs to be implemented for Interface
     */
    public void keyTyped(KeyEvent e){}
}
