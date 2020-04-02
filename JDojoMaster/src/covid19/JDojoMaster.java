package covid19;

import javax.swing.JFrame;

public class JDojoMaster extends JFrame {

    static final long serialVersionUID = 0;

    protected Scene scene;
    protected Sprite player;
    protected Spritesheet spritesheet;

    protected GameController controller;

    public static void main(String[] args) {

        JDojoMaster window = new JDojoMaster();

        window.gameloop();
    }

    public void gameloop() {
		long timer;
		while (true) {
			timer = System.currentTimeMillis();

            if (controller.up) {
                player.setImage(spritesheet.getTile(1));
            }
            if (controller.down) {
                player.setImage(spritesheet.getTile(0));
            }
            if (controller.left) {
                player.setImage(spritesheet.getTile(3));
            }
            if (controller.right) {
                player.setImage(spritesheet.getTile(2));
            }

            scene.repaint();

			timer = (1000 / 60) - (System.currentTimeMillis() - timer);

			if (timer > 0) {
                try {
                        Thread.sleep(timer);
                }
                catch(Exception e){}
			}
			//else - update & draw taking too long for 60fps
		}
    }

    public JDojoMaster() {

        setTitle("JDojoMaster");
        //setResizable(false);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        scene = new Scene();
        add(scene);
        pack();

        setVisible(true);

        init();
    }

    private void init() {
        controller = new GameController();
        addKeyListener(controller);

        spritesheet = new Spritesheet("/spritesheet.png", 32);
        player = new Sprite(spritesheet.getTile(0));

        scene.addSprite(player);

        scene.repaint();
    }
}
