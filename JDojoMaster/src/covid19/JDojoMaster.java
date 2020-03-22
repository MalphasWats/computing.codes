package covid19;

import javax.swing.JFrame;

public class JDojoMaster extends JFrame {

    static final long serialVersionUID = 0;

    protected Scene scene;
    
    public static void main(String[] args) {

        JDojoMaster window = new JDojoMaster();
    }

    public JDojoMaster() {

        setTitle("JDojoMaster");
        setResizable(false);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        scene = new Scene();
        add(scene);
        pack();

        setVisible(true);

    }
}
