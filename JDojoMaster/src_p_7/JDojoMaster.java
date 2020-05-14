//javac -d bin src/covid19/*.java
//java -cp bin/ covid19.JDojoMaster

package covid19;

import javax.swing.JFrame;

import java.util.List;
import java.util.ArrayList;

import java.util.Random;

public class JDojoMaster extends JFrame {

    static final long serialVersionUID = 0;

    protected Scene scene;
    protected Sprite player;
    protected Spritesheet spritesheet;

    protected GameController controller;

    protected List<Sprite> north_lane = new ArrayList<Sprite>();
    protected List<Sprite> east_lane = new ArrayList<Sprite>();
    protected List<Sprite> south_lane = new ArrayList<Sprite>();
    protected List<Sprite> west_lane = new ArrayList<Sprite>();

    protected Random RNG;

    public static void main(String[] args) {

        JDojoMaster window = new JDojoMaster();

        window.gameloop();
    }

    public void gameloop() {
		long timer;
        long update_timer = 80;
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

            update_timer -= 1;

            if (update_timer == 0) {

                north_lane.forEach((s)->s.movePosition(0, 32));
                south_lane.forEach((s)->s.movePosition(0, -32));
                east_lane.forEach((s)->s.movePosition(-32, 0));
                west_lane.forEach((s)->s.movePosition(32, 0));

                int lane = RNG.nextInt(4);
                Sprite enemy;

                if (lane == 0) {
                    enemy = new Sprite(spritesheet.getTile(8));
                    enemy.setPosition((256/2)-16, 16);
                    north_lane.add(enemy);
                }
                else if (lane == 1) {
                    enemy = new Sprite(spritesheet.getTile(11));
                    enemy.setPosition((256/2)+80, (256/2)-16);
                    east_lane.add(enemy);
                }
                else if (lane == 2) {
                    enemy = new Sprite(spritesheet.getTile(9));
                    enemy.setPosition((256/2)-16, (256/2)+80);
                    south_lane.add(enemy);
                }
                else {
                    enemy = new Sprite(spritesheet.getTile(10));
                    enemy.setPosition((256/2)-112, (256/2)-16);
                    west_lane.add(enemy);
                }


                scene.addSprite(enemy);

                update_timer = 120;

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

        RNG = new Random();

        spritesheet = new Spritesheet("/spritesheet.png", 32);
        player = new Sprite(spritesheet.getTile(0));

        player.setPosition(128-16, 128-16);

        scene.addSprite(player);

        scene.repaint();
    }
}
