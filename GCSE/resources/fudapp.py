from tkinter import *

WIDTH = 500     # Window Width
HEIGHT = 500    # Window Height

# Put your functions here


# Main set up
if __name__ == "__main__":

    window = Tk()                           # Create a new window
    window.title("Window Title")            # Set the window title
    
    window.minsize(width=WIDTH, height=HEIGHT)

    label = Label(window, text="This is a label", font=("Helvetica", 26))
    label.pack()
    #label.place(x=50, y=200)
    
    window.mainloop()                       # Show the window and start the
                                            # event loop listening for events